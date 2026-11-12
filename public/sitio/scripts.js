/* =========================================================
   WIKI HIPOTECARIA CREDIFAMILIA
   INTERACCIONES PRINCIPALES
   ========================================================= */

(function () {
  "use strict";

  const DATA = window.DOCS_DATA || { reglasGenerales: [], perfiles: {}, legalizacion: null };

  const $ = (selector, scope) => (scope || document).querySelector(selector);
  const $$ = (selector, scope) => Array.from((scope || document).querySelectorAll(selector));

  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  /* =======================================================
     NAVEGACIÓN RÁPIDA
     ======================================================= */

  const siteNav = $("#siteNav");
  const menuBtn = $("#menuBtn");
  const navClose = $("#navClose");
  const navBackdrop = $("#navBackdrop");

  function openNav() {
    if (!siteNav) return;
    siteNav.classList.add("is-open");
    if (navBackdrop) navBackdrop.hidden = false;
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    if (!siteNav) return;
    siteNav.classList.remove("is-open");
    if (navBackdrop) navBackdrop.hidden = true;
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  }

  menuBtn?.addEventListener("click", () => {
    if (siteNav?.classList.contains("is-open")) closeNav();
    else openNav();
  });
  navClose?.addEventListener("click", closeNav);
  navBackdrop?.addEventListener("click", closeNav);

  $$("a", siteNav).forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 1200px)").matches) closeNav();
    });
  });

  const navLinks = $$("a[href^='#']", siteNav);
  const navSections = $$("main section[id]");

  function setActiveNav(id) {
    navLinks.forEach((link) => {
      if (link.hasAttribute("data-open-tab")) return;
      link.classList.toggle("is-current", link.getAttribute("href") === "#" + id);
    });
  }

  const tabNavLinks = $$("[data-open-tab]", siteNav);
  tabNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      tabNavLinks.forEach((item) => item.classList.remove("is-current"));
      link.classList.add("is-current");
    });
  });

  function updateActiveNav() {
    if (!navSections.length) return;
    const offset = 140;
    let current = null;
    navSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) current = section;
    });
    if (current) setActiveNav(current.id);
  }

  let navTicking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (navTicking) return;
      navTicking = true;
      window.requestAnimationFrame(() => {
        updateActiveNav();
        navTicking = false;
      });
    },
    { passive: true },
  );
  window.addEventListener("resize", updateActiveNav);
  updateActiveNav();

  /* =======================================================
     LUPA / BUSCADOR
     ======================================================= */

  const searchToggle = $("#searchToggle");
  const globalSearch = $("#globalSearch");

  function focusSearch() {
    const section = $("#buscador");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    const box = $(".global-search");
    box?.classList.add("is-highlight");
    window.setTimeout(() => {
      globalSearch?.focus({ preventScroll: true });
      box?.classList.remove("is-highlight");
    }, 450);
  }

  searchToggle?.addEventListener("click", focusSearch);

  /* =======================================================
     BUSCADOR GLOBAL
     ======================================================= */

  const searchResults = $("#searchResults");
  const searchHint = searchResults?.innerHTML || "";

  function renderGlobalSearch(value) {
    if (!searchResults) return;
    const term = normalize(value.trim());

    if (!term) {
      searchResults.innerHTML = searchHint;
      bindSearchTags();
      return;
    }

    const sections = $$("main section[id]").filter((section) => section.id !== "buscador");
    const results = [];

    sections.forEach((section) => {
      const text = normalize(section.textContent);
      if (!text.includes(term)) return;

      const heading =
        section.querySelector("h2")?.textContent.trim() ||
        section.querySelector("h3")?.textContent.trim() ||
        section.id;

      let snippet = "";
      let tab = "";
      const candidates = $$("p, li, td, h3, h4", section);
      for (const node of candidates) {
        const content = node.textContent.replace(/\s+/g, " ").trim();
        if (normalize(content).includes(term) && content.length > 12) {
          snippet = content.slice(0, 170);
          const panel = node.closest("[data-module-panel]");
          if (panel) {
            tab = panel.dataset.modulePanel + ":" + panel.dataset.panel;
          }
          break;
        }
      }

      results.push({ id: section.id, heading, snippet, tab });
    });

    if (!results.length) {
      searchResults.innerHTML =
        '<div class="search-empty"><strong>Sin resultados.</strong> Prueba con otra palabra o revisa la ortografía.</div>';
      return;
    }

    searchResults.innerHTML = results
      .slice(0, 10)
      .map(
        (item) =>
          '<button class="search-result" data-search-target="' +
          escapeHTML(item.id) +
          '" data-search-tab="' +
          escapeHTML(item.tab) +
          '"><strong>' +
          escapeHTML(item.heading) +
          "</strong><span>" +
          escapeHTML(item.snippet || "Ver sección") +
          "</span></button>",
      )
      .join("");

    $$("[data-search-target]", searchResults).forEach((button) => {
      button.addEventListener("click", () => {
        const [group, target] = (button.dataset.searchTab || "").split(":");
        if (group && target) activateModuleTab(group, target);
        $("#" + button.dataset.searchTarget)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }

  function bindSearchTags() {
    $$("[data-search-term]", searchResults || document).forEach((button) => {
      button.addEventListener("click", () => {
        if (globalSearch) {
          globalSearch.value = button.dataset.searchTerm;
          globalSearch.focus();
        }
        renderGlobalSearch(button.dataset.searchTerm);
      });
    });
  }

  globalSearch?.addEventListener("input", (event) => renderGlobalSearch(event.target.value));
  bindSearchTags();

  /* =======================================================
     MODAL DE PERFILES
     ======================================================= */

  const modal = $("#profileModal");
  const modalContent = $("#modalContent");
  const closeModalBtn = $("#closeModal");

  const ASALARIADO = [
    ["Término indefinido", "Mínimo 6 meses de antigüedad."],
    ["Término fijo", "Renovación demostrada y mínimo 1 año de continuidad."],
    [
      "Temporal",
      "La entidad temporal asume la seguridad social y se exige mínimo 18 meses de antigüedad.",
    ],
  ];

  const INDEP_TIPOS = {
    dueno: {
      nombre: "Dueño de negocio",
      definicion:
        "Persona propietaria de un negocio, en régimen simplificado o común, que acredita ingresos provenientes de su actividad económica.",
      condiciones: [
        "Experiencia mínima de 2 años.",
        "Ingreso mínimo de 1,5 SMMLV.",
        "Debe acreditar ingresos provenientes de su actividad económica.",
        "Documentación y validación de ingresos según su régimen tributario.",
      ],
    },
    transportador: {
      nombre: "Transportador dueño",
      definicion:
        "Propietario del vehículo destinado a transporte que genera ingresos con esa actividad.",
      condiciones: [
        "Experiencia mínima de 2 años.",
        "Ingreso mínimo de 1,5 SMMLV.",
        "Demostrar propiedad del vehículo e ingresos derivados de él.",
        "Evaluación según las condiciones particulares de su actividad.",
      ],
    },
    conductor: {
      nombre: "Conductor (taxi o bus)",
      definicion:
        "Conductor que no es propietario del vehículo y debe cumplir una de las condiciones de continuidad definidas por la política.",
      condiciones: [
        "Cumplir UNA de estas condiciones: (a) 3 años demostrables con continuidad, o (b) 18 meses trabajando para el mismo dueño de taxi o bus.",
        "No tener multas vigentes.",
        "Demostrar ahorro mínimo del 10 % del valor de la vivienda.",
        "Estar afiliado a Sisbén o EPS desde hace mínimo 3 años.",
      ],
    },
    rentista: {
      nombre: "Rentista de capital",
      definicion: "Persona que obtiene ingresos por arrendamientos o rendimientos de capital.",
      condiciones: [
        "Experiencia mínima de 2 años.",
        "Ingreso mínimo de 1,5 SMMLV.",
        "Demostrar procedencia y estabilidad de los ingresos.",
        "Ingresos respaldados con los documentos de su actividad.",
      ],
    },
    libre: {
      nombre: "Profesional liberal",
      definicion:
        "Contadores, arquitectos, ingenieros y abogados que ejercen su actividad de forma independiente.",
      condiciones: [
        "Experiencia mínima de 2 años.",
        "Ingreso mínimo de 1,5 SMMLV.",
        "Demostrar el ejercicio de su actividad profesional.",
        "Acreditar los ingresos generados por su actividad.",
      ],
    },
    prestador: {
      nombre: "Prestador de servicios",
      definicion:
        "Profesionales, técnicos y tecnólogos que prestan servicios a una o varias empresas.",
      condiciones: [
        "Experiencia mínima de 2 años.",
        "Ingreso mínimo de 1,5 SMMLV.",
        "Demostrar continuidad en la prestación de servicios.",
        "Ingresos validados con los soportes correspondientes.",
      ],
    },
  };

  function modalAsalariado() {
    return (
      "<h2>Asalariado</h2>" +
      '<p class="modal-kicker">Perfil · Contrato laboral</p>' +
      "<p>Persona vinculada mediante contrato laboral. La antigüedad exigida depende del término del contrato.</p>" +
      '<div class="table-scroll"><table class="data-table"><thead><tr><th>Tipo de contrato</th><th>Condición</th></tr></thead><tbody>' +
      ASALARIADO.map(
        (row) => "<tr><td>" + escapeHTML(row[0]) + "</td><td>" + escapeHTML(row[1]) + "</td></tr>",
      ).join("") +
      "</tbody></table></div>" +
      '<div class="callout"><strong>Ingreso mínimo:</strong> 1 SMMLV · <strong>Acierta mínimo:</strong> ≥ 658.</div>'
    );
  }

  function modalPensionado() {
    return (
      "<h2>Pensionado</h2>" +
      '<p class="modal-kicker">Perfil · Pensión de vejez o invalidez</p>' +
      "<p>Se considera pensionado al titular que recibe una pensión de vejez o una pensión de invalidez.</p>" +
      '<ul class="check-list"><li>Pensión de vejez</li><li>Pensión de invalidez</li></ul>' +
      '<p class="muted">No se considera pensionado al beneficiario de una pensión.</p>' +
      '<div class="mini-grid">' +
      '<div class="mini-card"><strong>Antigüedad de la pensión</strong><p>Se acepta cualquier tiempo de antigüedad de la pensión.</p></div>' +
      '<div class="mini-card"><strong>Edad máxima</strong><p>Para pensionados se puede aceptar una edad máxima de 75 años, sin aplicar restricción de edad + plazo.</p></div>' +
      "</div>" +
      '<div class="callout">Si en una misma solicitud participan un pensionado y una persona no pensionada, la operación se evalúa con las condiciones del solicitante no pensionado.</div>'
    );
  }

  function modalPremium() {
    return (
      "<h2>Premium</h2>" +
      '<p class="modal-kicker">Perfil · Clasificación especial</p>' +
      "<p>Un cliente puede clasificarse como Premium cuando cumple simultáneamente las condiciones definidas por la política.</p>" +
      '<ul class="check-list">' +
      "<li>Acierta ≥ 730.</li>" +
      "<li>Si tiene créditos vigentes sin calificación en ninguna central de riesgo: Acierta ≥ 800.</li>" +
      "<li>Endeudamiento ≤ 20 % para primera o segunda vivienda.</li>" +
      "<li>Ingresos ≥ 1 SMMLV.</li>" +
      "<li>Aplica únicamente para empleados y pensionados (los independientes no pueden clasificar en Premium).</li>" +
      "</ul>" +
      '<div class="mini-grid">' +
      '<div class="mini-card"><strong>Permanencia en el segmento</strong><p>Si el cliente no fue identificado como Premium desde el inicio, debe permanecer mínimo 6 meses cumpliendo las condiciones para pertenecer a este segmento.</p></div>' +
      '<div class="mini-card"><strong>Antigüedad para carta definitiva</strong><p>Para generar la carta definitiva de un cliente Premium, este debe comprobar 12 meses de antigüedad.</p></div>' +
      "</div>"
    );
  }

  function modalIndependiente() {
    const buttons = Object.keys(INDEP_TIPOS)
      .map(
        (key, index) =>
          '<button class="indep-btn' +
          (index === 0 ? " is-active" : "") +
          '" data-indep="' +
          key +
          '">' +
          escapeHTML(INDEP_TIPOS[key].nombre) +
          "</button>",
      )
      .join("");

    return (
      "<h2>Independientes</h2>" +
      '<p class="modal-kicker">Mercado objetivo · Políticas de otorgamiento</p>' +
      "<p>Personas que generan sus ingresos a través de actividades económicas propias, prestación de servicios profesionales, comerciales o rentas de capital, y que no cuentan con un vínculo laboral dependiente.</p>" +
      "<p><strong>Regla general:</strong> mínimo 2 años de experiencia en la actividad, demostrar ingresos y cumplir criterios de evaluación.</p>" +
      '<div class="mini-grid">' +
      '<div class="mini-card"><strong>2 años</strong><span>Experiencia mínima</span></div>' +
      '<div class="mini-card"><strong>1,5 SMMLV</strong><span>Ingreso mínimo de referencia</span></div>' +
      "</div>" +
      '<div class="indep-layout"><div class="indep-list">' +
      buttons +
      '</div><div class="indep-detail" id="indepDetail"></div></div>' +
      '<div class="block-head block-gap"><h3>¿Cuántas personas pueden solicitar?</h3></div>' +
      '<ul class="check-list">' +
      "<li>En vivienda nueva, hasta 4 solicitantes que aporten ingresos.</li>" +
      "<li>Hasta segundo grado de consanguinidad: padres, abuelos y hermanos.</li>" +
      "<li>Hasta primer grado de afinidad y único civil: cónyuge y suegros.</li>" +
      "<li>Existen reglas particulares para empresas unipersonales, rentistas y prestadores de servicios.</li>" +
      "</ul>"
    );
  }

  function renderIndepDetail(key) {
    const detail = $("#indepDetail");
    const tipo = INDEP_TIPOS[key];
    if (!detail || !tipo) return;
    detail.innerHTML =
      "<h3>" +
      escapeHTML(tipo.nombre) +
      "</h3><p>" +
      escapeHTML(tipo.definicion) +
      '</p><h4>Requisitos y condiciones</h4><ul class="check-list">' +
      tipo.condiciones.map((item) => "<li>" + escapeHTML(item) + "</li>").join("") +
      "</ul>";
  }

  const modalBuilders = {
    asalariado: modalAsalariado,
    pensionado: modalPensionado,
    premium: modalPremium,
    independiente: modalIndependiente,
  };

  function openProfile(profile) {
    const builder = modalBuilders[profile];
    if (!builder || !modal || !modalContent) return;
    modalContent.innerHTML = builder();
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (profile === "independiente") {
      renderIndepDetail("dueno");
      $$("[data-indep]", modalContent).forEach((button) => {
        button.addEventListener("click", () => {
          $$("[data-indep]", modalContent).forEach((item) => item.classList.remove("is-active"));
          button.classList.add("is-active");
          renderIndepDetail(button.dataset.indep);
        });
      });
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  $$("[data-profile]").forEach((button) => {
    button.addEventListener("click", () => openProfile(button.dataset.profile));
  });

  $$("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".info-card");
      if (!card || !modal || !modalContent) return;
      const title = card.querySelector("h3")?.textContent.trim() || "Credifamilia";
      const text = card.querySelector("p")?.textContent.trim() || "";
      modalContent.innerHTML = "<h2>" + escapeHTML(title) + "</h2><p>" + escapeHTML(text) + "</p>";
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    });
  });

  closeModalBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  /* =======================================================
     PESTAÑAS DE POLÍTICAS
     ======================================================= */

  function activatePolicyTab(tab) {
    $$("[data-tab]").forEach((item) => {
      const active = item.dataset.tab === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    $$(".seg-panel").forEach((panel) => {
      panel.hidden = panel.id !== "panel-" + tab;
    });
  }

  $$("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activatePolicyTab(button.dataset.tab);
      const hash =
        button.dataset.tab === "producto" ? "politicas-producto" : "politicas-solicitantes";
      try {
        history.replaceState(null, "", "#" + hash);
      } catch (error) {
        /* noop */
      }
    });
  });

  function applyPolicyHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash !== "politicas-solicitantes" && hash !== "politicas-producto") return;
    activatePolicyTab(hash === "politicas-producto" ? "producto" : "solicitantes");
    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  window.addEventListener("hashchange", applyPolicyHash);
  applyPolicyHash();

  /* =======================================================
     FASE 7B: PESTAÑAS DE MÓDULOS
     ======================================================= */

  function activateModuleTab(group, target) {
    $$('[data-module-tab="' + group + '"]').forEach((tab) => {
      const active = tab.dataset.target === target;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    $$('[data-module-panel="' + group + '"]').forEach((panel) => {
      panel.hidden = panel.dataset.panel !== target;
    });

    const activeTab = $('[data-module-tab="' + group + '"][data-target="' + target + '"]');
    const tabList = activeTab?.closest(".module-tabs");
    if (tabList && tabList.scrollWidth > tabList.clientWidth) {
      const left =
        activeTab.getBoundingClientRect().left -
        tabList.getBoundingClientRect().left +
        tabList.scrollLeft;
      tabList.scrollLeft = left - (tabList.clientWidth - activeTab.offsetWidth) / 2;
    }
  }

  function syncModuleHash(sectionId, group, target) {
    if (!sectionId) return;
    try {
      history.replaceState(null, "", "#" + sectionId + ":" + group + ":" + target);
    } catch (error) {
      /* noop */
    }
  }

  function applyTabHash() {
    let raw = "";
    try {
      raw = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    } catch (error) {
      return;
    }
    const parts = raw.split(":");
    if (parts.length !== 3) return;
    const [sectionId, group, target] = parts;
    if (!document.getElementById(sectionId)) return;
    activateModuleTab(group, target);
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  $$("[data-module-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.moduleTab;
      const target = button.dataset.target;
      activateModuleTab(group, target);
      syncModuleHash(button.closest("section[id]")?.id, group, target);
    });
  });

  $$("[data-open-tab]").forEach((link) => {
    link.addEventListener("click", () => {
      const [group, target] = link.dataset.openTab.split(":");
      if (!group || !target) return;
      activateModuleTab(group, target);
      const sectionId = link.getAttribute("href")?.replace(/^#/, "");
      syncModuleHash(sectionId, group, target);
    });
  });

  window.addEventListener("hashchange", applyTabHash);
  applyTabHash();

  window.CF_TABS = {
    activateModuleTab,
    activatePolicyTab,
  };

  /* =======================================================
     RESTRICCIONES: FILTRO
     ======================================================= */

  const restriccionesSearch = $("#restriccionesSearch");
  const restriccionesTable = $("#restriccionesTable");

  restriccionesSearch?.addEventListener("input", () => {
    const term = normalize(restriccionesSearch.value);
    $$("tbody tr", restriccionesTable).forEach((row) => {
      row.hidden = term !== "" && !normalize(row.textContent).includes(term);
    });
  });

  /* =======================================================
     GLOSARIO: BÚSQUEDA Y FILTROS
     ======================================================= */

  const glossarySearch = $("#glossarySearch");
  const glossaryGrid = $("#glossaryGrid");
  const glossaryFilters = $("#glossaryFilters");
  const glossaryResultCount = $("#glossaryResultCount");
  const glossaryEmpty = $("#glossaryEmpty");
  let glossaryCategory = "todos";

  function applyGlossaryFilter() {
    if (!glossaryGrid) return;
    const term = normalize(glossarySearch?.value || "");
    let visible = 0;

    $$(".glossary-item", glossaryGrid).forEach((item) => {
      const content = normalize(item.dataset.term + " " + item.textContent);
      const matchTerm = !term || content.includes(term);
      const matchCategory =
        glossaryCategory === "todos" || item.dataset.category === glossaryCategory;
      item.hidden = !(matchTerm && matchCategory);
      if (!item.hidden) visible += 1;
    });

    if (glossaryResultCount) {
      glossaryResultCount.textContent = visible + (visible === 1 ? " entrada" : " entradas");
    }
    if (glossaryEmpty) glossaryEmpty.hidden = visible !== 0;
  }

  glossarySearch?.addEventListener("input", applyGlossaryFilter);
  glossaryFilters?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-glossary-category]");
    if (!button) return;
    glossaryCategory = button.dataset.glossaryCategory;
    $$(".chip-btn", glossaryFilters).forEach((chip) => {
      chip.classList.toggle("active", chip === button);
    });
    applyGlossaryFilter();
  });
  applyGlossaryFilter();

  /* =======================================================
     PREGUNTAS FRECUENTES: BÚSQUEDA Y FILTROS
     ======================================================= */

  const faqSearch = $("#faqSearch");
  const faqList = $("#faqList");
  const faqFilters = $("#faqFilters");
  const faqResultCount = $("#faqResultCount");
  const faqEmpty = $("#faqEmpty");
  let faqCategory = "todas";

  function applyFaqFilter() {
    if (!faqList) return;
    const term = normalize(faqSearch?.value || "");
    let visible = 0;

    $$(".faq-item", faqList).forEach((item) => {
      const content = normalize(item.dataset.search + " " + item.textContent);
      const matchTerm = !term || content.includes(term);
      const matchCategory = faqCategory === "todas" || item.dataset.category === faqCategory;
      item.hidden = !(matchTerm && matchCategory);
      if (!item.hidden) visible += 1;
    });

    if (faqResultCount) {
      faqResultCount.textContent =
        visible + (visible === 1 ? " pregunta encontrada" : " preguntas encontradas");
    }
    if (faqEmpty) faqEmpty.hidden = visible !== 0;
  }

  faqSearch?.addEventListener("input", applyFaqFilter);
  faqFilters?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-faq-category]");
    if (!button) return;
    faqCategory = button.dataset.faqCategory;
    $$(".chip-btn", faqFilters).forEach((chip) => {
      chip.classList.toggle("active", chip === button);
    });
    applyFaqFilter();
  });
  applyFaqFilter();

  function addAccordionActions(container) {
    if (!container || !container.parentNode) return;
    if (container.previousElementSibling?.classList.contains("accordion-actions")) return;
    const actions = document.createElement("div");
    actions.className = "accordion-actions";
    actions.innerHTML =
      '<button type="button" class="chip-btn" data-expand-all>Expandir todo</button>' +
      '<button type="button" class="chip-btn" data-collapse-all>Contraer todo</button>';
    container.parentNode.insertBefore(actions, container);
    actions.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      const open = button.hasAttribute("data-expand-all");
      $$("details", container).forEach((item) => {
        if (open && item.hidden) return;
        item.open = open;
      });
    });
  }

  addAccordionActions(glossaryGrid);
  addAccordionActions(faqList);

  /* =======================================================
     DOCUMENTACIÓN POR PERFIL Y ETAPA
     ======================================================= */

  const docsState = {
    profile: "asalariado",
    duenoRegimen: "comun",
    contrato: "indefinido",
    stage: 1,
    legalProduct: 0,
    statuses: {},
  };

  (function applyDocsParams() {
    const params = new URLSearchParams(window.location.search);
    const perfil = params.get("perfil");
    const etapa = Number(params.get("etapa"));
    const legal = Number(params.get("legal"));
    const contrato = params.get("contrato");

    if (perfil === "duenoComun" || perfil === "duenoSimplificado") {
      docsState.profile = "dueno";
      docsState.duenoRegimen = perfil === "duenoSimplificado" ? "simplificado" : "comun";
    } else if (perfil === "dueno") {
      docsState.profile = "dueno";
    } else if (perfil && DATA.perfiles && DATA.perfiles[perfil]) {
      docsState.profile = perfil;
    }

    if (Number.isFinite(etapa) && etapa >= 1 && etapa <= 4) {
      docsState.stage = etapa;
    }

    if (Number.isFinite(legal) && legal >= 0 && legal <= 3) {
      docsState.legalProduct = legal;
    }

    if (contrato === "indefinido" || contrato === "fijo" || contrato === "temporal") {
      docsState.contrato = contrato;
    }
  })();

  function syncDocsUrl() {
    const params = new URLSearchParams();
    params.set("perfil", resolvedProfileKey());
    params.set("etapa", String(docsState.stage));
    if (docsState.stage === 4) params.set("legal", String(docsState.legalProduct));
    if (docsState.profile === "asalariado") params.set("contrato", docsState.contrato);
    try {
      history.replaceState(
        null,
        "",
        window.location.pathname + "?" + params.toString() + window.location.hash,
      );
    } catch (error) {
      /* noop */
    }
  }

  const PROFILE_LIST = [
    { key: "asalariado", label: "Asalariado" },
    { key: "pensionado", label: "Pensionado" },
    { key: "tecnico", label: "Técnico / tecnólogo" },
  ];

  const INDEP_LIST = [
    { key: "libre", label: "Profesional liberal" },
    { key: "dueno", label: "Dueño de negocio" },
    { key: "transportista", label: "Transportista" },
    { key: "conductor", label: "Conductor" },
    { key: "rentista", label: "Rentista de capital" },
    { key: "prestador", label: "Prestador de servicios" },
  ];

  const STAGES = [
    { key: 1, label: "Solicitud / aprobación" },
    { key: 2, label: "Carta definitiva" },
    { key: 3, label: "Reproceso" },
    { key: 4, label: "Legalización" },
  ];

  const STATUS_OPTIONS = [
    "Pendiente",
    "Recibido",
    "En validación",
    "Validado",
    "Por vencer",
    "Vencido",
    "No aplica",
  ];

  function resolvedProfileKey() {
    if (docsState.profile === "dueno") {
      return docsState.duenoRegimen === "simplificado" ? "duenoSimplificado" : "duenoComun";
    }
    return docsState.profile;
  }

  function currentProfileData() {
    return DATA.perfiles?.[resolvedProfileKey()] || null;
  }

  function profileLabel() {
    if (docsState.profile === "dueno") {
      return (
        "Dueño de negocio · Régimen " +
        (docsState.duenoRegimen === "simplificado" ? "simplificado" : "común")
      );
    }
    const found = PROFILE_LIST.concat(INDEP_LIST).find((item) => item.key === docsState.profile);
    return found ? found.label : "Perfil";
  }

  function statusClass(status) {
    return "status-" + normalize(status).replace(/\s+/g, "-");
  }

  function normalizarVigencia(text) {
    const raw = String(text || "").trim();
    if (!raw) {
      return {
        texto: "Sin vigencia expresa en política; validar actualidad y autenticidad.",
        conflicto: false,
      };
    }
    if (/conflicto\s*60/i.test(raw) || /60[^.]*\b(vs|frente a)\b[^.]*30/i.test(raw)) {
      return { texto: "30 días", conflicto: true };
    }
    if (/45\s*general\s*\/\s*30/i.test(raw)) {
      return {
        texto: resolvedProfileKey() === "rentista" ? "30 días" : "45 días",
        conflicto: true,
      };
    }
    if (/60/.test(raw) && /30/.test(raw) && /indica/i.test(raw)) {
      return { texto: "30 días", conflicto: true };
    }
    return { texto: raw, conflicto: false };
  }

  function statusFor(key, fallback) {
    return docsState.statuses[key] || fallback || "Pendiente";
  }

  function renderProfileButtons() {
    const container = $("#docsProfileList");
    if (!container) return;

    const primary = PROFILE_LIST.map(
      (item) =>
        '<button class="pill' +
        (docsState.profile === item.key ? " is-active" : "") +
        '" data-docs-profile="' +
        item.key +
        '">' +
        escapeHTML(item.label) +
        "</button>",
    ).join("");

    const independent = INDEP_LIST.map(
      (item) =>
        '<button class="pill pill-sub' +
        (docsState.profile === item.key ? " is-active" : "") +
        '" data-docs-profile="' +
        item.key +
        '">' +
        escapeHTML(item.label) +
        "</button>",
    ).join("");

    container.innerHTML =
      primary + '<span class="pill-group-label">Independiente</span>' + independent;

    $$("[data-docs-profile]", container).forEach((button) => {
      button.addEventListener("click", () => {
        docsState.profile = button.dataset.docsProfile;
        docsState.stage = docsState.stage || 1;
        renderDocs();
        syncDocsUrl();
      });
    });
  }

  function renderConfig() {
    const container = $("#docsConfig");
    if (!container) return;

    if (docsState.profile === "asalariado") {
      container.innerHTML =
        '<label class="field"><span>Tipo de contrato</span>' +
        '<select id="docsContrato">' +
        ["indefinido", "fijo", "temporal"]
          .map(
            (value) =>
              '<option value="' +
              value +
              '"' +
              (docsState.contrato === value ? " selected" : "") +
              ">" +
              value.charAt(0).toUpperCase() +
              value.slice(1) +
              "</option>",
          )
          .join("") +
        "</select></label>" +
        '<p class="field-note">' +
        (docsState.contrato === "indefinido"
          ? "Mínimo 6 meses de antigüedad."
          : docsState.contrato === "fijo"
            ? "Renovación demostrada y mínimo 1 año de continuidad."
            : "La temporal asume la seguridad social y se exige mínimo 18 meses de antigüedad.") +
        "</p>";
    } else if (docsState.profile === "dueno") {
      container.innerHTML =
        '<label class="field"><span>Régimen tributario</span>' +
        '<select id="docsRegimen">' +
        '<option value="comun"' +
        (docsState.duenoRegimen === "comun" ? " selected" : "") +
        ">Régimen común</option>" +
        '<option value="simplificado"' +
        (docsState.duenoRegimen === "simplificado" ? " selected" : "") +
        ">Régimen simplificado</option>" +
        "</select></label>";
    } else if (docsState.profile === "tecnico") {
      container.innerHTML =
        '<p class="field-note field-note-warn"><strong>Aclarar:</strong> si es empleado o independiente. El checklist de técnico/tecnólogo aplica al prestador independiente; si es empleado, revisa también el perfil asalariado.</p>';
    } else {
      container.innerHTML =
        '<p class="field-note">Este perfil no requiere una configuración adicional.</p>';
    }

    $("#docsContrato")?.addEventListener("change", (event) => {
      docsState.contrato = event.target.value;
      renderDocs();
      syncDocsUrl();
    });
    $("#docsRegimen")?.addEventListener("change", (event) => {
      docsState.duenoRegimen = event.target.value;
      renderDocs();
      syncDocsUrl();
    });
  }

  function renderStageButtons() {
    const container = $("#docsStageList");
    if (!container) return;
    container.innerHTML = STAGES.map(
      (stage) =>
        '<button class="pill' +
        (docsState.stage === stage.key ? " is-active" : "") +
        '" data-docs-stage="' +
        stage.key +
        '">' +
        escapeHTML(stage.label) +
        "</button>",
    ).join("");

    $$("[data-docs-stage]", container).forEach((button) => {
      button.addEventListener("click", () => {
        docsState.stage = Number(button.dataset.docsStage);
        renderDocs();
        syncDocsUrl();
      });
    });
  }

  function renderLegalProducts() {
    const container = $("#docsLegalProductos");
    if (!container) return;

    if (docsState.stage !== 4) {
      container.hidden = true;
      container.innerHTML = "";
      return;
    }

    const rutas = DATA.legalizacion?.rutas || [];
    container.hidden = false;
    container.innerHTML =
      '<p class="section-hint">Selecciona el producto o ruta de legalización. El perfil laboral se conserva como contexto.</p>' +
      '<div class="pill-list">' +
      rutas
        .map(
          (ruta, index) =>
            '<button class="pill' +
            (docsState.legalProduct === index ? " is-active" : "") +
            '" data-legal-product="' +
            index +
            '">' +
            escapeHTML(ruta.producto) +
            "</button>",
        )
        .join("") +
      "</div>";

    $$("[data-legal-product]", container).forEach((button) => {
      button.addEventListener("click", () => {
        docsState.legalProduct = Number(button.dataset.legalProduct);
        renderDocs();
        syncDocsUrl();
      });
    });
  }

  function docNoteHTML(note) {
    if (!note) return "";
    if (/^Excepciones:/i.test(note)) {
      const items = note
        .replace(/^Excepciones:\s*/i, "")
        .split(/;\s*/)
        .filter(Boolean);
      return (
        '<details class="doc-note-details"><summary>Ver excepciones</summary><ul>' +
        items.map((item) => "<li>" + escapeHTML(item) + "</li>").join("") +
        "</ul></details>"
      );
    }
    return '<small class="doc-note-text">' + escapeHTML(note) + "</small>";
  }

  function rowHTML(row, index, keyPrefix, isLegal) {
    const key = keyPrefix + "-" + index;
    const status = statusFor(key, "Pendiente");
    const vigencia = normalizarVigencia(row.vigencia);
    const checkId = key + "-check";
    const checked = status !== "Pendiente" && status !== "No aplica";

    return (
      "<tr data-doc-row>" +
      '<td class="cell-check"><input type="checkbox" id="' +
      escapeHTML(checkId) +
      '" data-doc-check="' +
      escapeHTML(key) +
      '"' +
      (checked ? " checked" : "") +
      "></td>" +
      "<td><strong>" +
      escapeHTML(row.documento) +
      "</strong>" +
      docNoteHTML(row.nota) +
      "</td>" +
      "<td>" +
      escapeHTML(row.descripcion) +
      "</td>" +
      "<td>" +
      escapeHTML(vigencia.texto) +
      (vigencia.conflicto
        ? '<span class="conflict-tag">Vigencia por confirmar con Crédito</span>'
        : "") +
      "</td>" +
      '<td><span class="condition-badge">' +
      escapeHTML(row.condicion || "—") +
      "</span></td>" +
      '<td><select class="status-select ' +
      statusClass(status) +
      '" data-doc-status="' +
      escapeHTML(key) +
      '">' +
      STATUS_OPTIONS.map(
        (option) =>
          "<option" +
          (status === option ? " selected" : "") +
          ">" +
          escapeHTML(option) +
          "</option>",
      ).join("") +
      "</select></td>" +
      "</tr>"
    );
  }

  function tableHTML(rows, keyPrefix, isLegal) {
    if (!rows.length) {
      return '<div class="docs-empty">La política no relaciona documentos adicionales para esta etapa. Revisa las condiciones y notas del perfil.</div>';
    }
    return (
      '<div class="table-scroll"><table class="data-table docs-table"><thead><tr>' +
      "<th>Check</th><th>Documento</th><th>Descripción / ¿Qué debe contener?</th><th>Vigencia</th><th>Condición</th><th>Estado</th>" +
      "</tr></thead><tbody>" +
      rows.map((row, index) => rowHTML(row, index, keyPrefix, isLegal)).join("") +
      "</tbody></table></div>"
    );
  }

  function renderLegalStage() {
    const wrap = $("#docsTableWrap");
    if (!wrap) return;

    const rutas = DATA.legalizacion?.rutas || [];
    const ruta = rutas[docsState.legalProduct];
    const bloques = DATA.legalizacion?.bloques || [];
    const bloque = bloques[docsState.legalProduct];

    let html = "";
    let rows = [];

    if (docsState.legalProduct === 0 || docsState.legalProduct === 1) {
      rows = bloque?.filas || [];
      html = tableHTML(rows, "legal-" + docsState.legalProduct, true);
    } else {
      html =
        '<div class="docs-pending"><strong>Checklist pendiente de confirmación con Jurídica/Operaciones.</strong>' +
        (bloque?.parrafos?.length ? "<p>" + escapeHTML(bloque.parrafos[0]) + "</p>" : "") +
        "</div>";
      if (bloque?.parrafos?.length > 1) {
        html +=
          '<ul class="check-list">' +
          bloque.parrafos
            .slice(1)
            .map((item) => "<li>" + escapeHTML(item) + "</li>")
            .join("") +
          "</ul>";
      }
    }

    if (ruta?.habilita) {
      html = '<p class="docs-route-note">' + escapeHTML(ruta.habilita) + "</p>" + html;
    }

    wrap.innerHTML = html;

    bindDocRowEvents(rows, "legal-" + docsState.legalProduct);
    updateProgress(rows, "legal-" + docsState.legalProduct);
  }

  function renderStage() {
    const wrap = $("#docsTableWrap");
    const perfil = currentProfileData();
    if (!wrap || !perfil) return;

    if (docsState.stage === 4) {
      renderLegalStage();
      return;
    }

    const etapa = perfil.etapas?.[docsState.stage] || { filas: [], notas: [] };
    const rows = etapa.filas || [];
    wrap.innerHTML = tableHTML(rows, resolvedProfileKey() + "-" + docsState.stage, false);
    bindDocRowEvents(rows, resolvedProfileKey() + "-" + docsState.stage);
    updateProgress(rows, resolvedProfileKey() + "-" + docsState.stage);
  }

  function bindDocRowEvents(rows, keyPrefix) {
    $$("[data-doc-check]").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const key = checkbox.dataset.docCheck;
        const current = statusFor(key, "Pendiente");
        const next = checkbox.checked ? "Recibido" : "Pendiente";
        docsState.statuses[key] = next;
        const select = $('[data-doc-status="' + key + '"]');
        if (select) {
          select.value = next;
          select.className = "status-select " + statusClass(next);
        }
        updateProgress(rows, keyPrefix);
      });
    });

    $$("[data-doc-status]").forEach((select) => {
      select.addEventListener("change", () => {
        const key = select.dataset.docStatus;
        const value = select.value;
        docsState.statuses[key] = value;
        select.className = "status-select " + statusClass(value);
        const checkbox = $('[data-doc-check="' + key + '"]');
        if (checkbox) checkbox.checked = value !== "Pendiente" && value !== "No aplica";
        updateProgress(rows, keyPrefix);
      });
    });
  }

  function updateProgress(rows, keyPrefix) {
    const label = $("#docsProgressLabel");
    const bar = $("#docsProgressBar");
    const total = rows.length;
    const managed = rows.filter((_, index) => {
      const status = statusFor(keyPrefix + "-" + index, "Pendiente");
      return status !== "Pendiente" && status !== "No aplica";
    }).length;
    const percent = total ? Math.round((managed / total) * 100) : 0;
    if (label) label.textContent = managed + " de " + total + " documentos (" + percent + " %)";
    if (bar) bar.style.width = percent + "%";
  }

  function renderNotes() {
    const perfil = currentProfileData();
    const notesBox = $("#docsNotes");
    const rulesBox = $("#docsRules");
    if (!notesBox || !rulesBox) return;

    let notes = [];

    if (docsState.stage === 4) {
      notes = (DATA.legalizacion?.intro || []).slice();
    } else if (perfil) {
      const etapa2 = perfil.etapas?.[2]?.notas || [];
      const etapa3 = perfil.etapas?.[3]?.notas || [];
      notes = Array.from(new Set(etapa2.concat(etapa3)));
    }

    notesBox.innerHTML = notes.length
      ? '<ul class="check-list">' +
        notes.map((note) => "<li>" + escapeHTML(note) + "</li>").join("") +
        "</ul>"
      : "<p>No hay notas adicionales para este perfil y etapa.</p>";

    const rules = DATA.reglasGenerales || [];
    rulesBox.innerHTML =
      '<ul class="check-list">' +
      rules.map((rule) => "<li>" + escapeHTML(rule) + "</li>").join("") +
      "</ul>";
  }

  function renderContext() {
    const box = $("#docsContext");
    if (!box) return;
    const stage = STAGES.find((item) => item.key === docsState.stage);
    box.innerHTML =
      '<span class="context-chip">' +
      escapeHTML(profileLabel()) +
      "</span>" +
      '<span class="context-chip">' +
      escapeHTML(stage ? stage.label : "") +
      "</span>" +
      (docsState.stage === 4
        ? '<span class="context-note">La legalización se selecciona por producto, tipo de inmueble y tipo de cliente; no por ocupación.</span>'
        : "");
  }

  function renderDocs() {
    renderProfileButtons();
    renderConfig();
    renderStageButtons();
    renderLegalProducts();
    renderContext();
    renderStage();
    renderNotes();
    window.CF_LABEL_TABLES?.();
    const search = $("#docsSearch");
    if (search && search.value) search.dispatchEvent(new Event("input"));
  }

  $("#docsSearch")?.addEventListener("input", (event) => {
    const term = normalize(event.target.value);
    $$("[data-doc-row]").forEach((row) => {
      row.hidden = term !== "" && !normalize(row.textContent).includes(term);
    });
  });

  $("#docsNotesBtn")?.addEventListener("click", () => {
    const acc = $("#docsNotesAcc");
    if (!acc) return;
    acc.open = true;
    acc.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  $("#docsDownload")?.addEventListener("click", () => {
    const perfil = currentProfileData();
    if (!perfil) return;

    let rows = [];
    let title = "";

    if (docsState.stage === 4) {
      const bloque = DATA.legalizacion?.bloques?.[docsState.legalProduct];
      rows = bloque?.filas || [];
      title =
        "Legalización · " + (DATA.legalizacion?.rutas?.[docsState.legalProduct]?.producto || "");
    } else {
      rows = perfil.etapas?.[docsState.stage]?.filas || [];
      title = profileLabel() + " · " + (STAGES.find((s) => s.key === docsState.stage)?.label || "");
    }

    const keyPrefix =
      docsState.stage === 4
        ? "legal-" + docsState.legalProduct
        : resolvedProfileKey() + "-" + docsState.stage;

    const lines = [
      "WIKI HIPOTECARIA CREDIFAMILIA",
      "Checklist de documentación",
      "Perfil: " + profileLabel(),
      "Etapa: " + (STAGES.find((s) => s.key === docsState.stage)?.label || ""),
      title && docsState.stage === 4 ? "Ruta: " + title : "",
      "Anexo 6-A · septiembre 2026",
      "",
    ].filter(Boolean);

    rows.forEach((row, index) => {
      const status = statusFor(keyPrefix + "-" + index, "Pendiente");
      const vigencia = normalizarVigencia(row.vigencia);
      lines.push(
        "[" +
          (status === "Pendiente" || status === "No aplica" ? " " : "x") +
          "] " +
          row.documento +
          " | " +
          (row.condicion || "") +
          " | " +
          vigencia.texto +
          " | " +
          status,
      );
      if (row.descripcion) lines.push("    " + row.descripcion);
      if (row.nota) lines.push("    Nota: " + row.nota);
    });

    try {
      const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "checklist-" + resolvedProfileKey() + "-etapa-" + docsState.stage + ".txt";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      window.alert("No fue posible descargar el checklist en este navegador.");
    }
  });

  window.CF_DOCS = {
    select(options = {}) {
      const perfil = options.perfil;
      if (perfil === "duenoComun" || perfil === "duenoSimplificado") {
        docsState.profile = "dueno";
        docsState.duenoRegimen = perfil === "duenoSimplificado" ? "simplificado" : "comun";
      } else if (perfil === "dueno") {
        docsState.profile = "dueno";
      } else if (perfil && DATA.perfiles?.[perfil]) {
        docsState.profile = perfil;
      }
      const etapa = Number(options.etapa);
      if (Number.isFinite(etapa) && etapa >= 1 && etapa <= 4) docsState.stage = etapa;
      const legal = Number(options.legal);
      if (Number.isFinite(legal) && legal >= 0 && legal <= 3) docsState.legalProduct = legal;
      if (
        options.contrato === "indefinido" ||
        options.contrato === "fijo" ||
        options.contrato === "temporal"
      ) {
        docsState.contrato = options.contrato;
      }
      renderDocs();
      syncDocsUrl();
    },
  };

  renderDocs();
})();
