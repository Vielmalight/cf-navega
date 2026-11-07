# 01-pagina-2-2-vivienda-nueva

Link de ChatGPT (última respuesta): https://chatgpt.com/share/6aeaa32b-4a48-83ea-b994-e65faf636991 (OJO: la clienta repitió este mismo link en el link 3; confirmar cuál es el correcto)

Fuente: chat de ChatGPT de la clienta. Texto final, no modificar el contenido.

¡Vamos con uno de los módulos más importantes de CF Navega! 💚

Este apartado debe ser una verdadera herramienta de evaluación crediticia. El asesor debe poder consultar cuánto ingreso se reconoce, qué porcentajes aplicar, cuáles son los límites de financiación y qué situaciones generan rechazo.

Mi propuesta es mantener el estilo colorido que acabamos de definir, pero organizarlo en **tres secciones principales**, respetando los numerales originales del Anexo 6-A.

# 2.2. Crédito de vivienda nueva VIS y NO VIS

<box border radius="2xl" padding={3} gap={3}>
  <box background="#075C48" theme="dark" radius="xl" padding={3} gap={2}>
    <row align="center">
      <icon name="house" size="2xl" color="#FFFFFF"/>
      <spacer/>
      <badge color="success">Anexo 6-A</badge>
    </row>
    <title size="2xl" color="#FFFFFF">Crédito de vivienda nueva</title>
    <text color="#D7EEE5" size="sm">Consulta los criterios de ingresos, aceptación y rechazo para operaciones de vivienda.</text>
    <grid columns={2} gap={2}>
      <grid-item>
        <box background="#FFFFFF20" padding={3} radius="lg">
          <title color="#FFFFFF" size="xl">VIS / VIP</title>
          <caption color="#D7EEE5">Vivienda de interés social y prioritario</caption>
        </box>
      </grid-item>
      <grid-item>
        <box background="#FFFFFF20" padding={3} radius="lg">
          <title color="#FFFFFF" size="xl">NO VIS</title>
          <caption color="#D7EEE5">Vivienda diferente de interés social</caption>
        </box>
      </grid-item>
    </grid>
  </box>
  <grid columns={3} gap={2}>
    <grid-item>
      <box background="#E4F3EB" radius="lg" padding={2} align="center">
        <icon name="calculator" color="#087F5B" size="xl"/>
        <text color="#075C48" weight="semibold" size="xs" textAlign="center">2.2.1</text>
        <caption textAlign="center">Ingresos</caption>
      </box>
    </grid-item>
    <grid-item>
      <box background="#E8EFFB" radius="lg" padding={2} align="center">
        <icon name="shield-check" color="#4776BA" size="xl"/>
        <text color="#315C9C" weight="semibold" size="xs" textAlign="center">2.2.2</text>
        <caption textAlign="center">Aceptación</caption>
      </box>
    </grid-item>
    <grid-item>
      <box background="#FCEBDD" radius="lg" padding={2} align="center">
        <icon name="alert-triangle" color="#BD772F" size="xl"/>
        <text color="#9C6125" weight="semibold" size="xs" textAlign="center">2.2.3</text>
        <caption textAlign="center">Rechazo</caption>
      </box>
    </grid-item>
  </grid>
</box>

La navegación tendrá tres pestañas y el contenido se actualizará al seleccionar cada una. Además, en aceptación se podrá alternar entre VIS/VIP y NO VIS.

---

# 2.2.1. Determinación de ingresos

<badge color="success">Criterios de reconocimiento de ingresos</badge>

Esta sección debe permitir que el asesor identifique qué ingresos se pueden reconocer y qué porcentaje debe aplicar según la actividad económica.

Yo la organizaría en dos grandes grupos:

- Asalariados y pensionados.
- Independientes, con sus diferentes tipologías.

## A. Asalariados y pensionados

<box border radius="xl" padding={3} gap={3}>
  <row align="center">
    <box background="#E2F3EA" size="42px" radius="lg" align="center" justify="center">
      <icon name="briefcase-business" color="#087F5B" size="xl"/>
    </box>
    <box flex="1" gap={0}>
      **Ingresos laborales**
      <caption>Asalariados y pensionados</caption>
    </box>
    <badge color="success">1 SMMLV</badge>
  </row>
  **Condición mínima**
  Cada titular que aporte ingresos debe cumplir con un mínimo de 1 SMMLV.

  Cuando un titular tiene dos o más ingresos:
  - Al menos uno debe ser superior a 1 SMMLV.
  - Se debe perfilar con el ingreso más alto.
  - El ingreso básico para el análisis será el demostrado en los desprendibles de nómina.
</box>

### ¿Qué ingresos adicionales se pueden reconocer?

Esta información debe aparecer en una tabla de consulta rápida:

| Tipo de ingreso | Porcentaje o límite reconocido | Soporte |
|---|---:|---|
| Salario básico | Según nómina | Desprendibles de nómina |
| Horas extras, auxilios y otros ingresos adicionales | Máximo 50% del ingreso fijo | Soportes de nómina |
| Ingresos adicionales no formales | Máximo 50% del ingreso fijo | Extractos bancarios |
| Comisiones, bonos y bonificaciones | Máximo el valor de 1 salario básico | Carta laboral y extractos (dos desprendibles o dos extractos) |
| Primas adicionales recurrentes del sector público de carrera | Hasta 100% | Carta laboral y desprendibles de los últimos 3 meses |
| Dividendos | Según lo demostrado | Declaración de renta de la persona |
| Arrendamientos | 60% | Certificado de tradición y libertad |

**Condición especial para primas del sector público:**

Para reconocer hasta el 100% de las primas adicionales recurrentes mensuales, el trabajador debe:
- Pertenecer al sector público de carrera.
- Tener mínimo 5 años continuos en la misma entidad.
- Presentar carta laboral.
- Presentar desprendibles de los últimos 3 meses.

No aplica para fuerza pública, contratistas, temporales o empleados en provisionalidad.

Fuente: Anexo 6-A, numeral 2.2.1, página 13. <FileCite ref_id="turn15file0" line_range_start={712} line_range_end={730}/>

## B. Independientes

<box border radius="xl" padding={3} gap={3}>
  <row align="center">
    <box background="#EAE5F8" size="42px" radius="lg" align="center" justify="center">
      <icon name="briefcase-business" color="#7954A7" size="xl"/>
    </box>
    <box flex="1" gap={0}>
      **Reconocimiento de ingresos**
      <caption>Independientes según tipología</caption>
    </box>
    <badge color="discovery">1,5 SMMLV</badge>
  </row>
  **Ingreso mínimo de referencia**

  Los ingresos se reconocen según la actividad económica y los porcentajes establecidos en el Anexo 6-A.
</box>

### Tabla 1. Porcentajes de reconocimiento según tipología

| Tipología | Ingreso reconocido |
|---|---:|
| Honorarios y comisiones | <badge color="success">90%</badge> |
| Rendimientos | 80% |
| Dueños de taxi | 70% |
| Dueños de camiones o camionetas | 60% |
| Rentistas de capital (arrendamientos) | 60% |
| Otros independientes (extractos) | 50% |
| Dueños de buses, busetas, colectivos, microbuses y tractocamiones | 45% |

### Tabla 2. Régimen simplificado: margen por actividad

Esta tabla debe estar en un desplegable independiente, porque sus porcentajes corresponden a márgenes específicos por actividad.

| Actividad económica | Margen reconocido |
|---|---:|
| Maquila | 80% |
| Producción (torno, elaboración de productos) | 70% |
| Servicios (cabinas, fotocopias, peluquerías, etc.) | 60% |
| Confecciones | 50% |
| Servicios y obras civiles | 50% |
| Supermercados, tiendas y comercio | 40% |
| Venta de carnes y lácteos | 10% |

**Importante:** no debemos mezclar estos márgenes con los porcentajes generales de tipologías independientes. Son dos tablas diferentes de la política.

### C. Reglas especiales para independientes

Aquí sí necesitamos fichas diferentes por tipología, porque el reconocimiento de ingresos no es igual para todos.

<box border radius="xl" padding={3} gap={3}>
  <row align="center">
    <icon name="graduation-cap" color="#7954A7" size="xl"/>
    **Prestadores de servicios profesionales**
    <spacer/>
    <badge color="discovery">90%</badge>
  </row>
  Se reconoce el 90% de lo soportado en extractos, sin perjuicio de aplicar recortes adicionales por las políticas de cotización a seguridad social.

  Cuando no aparece el salario en las planillas:

  \[
  \text{Ingreso}=\frac{\text{Cotización de salud}}{12,5\%}
  \]
  <divider color="subtle"/>
  <row align="center">
    <icon name="wrench" color="#4776BA" size="xl"/>
    **Prestadores técnicos o tecnólogos**
  </row>
  Cuando cotizan salud sobre un valor inferior a sus ingresos:
  - Se toma como máximo 1,5 veces el valor sobre el cual cotizan.
  - Nunca puede superar los ingresos soportados.
  - No se aplica el reconocimiento del 90%.
  <divider color="subtle"/>
  <row align="center">
    <icon name="car-front" color="#BD772F" size="xl"/>
    **Conductores**
    <spacer/>
    <badge color="warning">Tope 1,5 SMMLV</badge>
  </row>
  Los ingresos se soportan con:
  - Extractos bancarios.
  - En su defecto, pagos de planilla de seguridad social de los últimos 3 meses.
  <divider color="subtle"/>
  <row align="center">
    <icon name="house" color="#087F5B" size="xl"/>
    **Rentistas de capital**
  </row>
  Los ingresos por arrendamiento deben acreditarse mediante extractos bancarios que evidencien las respectivas consignaciones.
  <divider color="subtle"/>
  <row align="center">
    <icon name="store" color="#087F5B" size="xl"/>
    **Dueños de negocio – régimen común**
  </row>
  - Los ingresos se toman como máximo de lo soportado en la declaración de renta del solicitante, no de la empresa.
  - Se permite una variación máxima del 20% frente a la declaración del año anterior, ajustada por IPC.
  - Si la última declaración es inferior a la anterior, se toma la de menor valor ajustada por IPC.
  <divider color="subtle"/>
  <row align="center">
    <icon name="store" color="#087F5B" size="xl"/>
    **Dueños de negocio – régimen simplificado**
  </row>
  El ingreso se determina de acuerdo con:
  - Visita al negocio.
  - Extractos bancarios.
  - Facturas de compra y venta.
  - Margen de reconocimiento según actividad económica.
</box>

Fuente: Anexo 6-A, numeral 2.2.1, páginas 13 y 14. <FileCite ref_id="turn15file0" line_range_start={732} line_range_end={788}/>

## D. Descuentos y endeudamiento

Esta regla debe tener un indicador destacado porque puede afectar directamente la posibilidad de otorgar el crédito.

<box border radius="xl" padding={3} gap={2}>
  <box background="#FFF0DF" radius="lg" padding={3}>
    <caption color="#925B1D">LÍMITE DE DESCUENTOS MENSUALES</caption>
    <title size="2xl" color="#A7651D">Máximo 50%</title>
    **Del ingreso salarial mensual, incluyendo el crédito solicitado.**
  </box>
  **¿Qué descuentos se consideran?**
  - Parafiscales.
  - Cuotas de créditos.
  - Otros descuentos mensuales.
  - Descuentos registrados en nómina y centrales.

  **Para asalariados:** se revisan comprobantes de nómina y centrales de información financiera.

  **Para independientes:** se revisan los descuentos obtenidos en visita y centrales de riesgo, cotejados con información pública de gastos del DANE según nivel de ingresos.
</box>

### E. Capacidad de pago y gastos familiares

La política establece que la capacidad de pago por sí sola no es una causal de negación. Sin embargo, debe calcularse y analizarse para alimentar el modelo interno.

Se consideran gastos de:

- Alojamiento.
- Agua, electricidad, gas y otros combustibles.
- Alimentos y bebidas no alcohólicas.
- Transporte.
- Educación.

La política considera adulto a todo dependiente con edad igual o superior a 15 años.

**Tabla de estimación de gastos familiares**

| Rango salarial | 0 dependientes | 1 dependiente | 2 dependientes | 3 dependientes |
|---|---:|---:|---:|---:|
| 1 a 2 SMMLV | 35% | 37% | 47% | 70% |
| Más de 2 SMMLV | 32% | 38% | 40% | 63% |

Fuente: Anexo 6-A, página 14. <FileCite ref_id="turn15file0" line_range_start={789} line_range_end={804}/>

**Cómo lo haría visualmente:** un pequeño simulador donde el asesor seleccione el rango salarial y el número de dependientes. CF Navega resaltaría el porcentaje correspondiente. Este valor sería una referencia de estimación de gastos, no una decisión automática de aprobación o rechazo.

---

# 2.2.2. Políticas generales de aceptación

<badge color="info">Condiciones de aprobación</badge>

Aquí utilizaría dos pestañas principales:

<box border radius="xl" padding={3} gap={3}>
  <title size="lg" color="#315C9C">Condiciones por producto</title>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="#E5F0FC" radius="lg" padding={3} align="center">
        <icon name="house" color="#3975B8" size="2xl"/>
        <title color="#285B9B" size="lg">VIS / VIP</title>
        <caption>Vivienda de interés social</caption>
      </box>
    </grid-item>
    <grid-item>
      <box background="#F0EAFB" radius="lg" padding={3} align="center">
        <icon name="building-2" color="#7954A7" size="2xl"/>
        <title color="#7046A1" size="lg">NO VIS</title>
        <caption>Vivienda diferente de interés social</caption>
      </box>
    </grid-item>
  </grid>
</box>

Mi recomendación es mostrar una tabla comparativa que el asesor pueda consultar por categoría. Así no tiene que leer toda la política para encontrar un porcentaje.

## A. Condiciones financieras y del crédito

| Condición | VIS / VIP | NO VIS |
|---|---|---|
| Amortización en UVR | Cuota constante, amortización constante y cuota decreciente mensualmente. | Igual. |
| Amortización en pesos (COP) | Cuota constante y abono constante. | Igual. |
| Plazo | 5 a 20 años. Para más de 15 años: Acierta ≥ 690. Hasta 25 años conforme al numeral 2.1.4.1. | 5 a 20 años. Hasta 25 años conforme al numeral 2.1.4.1. |
| Modalidad | Mes vencido. | Mes vencido. |
| Interés de mora | Tasa máxima legal permitida. | Tasa máxima legal permitida. |

## B. Seguros y garantías

| Condición | VIS / VIP | NO VIS |
|---|---|---|
| Seguros | Vida deudores (incluye ITP y enfermedad grave), incendio y terremoto, AMIT y seguro de desempleo, según tabla. | Igual que VIS / VIP. |
| Otras garantías | Fondo Nacional de Garantías (FNG) y/o garantías previstas. | Fondo Nacional de Garantías (FNG) y/o garantías previstas. |

### Montos

**VIS / VIP**

- Hasta el LTV de un monto máximo de 150 SMMLV o el tope máximo que defina el Gobierno.
- Cuando el monto sea inferior a 10 SMMLV, validar con el área Financiera la viabilidad del desembolso.

**NO VIS**

- Para prestadores de servicios técnicos o tecnólogos, únicamente viviendas entre 135 y 180 SMMLV.
- Cuando el monto sea inferior a 10 SMMLV, validar con el área Financiera la viabilidad del desembolso.

## C. Condiciones del inmueble y del solicitante

| Condición | VIS / VIP | NO VIS |
|---|---|---|
| Estado civil | Sin restricciones. | Casados o en unión libre: únicamente cónyuge y padres como aportantes, todos deben aparecer en escrituras. Solteros, separados y viudos: padres, hermanos e hijos adoptados. |
| Uso del inmueble | Vivienda principal del solicitante. Se permite uso mixto cuando el 80% sea habitacional. | Igual que VIS / VIP. |
| Actividades peligrosas | No se financian inmuebles con actividades peligrosas. | Igual que VIS / VIP. |

## D. Relación cuota-ingreso (RCI)

Este dato debe tener un indicador visual destacado porque establece el porcentaje máximo que puede representar la cuota frente a los ingresos del cliente.

<box border radius="xl" padding={3} gap={3}>
  <title size="lg" color="#315C9C">RCI máximo permitido</title>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="#E5F0FC" radius="lg" padding={3}>
        **VIS**
        <title size="2xl" color="#315C9C">33%</title>
        <caption>Con subsidio de tasa</caption>
        <divider color="subtle"/>
        <title size="2xl" color="#315C9C">40%</title>
        <caption>Sin subsidio de tasa</caption>
      </box>
    </grid-item>
    <grid-item>
      <box background="#F0EAFB" radius="lg" padding={3}>
        **VIP**
        <title size="2xl" color="#7954A7">30%</title>
        <caption>Con o sin subsidio</caption>
        <divider color="subtle"/>
        <title size="2xl" color="#7954A7">35%</title>
        <caption>Premium o Bolsa VIP según condiciones</caption>
      </box>
    </grid-item>
  </grid>
  <box background="#F3F1F8" radius="lg" padding={3}>
    **NO VIS**
    <title size="2xl" color="#7954A7">30%</title>
    <caption>RCI máximo establecido.</caption>
  </box>
</box>

**Importante:** en VIP deben aplicarse las condiciones del numeral 2.1.4.2 para la Bolsa VIP y las políticas Premium del numeral correspondiente. No se debe habilitar automáticamente el 35% para cualquier cliente.

## E. Porcentaje de financiación (LTV)

Esta tabla debe aparecer diferenciada por producto.

| Perfil | VIS / VIP | NO VIS |
|---|---|---|
| Asalariados y pensionados | Hasta 75%; hasta 80% según condiciones del numeral 2.1.4.4. | Hasta 70%, incluido Premium. |
| Independientes | Hasta 60%, con condiciones especiales del numeral 2.1.4.4. | Hasta 60%, con excepciones por tipología. |

**Detalle de NO VIS para independientes:**

- Hasta 70% para prestadores de servicios con Acierta ≥ 690 y vivienda entre 135 y 180 SMMLV.
- Hasta 70% para dueños de transporte.
- Hasta 70% para dueños de negocio de régimen simplificado.
- Para régimen común, hasta 70% con Acierta ≥ 658.
- Hasta 60% para los demás independientes.
- Hasta 70% para dueños de negocio con más de 5 años, excelente experiencia financiera y Acierta ≥ 730.

En VIS/VIP, la página debe enlazar con la matriz completa de recursos propios y LTV del numeral 2.1.4.4 que ya diseñamos.

## F. Puntaje Acierta

| Condición | VIS / VIP | NO VIS |
|---|---:|---:|
| Regla general de asalariados | ≥ 658 | Según perfil |
| Facultad del área de Crédito | Hasta 640 | No especificada en esta tabla |
| Obligado a declarar renta que no presenta declaración (primera vivienda) | ≥ 690 | Según regla general de NO VIS |
| Segunda vivienda | ≥ 730 | Según regla general de NO VIS |
| Prestadores de servicios | Según perfil | ≥ 690 |
| Conductores | Según perfil | ≥ 690 |
| Dueños de negocio | Según perfil | ≥ 658 |
| Transportadores | Según perfil | ≥ 658 |
| Rentistas de capital | Según perfil | ≥ 658 |
| Demás independientes | Según perfil | ≥ 658 |

La palabra *según perfil* debe llevar al asesor a la matriz de Acierta del numeral 1.2, sin reemplazar sus condiciones.

## G. Endeudamiento financiero

| Condición | VIS / VIP | NO VIS |
|---|---:|---:|
| Asalariados y pensionados | ≤ 50% | ≤ 50% |
| Independientes | ≤ 30% | ≤ 50% |

El endeudamiento financiero se mide a nivel individual.

**¿Qué se incluye?**

La suma de cuotas mensuales de:
- Préstamos con entidades financieras.
- Sector asegurador.
- Sector solidario.
- Instrumentos financieros del sector real.

La política establece que el área de Crédito solo podrá realizar disminuciones de monto por perfil cuando este indicador se encuentre a menos de 10 puntos porcentuales del límite definido para el perfil.

## H. Endeudamiento financiero + cuota del préstamo

| Perfil | VIS / VIP | NO VIS |
|---|---:|---:|
| Asalariados y pensionados | ≤ 60% | ≤ 50% |
| Independientes | ≤ 50% | ≤ 50% |

En VIS/VIP se mide de manera consolidada.

## I. Tarjetas de crédito

| Condición | VIS / VIP | NO VIS |
|---|---|---|
| Plazo de diferimiento | 18 meses | 18 meses |
| Ampliación del plazo | Hasta 36 meses | Hasta 36 meses |
| Requisito adicional | Acierta ≥ 690 y utilización ≤ 70%. | Igual que VIS/VIP. |

## J. Edad y cobertura del seguro de vida

Este apartado debe aparecer al final de aceptación, con una tarjeta de condiciones de edad.

- Edad mínima: 20 años.
- Para empleados y personas no pensionadas, edad máxima: 65 años.
- Para pensionados, edad máxima: 75 años.
- La suma de la edad y el plazo no debe superar la cobertura del seguro de vida.
- Para pensionados se acepta edad máxima de 75 años sin restricción de edad más plazo.
- Si hay dos solicitantes y uno es pensionado, el préstamo se evalúa con las condiciones del no pensionado.

**Otras aclaraciones sobre LTV y vivienda propia:**

- Se puede aplicar un LTV inferior si el solicitante es empleado o contratista vinculado al sector petrolero o minero, o si es abogado.
- No se considera vivienda propia cuando el cliente tiene una vivienda familiar heredada o no, con participación igual o inferior al 30%, siempre que no viva en ese inmueble después de adquirir la vivienda financiada.

Fuente: Anexo 6-A, numerales 2.2.2, páginas 14, 15 y 16. <FileCite ref_id="turn15file0" line_range_start={808} line_range_end={924}/>

---

# 2.2.3. Políticas generales de rechazo

<badge color="warning">Validaciones de riesgo</badge>

Esta sección debe tener una presentación diferente: una tabla de semáforo que permita al asesor reconocer rápidamente qué situaciones son rechazadas, cuáles son condicionadas y cuáles se aceptan.

**Título:** Situaciones en centrales de riesgo y condiciones de rechazo.

La política establece que estas situaciones se revisan tanto en aprobación como en carta definitiva, considerando el comportamiento del último año. Al momento de radicar, todas las obligaciones deben estar al día y con paz y salvo.

## A. Semáforo de comportamiento crediticio

| Situación | Tratamiento | Condición |
|---|---|---|
| Mora vigente en cualquier obligación financiera | <badge color="danger">No se acepta</badge> | Debe ponerse al día y presentar paz y salvo antes de radicar. |
| Mora vigente en sector real inferior a $150.000 | <badge color="warning">Condicionado</badge> | Mínimo 2 obligaciones financieras vigentes al día, sin moras adicionales y aprobación de Crédito. |
| Una mora de 30 a 59 días en el último año, ya normalizada | <badge color="success">Se acepta</badge> | No es causal de rechazo por sí sola. |
| Dos o más moras ≥ 30 días en el último año | <badge color="danger">No se acepta</badge> | Rechazo directo. |
| Una o más moras ≥ 60 días en el último año | <badge color="danger">No se acepta</badge> | Rechazo directo, incluye moras ≥ 90 días. |
| Moras de hace más de 12 meses, actualmente al día | <badge color="success">Se acepta</badge> | Fuera de la ventana del último año. |
| Cartera castigada, recuperada o de dudoso recaudo | <badge color="warning">Condicionado</badge> | Saldo en $0 y pago realizado hace más de 12 meses. En NO VIS se permite máximo una. |
| Crédito reestructurado | <badge color="warning">Condicionado</badge> | Calificación A o AA y sin moras en los últimos 12 meses. |
| Cancelación de tarjeta de crédito o cuenta corriente por mal manejo | <badge color="danger">No se acepta</badge> | Si ocurrió durante los últimos 2 años. |
| Cuentas embargadas o bloqueos adversos (no localizado, fallecido) | <badge color="danger">No se acepta</badge> | Rechazo en aprobación y carta definitiva. |
| Calificación interna CC | <badge color="danger">No se acepta</badge> | Excepcionable únicamente por Gerencia de Riesgos. |

## B. Condiciones adicionales para carta definitiva

Debajo de la tabla de rechazo debe aparecer un bloque independiente llamado **Validaciones adicionales para expedición de carta definitiva**.

| Validación | Condición |
|---|---|
| Acierta | ≥ 659. |
| Fraude en centrales | Presentar carta de la entidad donde ocurrió el fraude. Si no hay soporte, esperar la corrección del buró. |
| Cambio de empleo | Mínimo 2 meses en el nuevo empleo, con desprendibles de nómina. |
| Continuidad laboral | Entre empleos no pueden transcurrir más de 2 meses. |
| Nuevo contrato por prestación de servicios | Mínimo 3 meses, Cámara de Comercio de la empresa y extractos de los últimos 3 meses. |
| Paz y salvos | Todos los solicitantes deben presentar sus respectivos paz y salvos. |
| Ingresos adicionales | Si no fueron soportados en la solicitud inicial, se debe realizar reproceso y cumplir la política. |

**Regla particular para prestadores de servicios técnicos o tecnólogos:**

Se consulta con el proveedor de información si el último valor reportado es igual o superior al registrado en aprobación. Si es igual o superior, no se solicitan documentos adicionales.

Fuente: Anexo 6-A, numeral 2.2.3 y página 17. <FileCite ref_id="turn15file0" line_range_start={926} line_range_end={954}/><FileCite ref_id="turn15file0"/>

---

# 3. Cómo organizaría visualmente todo en CF Navega

No pondría todos los cuadros y tablas visibles simultáneamente. Utilizaría tres pestañas principales, cada una con su propio color e identidad.

<box border radius="2xl" padding={3} gap={3}>
  <box background="#075C48" theme="dark" radius="xl" padding={3} gap={2}>
    <title color="#FFFFFF" size="xl">Vivienda nueva VIS / NO VIS</title>
    <text color="#D7EEE5" size="sm">Evaluación de ingresos, condiciones de aceptación y políticas de rechazo.</text>
    <row gap={2}>
      <box background="#FFFFFF20" radius="md" padding={2} flex="1">
        <title color="#FFFFFF" size="xl">2.2.1</title>
        <caption color="#D7EEE5">Ingresos</caption>
      </box>
      <box background="#FFFFFF20" radius="md" padding={2} flex="1">
        <title color="#FFFFFF" size="xl">2.2.2</title>
        <caption color="#D7EEE5">Aceptación</caption>
      </box>
      <box background="#FFFFFF20" radius="md" padding={2} flex="1">
        <title color="#FFFFFF" size="xl">2.2.3</title>
        <caption color="#D7EEE5">Rechazo</caption>
      </box>
    </row>
  </box>
  <grid columns={3} gap={2}>
    <grid-item>
      <box background="#E2F2E9" radius="lg" padding={2} align="center">
        <icon name="calculator" color="#087F5B" size="xl"/>
        <text weight="semibold" color="#087F5B" size="xs">Ingresos</text>
      </box>
    </grid-item>
    <grid-item>
      <box background="#E5EDFA" radius="lg" padding={2} align="center">
        <icon name="shield-check" color="#3975BA" size="xl"/>
        <text weight="semibold" color="#315C9C" size="xs">Aceptación</text>
      </box>
    </grid-item>
    <grid-item>
      <box background="#FCEBDD" radius="lg" padding={2} align="center">
        <icon name="alert-triangle" color="#BD772F" size="xl"/>
        <text weight="semibold" color="#9C6125" size="xs">Rechazo</text>
      </box>
    </grid-item>
  </grid>
  <box border radius="lg" padding={3} gap={2}>
    **Dentro de determinación de ingresos**
    <text color="secondary" size="xs">Seleccionar tipo de cliente para consultar el reconocimiento de ingresos.</text>
    <grid columns={2} gap={2}>
      <grid-item><badge color="success">Asalariado</badge></grid-item>
      <grid-item><badge color="success">Pensionado</badge></grid-item>
      <grid-item><badge color="discovery">Independiente</badge></grid-item>
      <grid-item><badge color="info">Prestador de servicios</badge></grid-item>
    </grid>
    <caption>Mostrar tablas de reconocimiento, soportes y condiciones según el perfil.</caption>
  </box>
  <box border radius="lg" padding={3} gap={2}>
    **Dentro de políticas de aceptación**
    <grid columns={2} gap={2}>
      <grid-item><box background="#E5F0FC" radius="md" padding={2}>
        **VIS / VIP**
        <caption>RCI, LTV, plazo y monto.</caption>
      </box></grid-item>
      <grid-item><box background="#F0EAFB" radius="md" padding={2}>
        **NO VIS**
        <caption>RCI, LTV, plazo y monto.</caption>
      </box></grid-item>
    </grid>
    <caption>Una tabla comparativa por producto con los demás criterios de aceptación.</caption>
  </box>
  <box border radius="lg" padding={3} gap={2}>
    **Dentro de políticas de rechazo**
    <row align="center" gap={2}>
      <badge color="success">Aceptado</badge>
      <badge color="warning">Condicionado</badge>
      <badge color="danger">No aceptado</badge>
    </row>
    <caption>Tabla de centrales de riesgo, condiciones de aceptación y motivos de rechazo.</caption>
  </box>
</box>

# 4. Funciones que agregaría

Para que sea una herramienta de consulta y no un documento digital, incorporaría estas funciones:

**En 2.2.1 – Determinación de ingresos**

- Selector de perfil.
- Buscador de actividad económica.
- Tabla de porcentajes reconocidos.
- Consulta de soportes requeridos.
- Simulador orientativo de ingresos reconocidos, sin sustituir la evaluación de Crédito.

**En 2.2.2 – Aceptación**

- Selector VIS/VIP o NO VIS.
- Comparador de porcentajes.
- Consulta de RCI y LTV.
- Indicadores de plazo y financiación.
- Acordeones de edad, seguros, garantías y endeudamiento.

**En 2.2.3 – Rechazo**

- Filtro por situación crediticia.
- Semáforo de estado.
- Condición para normalizar o presentar paz y salvo.
- Apartado independiente para validaciones de carta definitiva.

---

# 5. Prompt para Lovable

Este es el prompt que utilizaría para agregar los tres numerales manteniendo el estilo colorido que te gustó.

<WritingBlock id="52841" variant="document"># CF NAVEGA – CRÉDITO DE VIVIENDA NUEVA VIS Y NO VIS

Incorporar al módulo de políticas la sección 2.2 del Anexo 6-A, conservando el diseño institucional de CF Navega.

Diseño:
- Verde oscuro para encabezados principales.
- Verde esmeralda para ingresos reconocidos.
- Azul para políticas de aceptación.
- Morado para tipologías y porcentajes.
- Naranja para condiciones y advertencias.
- Rojo únicamente para rechazos.
- Iconos y tarjetas con jerarquía visual clara.
- Tablas comparativas responsivas.
- Acordeones para condiciones extensas.

Crear tres pestañas:

## 2.2.1 DETERMINACIÓN DE INGRESOS

Separar:
1. Asalariados y pensionados.
2. Independientes.
3. Régimen simplificado.
4. Prestadores de servicios.
5. Conductores.
6. Rentistas de capital.
7. Dueños de negocio común.

Incluir todos los porcentajes de reconocimiento de ingresos del Anexo 6-A, sin omitir:
- Honorarios y comisiones: 90%.
- Rendimientos: 80%.
- Dueños de taxi: 70%.
- Dueños de camiones o camionetas: 60%.
- Rentistas: 60%.
- Otros independientes: 50%.
- Dueños de buses y vehículos similares: 45%.

Incluir la tabla completa de márgenes por actividad del régimen simplificado:
80%, 70%, 60%, 50%, 50%, 40% y 10%, según actividad.

Incorporar reglas especiales de prestadores profesionales y técnicos/tecnólogos, conductores, rentistas y dueños de negocio según régimen.

Agregar los límites de descuentos mensuales y la tabla de gastos familiares por rango salarial y número de dependientes.

## 2.2.2 POLÍTICAS GENERALES DE ACEPTACIÓN

Crear un selector VIS/VIP y NO VIS.

Mostrar la matriz comparativa completa con:
- Amortización.
- Plazo.
- Modalidad.
- Interés de mora.
- Seguros.
- Otras garantías.
- Monto.
- Estado civil.
- Uso del inmueble.
- RCI.
- LTV.
- Acierta.
- Endeudamiento financiero.
- Endeudamiento financiero más cuota del préstamo.
- Tarjetas de crédito.

Mantener todos los valores y condiciones del Anexo 6-A.

Incorporar notas desplegables sobre cobertura del seguro de vida, edad mínima, edad máxima, vivienda propia y condiciones especiales de LTV.

No reemplazar la tabla de 2.2.2 por la matriz de 2.1.4.4. Deben conservarse ambas y sus respectivas condiciones.

## 2.2.3 POLÍTICAS GENERALES DE RECHAZO

Crear tabla semaforizada:
- Verde: se acepta.
- Naranja: condicionado.
- Rojo: no se acepta.

Incluir todas las situaciones de centrales:
- Mora financiera vigente.
- Mora en sector real inferior a $150.000.
- Una mora de 30 a 59 días normalizada.
- Dos o más moras de 30 días o más.
- Una o más moras de 60 días o más.
- Moras superiores a 12 meses.
- Cartera castigada, recuperada o de dudoso recaudo.
- Créditos reestructurados.
- Cancelaciones por mal manejo de tarjetas o cuentas.
- Cuentas embargadas y bloqueos adversos.
- Calificación interna CC.

Mostrar las condiciones exactas de cada situación y las autorizaciones correspondientes.

Crear un bloque independiente para validaciones adicionales de carta definitiva:
- Acierta ≥ 659.
- Soporte de fraude.
- Cambios de empleo.
- Nuevos contratos por prestación de servicios.
- Paz y salvos.
- Nuevos ingresos.
- Consulta de proveedores de información para prestadores técnicos y tecnólogos.

## FUNCIONALIDAD

Los filtros de producto y perfil deben actualizar el contenido aplicable.

Los porcentajes deben aparecer destacados y las tablas deben poder consultarse desde dispositivos móviles.

Incorporar búsqueda interna por actividad, criterio, condición o porcentaje.

No crear checklists de documentos en estas secciones: son módulos de políticas y evaluación, no de recepción documental.

No inventar requisitos, no omitir condiciones, no modificar operadores matemáticos y conservar todas las notas del Anexo 6-A.

No modificar los módulos ya existentes de CF Navega.</WritingBlock>

---

**Una última recomendación importante:** en 2.2.2 debemos mantener visibles las diferencias entre VIS/VIP y NO VIS, aunque algunos criterios sean iguales. Y la matriz de 2.1.4.4 debe seguir siendo una consulta complementaria, porque allí están los porcentajes específicos de recursos propios y LTV por rango de Acierta.

Así los asesores podrán consultar primero la regla general y después profundizar en la política especial correspondiente, sin mezclar los dos numerales. 💚
