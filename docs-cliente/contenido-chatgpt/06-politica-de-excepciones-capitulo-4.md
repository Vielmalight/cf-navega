# 06-politica-de-excepciones-capitulo-4

Link de ChatGPT (última respuesta): https://chatgpt.com/share/6aeaac36-e1c8-83e9-aa0a-e92b4cbac009

Fuente: chat de ChatGPT de la clienta. Texto final, no modificar el contenido.

¡Vamos con el capítulo 4! 💚

# 4. Política de excepciones

Esta sección es fundamental para CF Navega, porque debe dejar muy claro **qué situaciones pueden ser excepcionadas, cuáles son los criterios para evaluarlas y quién tiene la facultad de aprobarlas.**

Mantendremos la misma estructura que venimos trabajando:
1. Te explico qué información debe ir en cada apartado.
2. Organizamos el contenido para que no falte nada.
3. Te muestro cómo quedaría visualmente e interactivo en la página.
4. Te dejo el prompt listo para Lovable.

Ya revisé la página 25/26 del documento. Aquí tenemos las condiciones exactas que debemos llevar a CF Navega. No debemos agregar criterios que no estén aprobados en la política.

# 1. Política general de excepciones

<box background="#E8F3EC" radius="xl" padding={3}>
  <row align="center">
    <box background="#C5E9D9" radius="lg" size="48px" align="center" justify="center">
      <icon name="shield-check" size="2xl" color="#087F5B"/>
    </box>
    <box flex="1">
      <title size="xl" color="#075C48">Política de excepciones</title>
      <text color="#39775F" size="sm">Condiciones especiales para la aprobación de créditos</text>
    </box>
  </row>
</box>

## A. Seguimiento obligatorio

Todo crédito aprobado mediante excepción debe contar con:

- Marcación en el sistema.
- Identificación de quién solicita la excepción.
- Justificación clara de las razones de la solicitud.
- Monitoreo detallado y continuo, mínimo mensual.

<box background="#FFF1DE" radius="lg" padding={3}>
  <row align="center" gap={2}>
    <icon name="alert-triangle" color="#B96916" size="xl"/>
    **Regla fundamental**
  </row>
  La excepción solo puede otorgarse sobre **uno** de los conceptos autorizados. No se pueden acumular excepciones sobre varios criterios en una misma aprobación.
</box>

## B. ¿Sobre qué conceptos se permite solicitar una excepción?

Esta parte la recomiendo como tarjetas individuales que se despliegan al hacer clic.

<grid columns={2} gap={2}>
  <grid-item>
    <box background="#E5F0FC" radius="lg" padding={3}>
      <icon name="calendar" color="#3975BA" size="xl"/>
      **Edad**
      <caption>Excepción a la edad establecida.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#E8F3EC" radius="lg" padding={3}>
      <icon name="wallet" color="#087F5B" size="xl"/>
      **Ingresos**
      <caption>Excepción al criterio de ingresos.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#F0EAF8" radius="lg" padding={3}>
      <icon name="briefcase-business" color="#7954A7" size="xl"/>
      **Antigüedad / continuidad**
      <caption>Excepción a la antigüedad laboral.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#FCE9E9" radius="lg" padding={3}>
      <icon name="shield-alert" color="#B83C3C" size="xl"/>
      **Centrales de riesgo**
      <caption>Solo casos de suplantación y fraude.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#E5F0FC" radius="lg" padding={3}>
      <icon name="gauge" color="#3975BA" size="xl"/>
      **Puntaje score**
      <caption>Score de centrales de riesgo.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#E8F3EC" radius="lg" padding={3}>
      <icon name="chart-no-axes-column-increasing" color="#087F5B" size="xl"/>
      **Modelo interno**
      <caption>Calificación del modelo interno.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#FFF1DE" radius="lg" padding={3}>
      <icon name="file-clock" color="#B96916" size="xl"/>
      **Vigencia carta laboral**
      <caption>Máximo 45 días.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#F0EAF8" radius="lg" padding={3}>
      <icon name="calculator" color="#7954A7" size="xl"/>
      **Capacidad de endeudamiento y LTV**
      <caption>Sin exceder límites legales de cuota-ingreso y LTV.</caption>
    </box>
  </grid-item>
</grid>

---

# 2. Excepciones por cambio de empleo y continuidad laboral

Este apartado merece su propio módulo, porque tiene condiciones diferentes dependiendo del tipo de contrato.

<box background="#E5F0FC" radius="xl" padding={3}>
  <row align="center">
    <box background="#C8DFF7" radius="lg" size="48px" align="center" justify="center">
      <icon name="briefcase-business" size="2xl" color="#315C9C"/>
    </box>
    <box flex="1">
      <title size="xl" color="#315C9C">Cambios de empleo</title>
      <text color="#456F9E" size="sm">Validación especial por la Gerencia de Riesgos</text>
    </box>
  </row>
  <text color="#315C9C">Se podrán realizar vistos buenos de radicación y cartas definitivas cuando el cambio de empleo no cumpla con la antigüedad definida, siempre que se demuestre una mejoría considerable tanto en ingresos como en tipo de contrato.</text>
</box>

## A. Selección del tipo de contrato

{@body const [contract,setContract]=DIL.useState("indefinido")}
<box border radius="xl" padding={3} gap={3}>
  <title size="lg">¿Qué tipo de contrato tiene el cliente?</title>
  <radio-group direction="col" value={contract} onChange={setContract}>
    <radio value="indefinido">Término indefinido</radio>
    <radio value="fijo">Término fijo</radio>
    <radio value="temporal">Temporal</radio>
  </radio-group>
  <divider/>
  {#if contract==="indefinido"}
    <box background="#E8F3EC" radius="lg" padding={3}>
      <badge color="success">Condición especial</badge>
      <title size="xl" color="#087F5B">3 meses de antigüedad</title>
      **Requisitos**
      - Continuidad laboral demostrada.
      - Menos de 3 meses entre empleos.
      - Más de 1 año en el empleo anterior.
      - Aplica para todas las ciudades.
    </box>
  {:else}
    <box background="#E5F0FC" radius="lg" padding={3}>
      <badge color="info">Condición especial</badge>
      <title size="xl" color="#315C9C">Mínimo 6 meses</title>
      **Requisitos**
      - Contratos de mínimo 6 meses.
      - Continuidad laboral de mínimo 1 año.
      - No más de 30 días entre empleos.
      - No aplica para proyectos de entrega inmediata ni vivienda usada.
      - En carta definitiva se valida que complete el año de antigüedad en la empresa inicial a la aprobación.
      - Si cambia nuevamente de empleo, no se genera carta definitiva y el crédito queda negado.
      - Aplica para todas las ciudades.
    </box>
  {/if}
</box>

## B. Validación de continuidad laboral

<box border radius="lg" padding={3} gap={2}>
  <row align="center">
    <icon name="check-circle" color="#087F5B" size="xl"/>
    **Continuidades aceptadas**
  </row>
  Deben demostrarse en empleos anteriores a término fijo o indefinido, validando ante Fosyga que el solicitante era empleado formal y cotizaba a la seguridad social.
  <divider/>
  <row align="center">
    <icon name="x-circle" color="#B83C3C" size="xl"/>
    **Continuidades no aceptadas**
  </row>
  No se aceptan continuidades laborales de empleos anteriores como prestadores de servicios cuando no se puede demostrar continuidad mediante el pago de seguridad social.
</box>

## C. Pasantías como experiencia laboral

<box background="#F0EAF8" radius="lg" padding={3}>
  <row align="center" gap={2}>
    <icon name="graduation-cap" color="#7954A7" size="xl"/>
    **¿El cliente realizó una pasantía?**
  </row>
  Las pasantías cuentan como experiencia laboral cuando:
  - Se realizaron en la misma empresa que expide la certificación.
  - Se encuentran soportadas en Fosyga.
</box>

---

# 3. Requisitos y documentos adicionales

Esta sección debe aparecer al final, como una tarjeta de requisitos complementarios.

<grid columns={2} gap={2}>
  <grid-item>
    <box background="#E8F3EC" radius="lg" padding={3}>
      <icon name="users-round" color="#087F5B" size="xl"/>
      <title size="xl" color="#087F5B">2 fuentes</title>
      <caption>Mínimo dos fuentes de ingreso en la familia.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#E5F0FC" radius="lg" padding={3}>
      <icon name="percent" color="#3975BA" size="xl"/>
      <title size="xl" color="#315C9C">Menor al 70%</title>
      <caption>Nivel de endeudamiento (pasivos / activos).</caption>
    </box>
  </grid-item>
</grid>

---

# 4. Así quedaría el módulo interactivo completo

{@body const [exception,setException]=DIL.useState("conceptos")}
{@body const [excType,setExcType]=DIL.useState("indefinido")}
{@body const excItems=[{label:"Edad",value:"edad"},{label:"Ingresos",value:"ingresos"},{label:"Antigüedad / continuidad",value:"continuidad"},{label:"Centrales de riesgo",value:"centrales"},{label:"Puntaje score",value:"score"},{label:"Modelo interno",value:"modelo"},{label:"Vigencia carta laboral",value:"carta"},{label:"Capacidad de endeudamiento y LTV",value:"ltv"}]}
<box border radius="2xl" padding={3} gap={3}>
  <box background="#075C48" theme="dark" radius="xl" padding={3}>
    <row align="center">
      <box background="#FFFFFF20" radius="lg" size="48px" align="center" justify="center">
        <icon name="shield-check" color="#FFFFFF" size="2xl"/>
      </box>
      <box flex="1">
        <title size="xl" color="#FFFFFF">Política de excepciones</title>
        <text color="#D8EEE4" size="sm">Capítulo 4 · Anexo 6-A</text>
      </box>
    </row>
  </box>
  <segmented-control block value={exception} onChange={setException} options={[{label:"4.1 Conceptos",value:"conceptos"},{label:"4.2 Cambio de empleo",value:"empleo"},{label:"4.3 Requisitos",value:"requisitos"}]}/>
  {#if exception==="conceptos"}
    <box gap={3}>
      <title size="lg" color="#087F5B">Conceptos excepcionables</title>
      <box background="#FFF1DE" radius="lg" padding={3}>
        <icon name="alert-triangle" color="#B96916" inline/>
        **Solo se permite una excepción por operación.**
      </box>
      <select block value={excType} onChange={setExcType} options={excItems}/>
      <box background="surface-secondary" radius="lg" padding={3}>
        <title size="lg">{excItems.find(x=>x.value===excType)?.label}</title>
        {excType==="edad"?"Excepción al requisito de edad establecido en la política.":excType==="ingresos"?"Excepción al criterio de ingresos.":excType==="continuidad"?"Excepción al requisito de antigüedad o continuidad laboral.":excType==="centrales"?"Únicamente en casos de suplantación y fraude.":excType==="score"?"Excepción al puntaje score de las centrales de riesgo.":excType==="modelo"?"Excepción a la calificación del modelo interno.":excType==="carta"?"La vigencia de la carta laboral puede tener una excepción hasta un máximo de 45 días.":"Excepción a la capacidad de endeudamiento y LTV, sin superar los límites legales de cuota-ingreso y LTV."}
      </box>
      <box border radius="lg" padding={3}>
        **Seguimiento obligatorio**
        - Marcación en el sistema.
        - Identificación de quién solicita.
        - Justificación de la solicitud.
        - Monitoreo detallado y continuo, mínimo mensual.
      </box>
    </box>
  {:else if exception==="empleo"}
    <box gap={3}>
      <title size="lg" color="#315C9C">Cambios de empleo</title>
      <text color="secondary" size="sm">Selecciona el contrato del cliente.</text>
      <radio-group direction="col" value={excType==="fijo"||excType==="temporal"?excType:"indefinido"} onChange={setExcType}>
        <radio value="indefinido">Término indefinido</radio>
        <radio value="fijo">Término fijo</radio>
        <radio value="temporal">Temporal</radio>
      </radio-group>
      {#if excType==="indefinido"}
        <box background="#E8F3EC" radius="lg" padding={3}>
          <title size="xl" color="#087F5B">3 meses</title>
          - Continuidad laboral demostrada.
          - Menos de 3 meses entre empleos.
          - Más de 1 año en el empleo anterior.
          - Aplica para todas las ciudades.
        </box>
      {:else}
        <box background="#E5F0FC" radius="lg" padding={3}>
          <title size="xl" color="#315C9C">Mínimo 6 meses</title>
          - Contratos de mínimo 6 meses.
          - Continuidad de mínimo 1 año.
          - Máximo 30 días entre empleos.
          - No aplica a proyectos de entrega inmediata ni vivienda usada.
          - En carta definitiva se valida que complete el año de antigüedad en la empresa inicial a la aprobación.
          - Si cambia de empleo, no se genera carta definitiva y queda negado.
          - Aplica para todas las ciudades.
        </box>
      {/if}
      <box border radius="lg" padding={3}>
        **Continuidad laboral**
        - Validar empleos formales anteriores a término fijo o indefinido mediante Fosyga y cotización a seguridad social.
        - No se acepta continuidad de prestadores de servicios que no puedan demostrar cotizaciones.
        <divider/>
        **Pasantías**
        Se aceptan como experiencia cuando se realizaron en la misma empresa de la certificación y están soportadas en Fosyga.
      </box>
    </box>
  {:else}
    <box gap={3}>
      <title size="lg" color="#087F5B">Requisitos complementarios</title>
      <grid columns={2} gap={2}>
        <grid-item>
          <box background="#E8F3EC" radius="lg" padding={3}>
            <title size="2xl" color="#087F5B">≥ 2</title>
            <caption>Mínimo dos fuentes de ingreso familiares.</caption>
          </box>
        </grid-item>
        <grid-item>
          <box background="#E5F0FC" radius="lg" padding={3}>
            <title size="2xl" color="#315C9C">&lt;70%</title>
            <caption>Pasivos / activos.</caption>
          </box>
        </grid-item>
      </grid>
      <box background="#F0EAF8" radius="lg" padding={3}>
        **Visto bueno de Gerencia de Riesgos**
        Se podrá evaluar la excepción en casos de cambio de empleo que no cumplan la antigüedad, demostrando mejoría considerable en ingresos y tipo de contrato.
      </box>
    </box>
  {/if}
  <divider/>
  <caption>Fuente: Anexo 6-A · Página 25 · Uso interno – Credifamilia</caption>
</box>

---

# 5. Prompt listo para Lovable

<WritingBlock id="61942" variant="document">Implementar el capítulo 4. POLÍTICA DE EXCEPCIONES en CF Navega, según el Anexo 6-A, página 25.

Mantener la identidad visual existente: verde institucional oscuro, verde esmeralda, azul informativo, morado para condiciones especiales, naranja para alertas. Usar tarjetas, indicadores, selectores dinámicos, acordeones y navegación por pestañas.

## 4.1 CONCEPTOS EXCEPCIONABLES

Mostrar una alerta destacada:
"Solo se puede otorgar excepción sobre uno de los conceptos autorizados por operación".

Crear selector dinámico de conceptos:
1. Edad.
2. Ingresos.
3. Antigüedad / continuidad.
4. Centrales de riesgo: únicamente suplantación y fraude.
5. Puntaje score de centrales de riesgo.
6. Calificación del modelo interno.
7. Vigencia de carta laboral: máximo 45 días.
8. Capacidad de endeudamiento y LTV, sin superar límites legales de cuota-ingreso y LTV.

Seguimiento obligatorio:
- Marcación en el sistema.
- Identificar claramente quién solicita la excepción.
- Registrar las razones de la solicitud.
- Monitoreo detallado y continuo, mínimo mensual.

## 4.2 CAMBIOS DE EMPLEO

Crear selector por tipo de contrato:

### Término indefinido
- Aceptar 3 meses en el empleo.
- Continuidad laboral demostrada.
- Menos de 3 meses entre empleos.
- Más de 1 año en el empleo anterior.
- Aplica para todas las ciudades.

### Término fijo y temporal
- Mínimo 6 meses en el empleo.
- Continuidad laboral mínima de 1 año.
- Máximo 30 días entre empleos.
- No aplica a proyectos de entrega inmediata ni vivienda usada.
- En la generación de carta definitiva validar que complete el año de antigüedad en la empresa inicial a la aprobación del crédito.
- Si cambia de empleo, no se genera carta definitiva y queda negado.
- Aplica para todas las ciudades.

### Continuidades laborales
- Deben demostrarse en empleos anteriores a término fijo o indefinido.
- Validar ante Fosyga empleo formal y cotización a seguridad social.
- No aceptar continuidad de prestadores de servicios cuando no se pueda demostrar pago de seguridad social.

### Pasantías
- Contarlas como experiencia laboral si se realizaron en la misma empresa que expide la certificación.
- Deben estar soportadas en Fosyga.

Mostrar aviso:
La Gerencia de Riesgos podrá realizar vistos buenos de radicación y cartas definitivas cuando el cambio de empleo no cumpla antigüedad, demostrando mejoría considerable en ingresos y tipo de contrato.

## 4.3 REQUISITOS COMPLEMENTARIOS

Mostrar indicadores:
- Mínimo dos fuentes de ingreso en la familia.
- Nivel de endeudamiento (pasivos / activos) menor al 70%.

## REGLAS

- No inventar requisitos.
- No eliminar condiciones ni excepciones.
- Mantener todos los criterios visibles.
- Agregar enlaces internos al módulo de atribuciones de crédito.
- Crear navegación dinámica sin recargar página.
- Mantener diseño responsivo.
- Incluir fecha de actualización y etiqueta de uso interno.
- No automatizar aprobaciones: el sistema debe ser informativo y de consulta, no reemplazar las facultades de decisión de la Gerencia de Riesgos o las instancias de aprobación.

Fuente: Anexo 6-A, página 25. Uso interno – Credifamilia.</WritingBlock>

**Con esto queda desarrollado el capítulo 4.** 💚 El siguiente paso sería revisar si el documento tiene anexos adicionales o si esta política termina aquí, para después hacer una revisión integral de CF Navega: que no haya información duplicada, contradicciones entre perfiles y etapas, ni reglas desactualizadas.

---

If you want, I can:

- Desarrollar el módulo de excepciones en detalle para CF Navega
- Preparar un resumen ejecutivo con puntos clave de política de excepciones
- Generar preguntas frecuentes para usuarios sobre política de excepciones
