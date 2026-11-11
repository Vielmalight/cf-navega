/* =========================================================
   WIKI HIPOTECARIA CREDIFAMILIA
   NAVEGACIÓN MULTI-PÁGINA, BUSCADOR GLOBAL Y SELECTOR GUIADO
   ========================================================= */

(function () {
  "use strict";

  const $ = (selector, scope) => (scope || document).querySelector(selector);
  const $$ = (selector, scope) => Array.from((scope || document).querySelectorAll(selector));

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  const currentPage = document.body.dataset.page || "";
  const currentFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  /* =======================================================
     MENÚ DESPLEGABLE DEL HEADER
     ======================================================= */

  const dropdowns = $$(".nav-dropdown");

  function closeDropdowns(except) {
    dropdowns.forEach((dropdown) => {
      if (dropdown === except) return;
      dropdown.classList.remove("is-open");
      const toggle = $(".nav-toggle", dropdown);
      const menu = $(".nav-menu", dropdown);
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      if (menu) menu.hidden = true;
    });
  }

  dropdowns.forEach((dropdown) => {
    const toggle = $(".nav-toggle", dropdown);
    const menu = $(".nav-menu", dropdown);
    if (!toggle || !menu) return;

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const willOpen = menu.hidden;
      closeDropdowns(dropdown);
      menu.hidden = !willOpen;
      dropdown.classList.toggle("is-open", willOpen);
      toggle.setAttribute("aria-expanded", String(willOpen));
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-dropdown")) closeDropdowns();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDropdowns();
  });

  /* =======================================================
     PROGRESO DE LECTURA Y VOLVER ARRIBA
     ======================================================= */

  const progressBar = $("#readingProgress");
  const toTop = $("#toTop");

  function updateScrollUI() {
    const doc = document.documentElement;
    const scrollTop = window.pageYOffset || doc.scrollTop || 0;
    const max = doc.scrollHeight - window.innerHeight;

    if (progressBar) {
      const percent = max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0;
      progressBar.style.width = percent + "%";
    }

    if (toTop) toTop.classList.toggle("is-visible", scrollTop > 600);
  }

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI);
  updateScrollUI();

  toTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* =======================================================
     REDIRECCIÓN DE ANCLAS ANTIGUAS
     ======================================================= */

  const ANCHOR_REDIRECT = {
    "quien-puede": "otorgamiento.html",
    "requisitos-evaluacion": "otorgamiento.html",
    "mercado-excluido": "otorgamiento.html",
    restricciones: "otorgamiento.html",
    "oficial-cumplimiento": "otorgamiento.html",
    exclusiones: "otorgamiento.html",
    "casos-excepcion": "otorgamiento.html",
    "instancias-excepciones": "otorgamiento.html",
    documentacion: "documentacion.html",
    productos: "productos.html",
    politicas: "productos.html",
    "politicas-solicitantes": "productos.html",
    "politicas-producto": "productos.html",
    "panel-solicitantes": "productos.html",
    "panel-producto": "productos.html",
    "rci-vip": "productos.html",
    "vivienda-nueva": "vivienda-nueva.html",
    "vip-vipa": "vivienda-vip.html",
    "vivienda-usada": "vivienda-usada.html",
    especiales: "productos-especiales.html",
    instancias: "instancias.html",
    excepciones: "excepciones.html",
    buscador: "consulta.html",
    glosario: "consulta.html",
    faq: "consulta.html",
  };

  function redirectOldAnchor() {
    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (!id) return;
    if (document.getElementById(id)) return;
    const target = ANCHOR_REDIRECT[id];
    if (!target) return;
    if (target.toLowerCase() === currentFile) return;
    location.replace(target + "#" + id);
  }

  redirectOldAnchor();
  window.addEventListener("hashchange", redirectOldAnchor);

  /* =======================================================
     ENLACES DEL ÍNDICE "EN ESTA PÁGINA"
     ======================================================= */

  const toc = $("#siteNav");

  if (toc) {
    const tabLinks = $$("[data-open-tab]", toc);
    tabLinks.forEach((link) => {
      link.addEventListener("click", () => {
        tabLinks.forEach((item) => item.classList.remove("is-current"));
        link.classList.add("is-current");
      });
    });
  }

  /* =======================================================
     BUSCADOR GLOBAL
     ======================================================= */

  const PAGES = [
    { file: "index.html", title: "Inicio" },
    { file: "otorgamiento.html", title: "Otorgamiento" },
    { file: "productos.html", title: "Productos de vivienda" },
    { file: "documentacion.html", title: "Documentación" },
    { file: "vivienda-nueva.html", title: "Vivienda nueva" },
    { file: "vivienda-vip.html", title: "Vivienda VIP y VIPA" },
    { file: "vivienda-usada.html", title: "Vivienda usada" },
    { file: "productos-especiales.html", title: "Productos especiales" },
    { file: "instancias.html", title: "Instancias de aprobación" },
    { file: "excepciones.html", title: "Política de excepciones" },
    { file: "consulta.html", title: "Consulta" },
  ];

  const searchModal = $("#searchModal");
  const searchInput = $("#globalSearchModal");
  const searchResults = $("#searchModalResults");
  const searchTrigger = $("#openSearch");

  let searchIndexPromise = null;
  let docsIndexPromise = null;

  const STAGE_LABELS = {
    1: "Solicitud y aprobación",
    2: "Carta definitiva",
    3: "Reproceso",
    4: "Legalización",
  };

  function textOf(node) {
    return node ? node.textContent.replace(/\s+/g, " ").trim() : "";
  }

  function docsSearchEntries(data) {
    const entries = [];
    const reglas = (data.reglasGenerales || []).join(" ");

    Object.entries(data.perfiles || {}).forEach(([profileId, profile]) => {
      entries.push({
        file: "documentacion.html",
        page: "Documentación",
        anchor: "documentacion",
        heading: "Documentación · " + profile.nombre,
        text: [profile.nombre, ...(profile.intro || [])].join(" "),
        docsParams: { perfil: profileId },
      });

      Object.entries(profile.etapas || {}).forEach(([stage, etapa]) => {
        (etapa.filas || []).forEach((row) => {
          entries.push({
            file: "documentacion.html",
            page: "Documentación",
            anchor: "documentacion",
            heading:
              profile.nombre + " · " + (STAGE_LABELS[stage] || stage) + " · " + row.documento,
            text: [row.documento, row.descripcion, row.condicion, row.vigencia, row.nota, reglas]
              .filter(Boolean)
              .join(" "),
            docsParams: { perfil: profileId, etapa: stage },
          });
        });
      });
    });

    const legal = data.legalizacion || {};
    const rutas = legal.rutas || [];
    Object.entries(legal.bloques || {}).forEach(([index, bloque]) => {
      const ruta = rutas[Number(index)];
      const title = bloque.titulo || ruta?.producto || "Legalización " + (Number(index) + 1);
      if (bloque.filas?.length) {
        bloque.filas.forEach((row) => {
          entries.push({
            file: "documentacion.html",
            page: "Documentación",
            anchor: "documentacion",
            heading: "Legalización · " + title + " · " + row.documento,
            text: [row.documento, row.descripcion, row.condicion, row.vigencia, row.nota]
              .filter(Boolean)
              .join(" "),
            docsParams: { etapa: 4, legal: String(index) },
          });
        });
      } else {
        entries.push({
          file: "documentacion.html",
          page: "Documentación",
          anchor: "documentacion",
          heading: "Legalización · " + title,
          text: [ruta?.habilita, ...(bloque.parrafos || [])].filter(Boolean).join(" "),
          docsParams: { etapa: 4, legal: String(index) },
        });
      }
    });

    return entries;
  }

  function buildDocsIndex() {
    if (docsIndexPromise) return docsIndexPromise;
    docsIndexPromise = fetch("docs-data.js", { cache: "no-store" })
      .then((response) => (response.ok ? response.text() : ""))
      .then((text) => {
        if (!text) return [];
        const json = text.replace(/^\s*window\.DOCS_DATA\s*=\s*/, "").replace(/;\s*$/, "");
        return docsSearchEntries(JSON.parse(json));
      })
      .catch(() => []);
    return docsIndexPromise;
  }

  function indexPage(doc, page) {
    const entries = [];

    $$("main section[id]", doc).forEach((section) => {
      const sectionHeading =
        $("h2", section)?.textContent.trim() || $("h3", section)?.textContent.trim() || section.id;

      const base = section.cloneNode(true);
      $$("[data-module-panel], .seg-panel, details", base).forEach((node) => node.remove());
      entries.push({
        file: page.file,
        page: page.title,
        anchor: section.id,
        heading: sectionHeading,
        text: textOf(base),
      });

      $$("[data-module-panel]", section).forEach((panel) => {
        const group = panel.dataset.modulePanel;
        const target = panel.dataset.panel;
        const tab = $('[data-module-tab="' + group + '"][data-target="' + target + '"]', section);
        const clone = panel.cloneNode(true);
        $$("details", clone).forEach((node) => node.remove());
        entries.push({
          file: page.file,
          page: page.title,
          anchor: section.id,
          heading: tab?.textContent.trim() || $("h3", panel)?.textContent.trim() || sectionHeading,
          text: textOf(clone),
          tab: group + ":" + target,
        });
      });

      $$(".seg-panel", section).forEach((panel) => {
        const target = panel.id.replace(/^panel-/, "");
        const tab = $('[data-tab="' + target + '"]', section);
        const clone = panel.cloneNode(true);
        $$("details", clone).forEach((node) => node.remove());
        entries.push({
          file: page.file,
          page: page.title,
          anchor: section.id,
          heading: tab?.textContent.trim() || $("h3", panel)?.textContent.trim() || sectionHeading,
          text: textOf(clone),
          tab: "policy:" + target,
        });
      });

      $$("details", section).forEach((details, index) => {
        const panel = details.closest("[data-module-panel]");
        const segPanel = details.closest(".seg-panel");
        let tab = "";
        if (panel) tab = panel.dataset.modulePanel + ":" + panel.dataset.panel;
        else if (segPanel) tab = "policy:" + segPanel.id.replace(/^panel-/, "");
        entries.push({
          file: page.file,
          page: page.title,
          anchor: section.id,
          heading: details.querySelector("summary")
            ? textOf(details.querySelector("summary"))
            : sectionHeading,
          text: textOf(details),
          tab,
          details: section.id + ":" + index,
        });
      });
    });

    return entries;
  }

  function buildSearchIndex() {
    if (searchIndexPromise) return searchIndexPromise;

    const pagesPromise = Promise.all(
      PAGES.map(async (page) => {
        try {
          const response = await fetch(page.file, { cache: "no-store" });
          if (!response.ok) return [];
          const html = await response.text();
          const doc = new DOMParser().parseFromString(html, "text/html");
          return indexPage(doc, page);
        } catch (error) {
          return [];
        }
      }),
    ).then((groups) => groups.flat());

    searchIndexPromise = Promise.all([pagesPromise, buildDocsIndex()]).then(([pages, docs]) =>
      pages.concat(docs),
    );

    return searchIndexPromise;
  }

  function snippetFor(text, term) {
    if (!text) return "";
    const normalizedText = normalize(text);
    const position = normalizedText.indexOf(term);
    const start = position > 60 ? position - 60 : 0;
    const snippet = text.slice(start, start + 180);
    return (start > 0 ? "…" : "") + snippet + (start + 180 < text.length ? "…" : "");
  }

  function resultHref(entry) {
    if (entry.file === currentFile) return "#" + entry.anchor;
    const params = new URLSearchParams();
    if (entry.docsParams) {
      Object.entries(entry.docsParams).forEach(([key, value]) => params.set(key, value));
    } else {
      if (entry.tab) params.set("tab", entry.tab);
      if (entry.details) params.set("open", entry.details);
    }
    const query = params.toString();
    return entry.file + (query ? "?" + query : "") + "#" + entry.anchor;
  }

  function renderSearchResults(entries, term) {
    if (!searchResults) return;

    if (!term || term.length < 2) {
      searchResults.innerHTML =
        '<p class="search-modal-hint">Escribe al menos dos letras para buscar en todas las secciones de la wiki.</p>';
      return;
    }

    if (!entries.length) {
      searchResults.innerHTML =
        '<p class="search-modal-hint">No encontramos coincidencias. Prueba con otro término o revisa el glosario.</p>';
      return;
    }

    const matches = entries
      .map((entry) => {
        const headingMatch = normalize(entry.heading).includes(term);
        const textMatch = normalize(entry.text).includes(term);
        return { entry, headingMatch, textMatch };
      })
      .filter((item) => item.textMatch)
      .sort((a, b) => Number(b.headingMatch) - Number(a.headingMatch));

    if (!matches.length) {
      searchResults.innerHTML =
        '<p class="search-modal-hint">No encontramos coincidencias. Prueba con otro término o revisa el glosario.</p>';
      return;
    }

    const groups = new Map();
    matches.forEach(({ entry }) => {
      if (!groups.has(entry.page)) groups.set(entry.page, []);
      groups.get(entry.page).push(entry);
    });

    let html =
      '<p class="search-modal-count">' +
      matches.length +
      (matches.length === 1 ? " coincidencia" : " coincidencias") +
      " en " +
      groups.size +
      (groups.size === 1 ? " módulo" : " módulos") +
      "</p>";

    groups.forEach((groupEntries, pageTitle) => {
      html += '<div class="search-result-group"><h3>' + escapeHTML(pageTitle) + "</h3>";
      groupEntries.slice(0, 6).forEach((entry) => {
        const href = resultHref(entry);
        const docsData =
          entry.docsParams && entry.file === currentFile
            ? ' data-search-docs="' + escapeHTML(JSON.stringify(entry.docsParams)) + '"'
            : "";
        const tabData =
          entry.tab && entry.file === currentFile
            ? ' data-search-tab="' + escapeHTML(entry.tab) + '"'
            : "";
        const detailsData =
          entry.details && entry.file === currentFile
            ? ' data-search-details="' + escapeHTML(entry.details) + '"'
            : "";
        html +=
          '<a class="search-result-item" href="' +
          href +
          '"' +
          docsData +
          tabData +
          detailsData +
          "><strong>" +
          escapeHTML(entry.heading) +
          "</strong><span>" +
          escapeHTML(snippetFor(entry.text, term)) +
          "</span></a>";
      });
      html += "</div>";
    });

    searchResults.innerHTML = html;
  }

  let lastSearchTerm = "";

  function runSearch() {
    if (!searchInput || !searchResults) return;
    const value = searchInput.value;
    const term = normalize(value.trim());
    lastSearchTerm = term;

    if (term.length < 2) {
      renderSearchResults([], term);
      return;
    }

    searchResults.innerHTML = '<p class="search-modal-hint">Buscando en la wiki…</p>';

    buildSearchIndex().then((entries) => {
      if (term !== lastSearchTerm) return;
      renderSearchResults(entries, term);
    });
  }

  function openSearch() {
    if (!searchModal) return;
    searchModal.hidden = false;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => {
      if (
        !searchModal.contains(document.activeElement) ||
        document.activeElement === document.body
      ) {
        searchInput?.focus();
      }
      if (!searchInput?.value.trim()) runSearch();
    }, 40);
  }

  function closeSearch() {
    if (!searchModal) return;
    if (searchModal.contains(document.activeElement)) document.activeElement.blur();
    searchModal.hidden = true;
    document.body.style.overflow = "";
  }

  function activateSearchTab(tab) {
    if (!tab) return;
    if (tab.startsWith("policy:")) {
      window.CF_TABS?.activatePolicyTab(tab.slice(7));
      return;
    }
    const [group, target] = tab.split(":");
    if (group && target) window.CF_TABS?.activateModuleTab(group, target);
  }

  function openSearchDetails(key) {
    if (!key) return;
    const [sectionId, index] = key.split(":");
    const section = document.getElementById(sectionId);
    if (!section) return;
    const details = $$("details", section)[Number(index)];
    if (details) details.open = true;
  }

  function applySearchParams() {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    const open = params.get("open");
    if (!tab && !open) return;
    const apply = () => {
      if (!window.CF_TABS) {
        window.setTimeout(apply, 50);
        return;
      }
      if (tab) activateSearchTab(tab);
      if (open) window.setTimeout(() => openSearchDetails(open), 120);
    };
    apply();
  }

  applySearchParams();

  searchTrigger?.addEventListener("click", openSearch);

  document.addEventListener("keydown", (event) => {
    const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
    if (isShortcut) {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape" && searchModal && !searchModal.hidden) {
      closeSearch();
    }
  });

  searchModal?.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-search]")) closeSearch();
  });

  searchInput?.addEventListener("input", runSearch);

  searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      const items = $$("#searchModalResults .search-result-item");
      if (!items.length) return;
      event.preventDefault();
      const currentIndex = items.indexOf(document.activeElement);
      const nextIndex =
        event.key === "ArrowDown"
          ? Math.min(currentIndex + 1, items.length - 1)
          : Math.max(currentIndex - 1, 0);
      items[nextIndex].focus();
    }
    if (event.key === "Enter") {
      const first = $("#searchModalResults .search-result-item");
      if (first) {
        event.preventDefault();
        first.click();
      }
    }
  });

  searchResults?.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    const items = $$("#searchModalResults .search-result-item");
    const currentIndex = items.indexOf(document.activeElement);
    if (currentIndex === -1) return;
    event.preventDefault();
    const nextIndex =
      event.key === "ArrowDown"
        ? Math.min(currentIndex + 1, items.length - 1)
        : Math.max(currentIndex - 1, 0);
    items[nextIndex].focus();
  });

  searchResults?.addEventListener("click", (event) => {
    const link = event.target.closest("a.search-result-item");
    if (!link) return;
    const docs = link.dataset.searchDocs;
    if (docs && window.CF_DOCS) {
      event.preventDefault();
      try {
        window.CF_DOCS.select(JSON.parse(docs));
      } catch (error) {
        /* noop */
      }
      const target = link.getAttribute("href");
      if (target && target.startsWith("#")) {
        document
          .getElementById(target.slice(1))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      closeSearch();
      return;
    }
    activateSearchTab(link.dataset.searchTab);
    openSearchDetails(link.dataset.searchDetails);
    closeSearch();
  });

  /* =======================================================
     SELECTOR GUIADO
     ======================================================= */

  const guide = $("[data-guide]");

  if (guide) {
    const GUIDE_PROFILES = [
      { value: "asalariado", label: "Asalariado" },
      { value: "pensionado", label: "Pensionado" },
      { value: "tecnico", label: "Técnico / tecnólogo" },
      { value: "libre", label: "Profesional liberal" },
      { value: "duenoComun", label: "Dueño de negocio · régimen común" },
      { value: "duenoSimplificado", label: "Dueño de negocio · régimen simplificado" },
      { value: "transportista", label: "Transportista" },
      { value: "conductor", label: "Conductor" },
      { value: "rentista", label: "Rentista de capital" },
      { value: "prestador", label: "Prestador de servicios" },
    ];

    const GUIDE_PRODUCTS = [
      { value: "nueva", label: "Vivienda nueva", page: "vivienda-nueva.html", legal: 3 },
      { value: "usada", label: "Vivienda usada", page: "vivienda-usada.html", legal: 3 },
      { value: "vip", label: "VIP / VIPA", page: "vivienda-vip.html", legal: 3 },
      {
        value: "mejoramientoActual",
        label: "Mejoramiento · cliente actual",
        page: "productos-especiales.html",
        legal: 0,
      },
      {
        value: "mejoramientoNuevo",
        label: "Mejoramiento · cliente nuevo",
        page: "productos-especiales.html",
        legal: 1,
      },
      { value: "acabados", label: "Acabados VIS", page: "productos-especiales.html", legal: 2 },
      {
        value: "leasing",
        label: "Leasing habitacional",
        page: "productos-especiales.html",
        legal: null,
      },
    ];

    const GUIDE_STAGES = [
      { value: 1, label: "Solicitud y aprobación" },
      { value: 2, label: "Carta definitiva" },
      { value: 3, label: "Reproceso" },
      { value: 4, label: "Legalización" },
    ];

    const state = { perfil: "", producto: "", etapa: "" };
    const result = $("#guideResult");

    function renderOptions(container, items, group) {
      if (!container) return;
      container.innerHTML = items
        .map(
          (item) =>
            '<button type="button" class="guide-option" data-guide-group="' +
            group +
            '" data-guide-value="' +
            item.value +
            '">' +
            escapeHTML(item.label) +
            "</button>",
        )
        .join("");
    }

    renderOptions($('[data-guide-options="perfil"]'), GUIDE_PROFILES, "perfil");
    renderOptions($('[data-guide-options="producto"]'), GUIDE_PRODUCTS, "producto");
    renderOptions($('[data-guide-options="etapa"]'), GUIDE_STAGES, "etapa");

    function renderResult() {
      if (!result) return;

      const perfil = GUIDE_PROFILES.find((item) => item.value === state.perfil);
      const producto = GUIDE_PRODUCTS.find((item) => item.value === state.producto);
      const etapa = GUIDE_STAGES.find((item) => String(item.value) === String(state.etapa));

      if (!perfil || !producto || !etapa) {
        result.innerHTML =
          "<p>Elige perfil, producto y etapa para ver la ruta recomendada y el checklist que aplica.</p>";
        return;
      }

      const hasLegalChecklist = etapa.value === 4 && producto.legal !== null;
      let checklistHref = "documentacion.html?perfil=" + encodeURIComponent(perfil.value);

      if (etapa.value === 4) {
        checklistHref += "&etapa=4";
        if (hasLegalChecklist) checklistHref += "&legal=" + producto.legal;
      } else {
        checklistHref += "&etapa=" + etapa.value;
      }

      const actions = [];

      if (etapa.value !== 4 || hasLegalChecklist) {
        actions.push('<a class="btn primary" href="' + checklistHref + '">Ver checklist</a>');
      }

      actions.push(
        '<a class="btn ghost" href="' + producto.page + '">Ver política del producto</a>',
      );

      const legalNote =
        etapa.value === 4 && !hasLegalChecklist
          ? " La legalización de este producto aún no tiene checklist publicado; revisa las condiciones con Operaciones/Jurídica."
          : "";

      result.innerHTML =
        "<p><strong>" +
        escapeHTML(perfil.label) +
        "</strong> · " +
        escapeHTML(producto.label) +
        " · " +
        escapeHTML(etapa.label) +
        "." +
        legalNote +
        "</p>" +
        '<div class="guide-result-actions">' +
        actions.join("") +
        "</div>";
    }

    guide.addEventListener("click", (event) => {
      const button = event.target.closest("[data-guide-group]");
      if (!button) return;
      const group = button.dataset.guideGroup;
      state[group] = button.dataset.guideValue;

      $$('[data-guide-group="' + group + '"]', guide).forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });

      renderResult();
    });

    renderResult();
  }
})();
