/* ============================================================
   PRODUCTOS · tarjetas interactivas (fuente: Anexo 6-A, septiembre 2026)
   ============================================================ */
(function () {
  const ICONS = {
    nueva:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M12 12v6M9 15h6"/></svg>',
    usada:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 16a3 3 0 1 0 6 0"/><path d="m15 13 1 3-3 1"/></svg>',
    vip: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="m12 12 1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z"/></svg>',
    empleados:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.2"/><path d="M5 20a7 7 0 0 1 14 0"/><path d="M18 4h3v3"/></svg>',
    mejoramiento:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.3-2.3z"/></svg>',
    acabados:
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="12" height="6" rx="1.5"/><path d="M16 7h3v4h-7v3"/><path d="M12 14v6"/></svg>',
  };

  function iconFor(key) {
    return ICONS[key] || ICONS.nueva;
  }

  const PRODUCTS = [
    {
      id: "vivienda-nueva",
      icon: "nueva",
      title: "Vivienda nueva VIS y NO VIS",
      lead: "Financiación para adquisición de vivienda nueva en proyectos previamente evaluados por Credifamilia.",
      intro:
        "Antes de estudiar al cliente, Credifamilia realiza una evaluación del constructor y del proyecto, verificando aspectos técnicos, jurídicos, financieros, urbanísticos y de calidad de la vivienda.",
      blocks: [
        {
          h: "🔎 Análisis del proyecto",
          p: "Credifamilia evalúa previamente:",
          subs: [
            {
              h: "Constructor",
              list: [
                "Experiencia en desarrollo de proyectos de construcción financiados por la banca hipotecaria.",
                "Experiencia del equipo profesional de gerencia, diseño, construcción y ventas en proyectos de vivienda.",
                "Solvencia moral e idoneidad técnica.",
                "Situación financiera favorable.",
                "Utilización de esquema de patrimonio autónomo o fideicomiso para el desarrollo del proyecto.",
              ],
            },
            {
              h: "Información mínima del proyecto",
              list: [
                "Descripción general.",
                "Planos con las áreas del proyecto.",
                "Especificaciones generales.",
                "Equipamiento urbano.",
              ],
            },
            {
              h: "Estudios técnicos",
              list: [
                "Informe técnico.",
                "Razonabilidad de costos de construcción, ventas y lote.",
                "Relación entre costos del proyecto y ventas totales.",
                "Programación y velocidad de construcción.",
                "Factibilidad técnica, comercial y financiera.",
                "Visitas de verificación al proyecto.",
              ],
            },
            {
              h: "Estudios jurídicos",
              list: [
                "Estudio de títulos.",
                "Reglamento de Propiedad Horizontal.",
                "Minuta de compraventa e hipoteca.",
              ],
            },
            {
              h: "Calidad de la vivienda",
              p: "La vivienda debe contar con acabados mínimos que permitan su habitabilidad y, como mínimo, con:",
              list: [
                "Habitación.",
                "Baño.",
                "Cocina.",
                "Zona de ropas o patio.",
                "Salón comedor o barra.",
                "Buena distribución.",
                "Ventilación e iluminación adecuadas.",
              ],
            },
            {
              h: "Urbanización y entorno",
              p: "Se revisan, entre otros:",
              list: [
                "Zonas verdes.",
                "Zonas sociales.",
                "Administración.",
                "Parqueaderos.",
                "Seguridad.",
                "Vías de acceso.",
                "Cercanía a colegios y centros médicos.",
                "Acceso a TransMilenio y otros medios de transporte.",
                "Aspectos relacionados con el barrio y participación comunitaria.",
              ],
            },
          ],
          note: {
            type: "warn",
            text: "Importante: esta evaluación del proyecto se realiza antes del otorgamiento. En esta etapa no existe obligación para el cliente de entregar documentos y la preaprobación no genera obligación de desembolso para Credifamilia.",
          },
        },
        {
          h: "VIS y NO VIS",
          p: "Dentro del producto de vivienda nueva se deben consultar las condiciones específicas según corresponda a VIS o NO VIS y al sistema de amortización elegido.",
          subs: [
            {
              h: "Modalidades de amortización contempladas en la política",
              list: [
                "Cuota constante.",
                "Amortización constante.",
                "Cuota decreciente mensualmente.",
                "Abono constante.",
              ],
            },
          ],
        },
        {
          h: "💰 Condiciones financieras principales",
          subs: [
            {
              h: "Plazo",
              list: [
                "Entre 5 y 20 años.",
                "Para plazos superiores a 15 años se establece condición de Acierta ≥ 690.",
                "Para extranjeros con PPT, el plazo estará limitado por la vigencia de la certificación PPT.",
              ],
            },
            { h: "Modalidad de pago", list: ["Mes vencido."] },
            {
              h: "Seguros requeridos",
              list: [
                "Vida deudores, incluyendo ITP y enfermedad grave.",
                "Incendio y terremoto.",
                "AMIT.",
              ],
            },
            {
              h: "Seguros opcionales",
              list: ["Fondo Nacional de Garantías – FNG.", "Seguro de desempleo."],
            },
            {
              h: "Monto",
              list: [
                "Hasta el LTV permitido, con máximo de 150 SMMLV o el tope máximo definido por el Gobierno.",
                "En casos de renovación urbana puede llegar hasta 175 SMMLV.",
                "Si el monto es inferior a 10 SMMLV, se debe validar con el área Financiera la viabilidad del desembolso.",
              ],
            },
          ],
          note: {
            type: "info",
            text: "Caso especial: para prestadores de servicios técnicos o tecnólogos, la política establece que solo se podrán financiar viviendas entre 135 y 180 SMMLV; el monto de la deuda dependerá del LTV aplicable.",
          },
        },
        {
          h: "👥 Perfiles y condiciones",
          p: "Los perfiles admitidos se determinan conforme a las políticas generales de aceptación. Los independientes tienen condiciones particulares y, para determinados productos, deben ser evaluados en Comité.",
        },
        {
          h: "💵 Recursos propios",
          subs: [
            {
              h: "Regla general",
              list: [
                "Mínimo 10 % del valor de la vivienda.",
                "Para clientes Premium puede reducirse al 5 %, sujeto a revisión de Fábrica conforme a las políticas de riesgo aprobadas por Junta Directiva.",
                "Para otros perfiles, la política contempla un mínimo del 20 %, sujeto a las condiciones correspondientes.",
              ],
            },
          ],
        },
      ],
    },

    {
      id: "vip",
      icon: "vip",
      title: "VIP",
      lead: "Viviendas con condiciones particulares dentro de la política de vivienda nueva.",
      intro:
        "Las políticas generales de VIP son las mismas de vivienda nueva, excepto por las condiciones específicas establecidas para este producto.",
      blocks: [
        {
          h: "⏱️ Plazo",
          list: ["Máximo 20 años, tanto para amortizaciones en Pesos como en UVR."],
        },
        {
          h: "📊 RCI",
          p: "El RCI puede llegar hasta 35 %, siempre que:",
          list: [
            "No cuente con subsidios.",
            "Cumpla las políticas establecidas para clientes Premium en VIS.",
          ],
        },
        {
          h: "💰 Recursos propios",

          subs: [
            {
              h: "Regla general",
              list: [
                "Mínimo 10 % del valor de la vivienda.",
                "Puede ser 8 % para plazos de 20 años.",
              ],
            },
            {
              h: "Empleados y pensionados",
              p: "Se permite un porcentaje entre 5 % y 10 %, con LTV máximo del 80 %, siempre que se cumplan las condiciones establecidas:",
              list: [
                "Acierta ≥ 740.",
                "No presentar castigos o reestructuraciones vigentes o históricas en centrales de riesgo.",
                "Calificación de centrales AA o A.",
                "Si existen créditos vigentes sin calificación en centrales, Acierta ≥ 800.",
                "Si el modelo interno arroja BB, debe existir experiencia financiera diferente de cuentas de ahorro o cuentas corrientes.",
                "Contar con FNG cuando el LTV lo permita y exista cupo vigente.",
              ],
            },
          ],
          note: {
            type: "info",
            text: "Estas condiciones deben cumplirse tanto para la aprobación como para la carta definitiva.",
          },
        },
        {
          h: "💳 Ahorro demostrable",
          p: "Al momento de solicitar el crédito se debe demostrar como mínimo el 5 % mediante:",
          list: [
            "Extracto de cesantías.",
            "Extracto de cuenta inmovilizada.",
            "Extracto de pago a la constructora.",
          ],
        },
      ],
    },

    {
      id: "vivienda-usada",
      icon: "usada",
      title: "Vivienda usada",
      lead: "Financiación para adquisición de vivienda usada, sujeta a las condiciones del inmueble, la garantía y el perfil del solicitante.",
      blocks: [
        {
          h: "📋 Perfil de los solicitantes",
          list: [
            "Se aplican los mismos criterios de número de solicitantes y perfil establecidos para vivienda nueva.",
          ],
        },
        {
          h: "💰 Monto",
          subs: [
            {
              h: "VIS",
              list: [
                "Máximo acorde con el tope VIS de acuerdo con la zona de ubicación del inmueble.",
              ],
            },
            {
              h: "NO VIS",
              list: [
                "Máximo 350 SMMLV.",
                "Si supera este rango, debe pasar por Comité de Garantías.",
                "Si el monto es inferior a 10 SMMLV, debe validarse con el área Financiera la viabilidad del desembolso.",
              ],
            },
          ],
        },
        { h: "⏱️ Plazo", list: ["De 5 a 20 años."] },
        {
          h: "🏡 Uso del inmueble",
          list: [
            "El inmueble debe tener como uso principal la vivienda del solicitante.",
            "Se permite uso mixto siempre que el 80 % de la vivienda sea de uso habitacional y principal.",
            "No son sujetos de crédito los inmuebles que tengan algún uso relacionado con actividades peligrosas.",
          ],
        },
        {
          h: "🛡️ Garantía",
          subs: [
            {
              h: "Se aceptan",
              list: [
                "Hipotecas abiertas de primer grado y sin límite de cuantía a favor de Credifamilia.",
                "Hipotecas de segundo grado, cuando el giro sea directo a la entidad financiera beneficiaria de la hipoteca.",
                "No se aceptan garantías en obra gris o parcialmente construidas.",
              ],
            },
            {
              h: "La garantía debe cumplir",
              list: [
                "Normas de sismo-resistencia.",
                "Normas del POT.",
                "Condiciones técnicas adecuadas.",
                "Buen diseño y acabados.",
                "Condiciones adecuadas de habitabilidad.",
              ],
            },
          ],
        },
        {
          h: "🏘️ Estrato",
          list: [
            "Estrato 1: no se acepta.",
            "Estrato 2: debe estar en conjunto cerrado con propiedad horizontal; no se aceptan casas individuales.",
            "Estrato 3: existen condiciones especiales para inmuebles sin reglamento de propiedad horizontal y límites de LTV.",
            "Estrato 4: si el inmueble supera 150 SMMLV, la política de parqueaderos puede ser excepcionada por Comité de Garantías cuando el LTV sea ≤ 50 %.",
            "Estratos 5 y 6: se aceptan.",
          ],
        },
        {
          h: "🚗 Parqueaderos",
          subs: [
            { h: "Para VIS", list: ["No es obligatorio."] },
            {
              h: "Para NO VIS",
              list: [
                "Es obligatorio, privado o común de uso exclusivo.",
                "Viviendas superiores a 120 m² o a 300 SMMLV: deben contar con 2 parqueaderos.",
                "Viviendas superiores a 900 SMMLV: deben contar con 3 parqueaderos.",
                "Los casos que no cumplan deben revisarse por excepción.",
              ],
            },
          ],
        },
      ],
    },

    {
      id: "empleados",
      icon: "empleados",
      title: "Empleados Credifamilia",
      lead: "Condiciones especiales establecidas por la Junta Directiva para funcionarios de Credifamilia.",
      blocks: [
        {
          h: "🏡 Tipo de vivienda",
          list: [
            "Vivienda nueva en proyectos financiados por Credifamilia.",
            "Por excepción de Presidencia pueden revisarse viviendas en proyectos donde la compañía no tenga presencia o viviendas usadas.",
          ],
        },
        {
          h: "💰 Condiciones",
          subs: [
            { h: "Amortización", list: ["UVR o Pesos."] },
            {
              h: "Tasa",
              list: [
                "Super Tasa vigente al momento del desembolso, sin superar las tasas máximas legales.",
                "Se mantiene mientras el empleado permanezca vinculado a la compañía, de acuerdo con las reglas establecidas para retiro.",
              ],
            },
            {
              h: "Modalidad",
              list: [
                "Mes vencido.",
                "Con autorización de descuento por nómina.",
                "El descuento por nómina no puede superar el 50 % del ingreso.",
              ],
            },
            { h: "Vigencia de aprobación", list: ["180 días hasta la firma de la escritura."] },
          ],
        },
        {
          h: "👤 Antigüedad",
          list: [
            "Contrato a término indefinido.",
            "Mínimo 1 año al momento de solicitar el crédito.",
            "Se acepta la sumatoria de todos los tipos de contrato.",
          ],
        },
        {
          h: "📌 Condiciones adicionales",
          p: "Se requiere:",
          list: [
            "Visto bueno del jefe directo.",
            "Visto bueno del Vicepresidente/Gerente del área.",
            "Evaluaciones de desempeño satisfactorias.",
            "El producto es únicamente para primera vivienda.",
          ],
        },
        {
          h: "💼 Comisión",
          list: [
            "Los créditos hipotecarios para funcionarios no generan comisión al asesor, ni por aprobación ni por desembolso.",
          ],
        },
        {
          h: "⚠️ Excepciones",
          p: "Solo pueden otorgarse con visto bueno de:",
          list: ["Presidencia.", "Gerencia de Riesgo."],
        },
        {
          h: "💳 Gastos",
          p: "El empleado asume:",
          list: ["Avalúo.", "Estudio de títulos."],
          note: {
            type: "info",
            text: "Adicionalmente, debe cumplir las políticas de endeudamiento, centrales de riesgo y documentación.",
          },
        },
      ],
    },

    {
      id: "mejoramiento",
      icon: "mejoramiento",
      title: "Mejoramiento de vivienda",
      lead: "Crédito destinado a realizar mejoras sobre una vivienda propia.",
      blocks: [
        {
          h: "👥 ¿Quién puede solicitarlo?",
          subs: [
            {
              h: "Clientes nuevos",
              list: [
                "Propietarios de vivienda propia libre de hipoteca y otros gravámenes que desean adquirir el crédito de mejoramiento.",
              ],
            },
            {
              h: "Clientes actuales",
              list: [
                "Clientes con crédito hipotecario con Credifamilia que desean adquirir un crédito adicional para mejoramiento de su vivienda principal.",
              ],
            },
          ],
        },
        {
          h: "🏡 Condición del inmueble",
          list: [
            "Debe ser un inmueble sobre el cual pueda constituirse hipoteca en primer grado a favor de Credifamilia.",
            "Para propietarios sin crédito de adquisición, el cliente asume el valor del avalúo y del estudio de títulos.",
            "Para clientes con crédito de adquisición vigente en Credifamilia, si han transcurrido 12 meses desde el avalúo y estudio de títulos, se generan nuevamente estos costos.",
            "En clientes actuales se revisa el comportamiento de pago de las cuotas del crédito hipotecario durante los últimos 24 meses.",
          ],
        },
        {
          h: "🔨 ¿Qué mejoras se pueden financiar?",
          list: [
            "Remodelación.",
            "Reparación.",
            "Subdivisión.",
            "Refuerzo de cimientos o del suelo.",
            "Muros o cubiertas.",
            "Falta o cambio de redes eléctricas.",
            "Falta o cambio de redes de acueducto.",
          ],
        },
        {
          h: "💰 Valor mínimo de la vivienda",
          list: [
            "La vivienda sobre la cual se realiza el mejoramiento debe tener un valor mínimo de 81 SMMLV.",
          ],
        },
        {
          h: "🏙️ Ubicación",
          list: [
            "Debe encontrarse en zona urbana, dentro de una ciudad o municipio donde Credifamilia tenga presencia.",
            "La política contempla una excepción para clientes que viven en ciudades principales diferentes a aquellas donde Credifamilia tiene presencia, cuando se trate de empleados formales y existan puntos de pago en la ciudad donde viven.",
          ],
        },
        {
          h: "🏘️ Características del inmueble",
          p: "Debe:",
          list: [
            "Contar con infraestructura urbana y servicios públicos básicos.",
            "Estar fuera de zonas de riesgo por remoción en masa e inundación.",
            "No presentar problemas de orden público.",
            "Cumplir las normas del POT.",
            "Tener buenas especificaciones técnicas, diseño, acabados y habitabilidad.",
            "No se aceptan garantías en obra gris o parcialmente construidas.",
          ],
        },
        { h: "⏱️ Plazo", list: ["De 5 a 15 años."] },
        {
          h: "💰 Monto",
          subs: [
            { h: "Mínimo", list: ["$10 millones."] },
            {
              h: "Máximo",
              list: [
                "Estrato 2: $50 millones.",
                "Estrato 3: $100 millones.",
                "Estrato 4 o superior: $200 millones.",
              ],
            },
          ],
        },
        {
          h: "🏚️ Vetustez",
          list: [
            "VIS: menor a 15 años.",
            "NO VIS – estrato 2: menor a 15 años.",
            "NO VIS – demás estratos: sujeta al concepto del perito avaluador.",
          ],
        },
        {
          h: "📄 Documentos adicionales de originación",
          p: "Además de la documentación de adquisición de vivienda, se solicita:",
          list: [
            "Extracto bancario o factura de suscripción de televisión y/o internet.",
            "Permisos o licencias ante las autoridades competentes, de manera opcional.",
          ],
        },
        {
          h: "⚖️ Legalización",
          list: ["Certificado de Tradición y Libertad con máximo 30 días."],
          note: {
            type: "warn",
            text: "Importante: solo se permite tener una solicitud de crédito a la vez: adquisición de vivienda nueva/usada o mejoramiento de vivienda.",
          },
        },
      ],
    },

    {
      id: "acabados-vis",
      icon: "acabados",
      title: "Acabados VIS",
      lead: "Crédito dirigido a viviendas de propiedad horizontal que se entregan en obra gris u obra blanca.",
      blocks: [
        {
          h: "👤 Perfil del producto",
          p: "Aplica para viviendas VIS de propiedad horizontal que sean entregadas en:",
          list: ["Obra gris.", "Obra blanca."],
        },
        {
          h: "💰 Condiciones principales",
          subs: [
            { h: "Ingresos", list: ["Desde 1 SMMLV."] },
            { h: "Monto", list: ["Mínimo $5 millones."] },
            {
              h: "Plazo",
              list: [
                "Mínimo 5 años.",
                "Máximo 20 años.",
                "Debe ser el mismo plazo del crédito hipotecario.",
              ],
            },
            {
              h: "Valor comercial del inmueble",
              list: ["Mínimo 70 SMMLV, correspondiente al valor piso de VIP."],
            },
            {
              h: "LTV",
              list: [
                "Máximo 30 %.",
                "La suma de Acabados VIS + Crédito Hipotecario no puede superar el 80 % del valor del inmueble.",
              ],
            },
          ],
        },
        {
          h: "📊 RCI",
          list: ["VIP: 30 %.", "VIS con FRECH: 33 %.", "VIS sin FRECH: 40 %."],
        },
        {
          h: "💳 Giro de recursos",
          p: "El monto aprobado debe ser girado a la PropTech y/o proveedores aprobados por la Constructora, en dos partes:",
          list: ["50 % al inicio de las obras.", "50 % al finalizar las obras."],
        },
        {
          h: "🏠 Garantía",
          list: [
            "La garantía corresponde a la hipoteca constituida sobre el inmueble financiado mediante el crédito hipotecario.",
          ],
        },
        {
          h: "📑 Sistema de amortización",
          list: ["Se mantiene el mismo sistema de amortización del crédito hipotecario."],
        },
        {
          h: "📌 Regla general",
          list: [
            "En todo lo demás, el solicitante debe cumplir las mismas condiciones aplicables al crédito hipotecario VIS.",
          ],
        },
      ],
    },
  ];

  const COMPARE = [
    [
      "🏡 Vivienda nueva VIS / NO VIS",
      "Adquisición de vivienda nueva",
      "5 a 20 años",
      "Proyecto y constructor deben ser evaluados",
    ],
    [
      "⭐ VIP",
      "Vivienda VIP",
      "Máx. 20 años",
      "Condiciones especiales de RCI, FNG y recursos propios",
    ],
    [
      "🏠 Vivienda usada",
      "Adquisición de vivienda usada",
      "5 a 20 años",
      "Condiciones específicas de inmueble y garantía",
    ],
    [
      "👩‍💼 Empleados Credifamilia",
      "Vivienda para funcionarios",
      "Según producto",
      "Condiciones especiales y descuento por nómina",
    ],
    ["🛠️ Mejoramiento", "Remodelación y mejoras", "5 a 15 años", "Vivienda mínima de 81 SMMLV"],
    ["🎨 Acabados VIS", "Acabados de vivienda VIS en PH", "5 a 20 años", "LTV máximo 30 %"],
  ];

  const esc = (s) =>
    String(s).replace(
      /[&<>"]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
    );

  const cleanHeading = (value) =>
    String(value)
      .replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u, "")
      .trim();

  function renderList(items) {
    return (
      '<ul class="prod-list">' + items.map((i) => "<li>" + esc(i) + "</li>").join("") + "</ul>"
    );
  }

  function renderBlock(b) {
    let html = '<div class="prod-block">';
    html += "<h4>" + esc(cleanHeading(b.h)) + "</h4>";
    if (b.p) html += "<p>" + esc(b.p) + "</p>";
    if (b.list) html += renderList(b.list);
    if (b.subs) {
      b.subs.forEach((s) => {
        html += '<div class="prod-sub"><h5>' + esc(cleanHeading(s.h)) + "</h5>";
        if (s.p) html += "<p>" + esc(s.p) + "</p>";
        if (s.list) html += renderList(s.list);
        html += "</div>";
      });
    }
    if (b.note) {
      html +=
        '<div class="doc-note doc-note--' + b.note.type + '"><p>' + esc(b.note.text) + "</p></div>";
    }
    html += "</div>";
    return html;
  }

  function renderDetail(p) {
    let html =
      '<div class="prod-detail-head"><h3><span class="prod-detail-icon">' +
      iconFor(p.icon) +
      "</span><span>" +
      esc(p.title) +
      "</span></h3>";
    html += '<button type="button" class="prod-close" data-close>Cerrar ✕</button></div>';
    html += '<p class="prod-lead">' + esc(p.lead) + "</p>";
    if (p.intro) html += "<p>" + esc(p.intro) + "</p>";
    html += p.blocks.map(renderBlock).join("");
    return html;
  }

  function init() {
    const grid = document.getElementById("product-cards");
    const panel = document.getElementById("product-detail");
    if (!grid || !panel) return;

    grid.innerHTML = PRODUCTS.map(
      (p) =>
        '<article class="product-card" data-product="' +
        p.id +
        '"><span class="product-icon">' +
        iconFor(p.icon) +
        "</span><h3>" +
        esc(p.title) +
        "</h3><p>" +
        esc(p.lead) +
        '</p><button type="button" class="prod-toggle" data-open="' +
        p.id +
        '">Ver detalle →</button></article>',
    ).join("");

    const table = document.getElementById("product-compare-body");
    if (table) {
      table.innerHTML = COMPARE.map(
        (r) =>
          "<tr>" +
          r.map((c, index) => "<td>" + esc(index === 0 ? cleanHeading(c) : c) + "</td>").join("") +
          "</tr>",
      ).join("");
    }

    let openId = null;

    function close() {
      openId = null;
      panel.hidden = true;
      panel.innerHTML = "";
      grid.querySelectorAll(".product-card").forEach((c) => c.classList.remove("is-open"));
      grid.querySelectorAll(".prod-toggle").forEach((b) => (b.textContent = "Ver detalle →"));
    }

    function open(id) {
      const p = PRODUCTS.find((x) => x.id === id);
      if (!p) return;
      openId = id;
      panel.innerHTML = renderDetail(p);
      panel.hidden = false;
      grid
        .querySelectorAll(".product-card")
        .forEach((c) => c.classList.toggle("is-open", c.getAttribute("data-product") === id));
      grid.querySelectorAll(".prod-toggle").forEach((b) => {
        b.textContent = b.getAttribute("data-open") === id ? "Ver detalle ↑" : "Ver detalle →";
      });
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-open]");
      if (!btn) return;
      const id = btn.getAttribute("data-open");
      if (id === openId) close();
      else open(id);
    });

    panel.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) close();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
