# 05-instancias-de-aprobacion-capitulo-3

Link de ChatGPT (última respuesta): https://chatgpt.com/share/6aeaaafb-5704-83e9-8879-7d90286fae10

Fuente: chat de ChatGPT de la clienta. Texto final, no modificar el contenido.

¡Vamos! 💚 Ahora seguimos con el **Capítulo 3. Instancias de aprobación**, manteniendo la misma estructura dinámica, interactiva y visual de CF Navega.

Este capítulo es muy importante porque la página debe permitir consultar **quién tiene la facultad de aprobar una operación, cuáles son sus atribuciones y cuándo debe escalarse a una instancia superior.**

# 1. 3.1. Atribuciones de crédito

Esta sección debe funcionar como un **organigrama de facultades de aprobación**, donde al seleccionar cada instancia aparezcan sus integrantes, el rango de aprobación y las condiciones correspondientes.

## Encabezado

<box background="#E5F3EC" radius="xl" padding={3}>
  <row align="center">
    <box background="#C5E9D9" radius="lg" size="48px" align="center" justify="center">
      <icon name="git-branch" size="2xl" color="#087F5B"/>
    </box>
    <box flex="1">
      <title size="xl" color="#075C48">Atribuciones de crédito</title>
      <text color="#39775F" size="sm">Instancias facultadas para la aprobación de operaciones crediticias</text>
    </box>
  </row>
</box>

## A. ¿Cómo funciona la aprobación?

<box border radius="xl" padding={3}>
  <row align="center" justify="center">
    <box background="#E5F0FC" radius="lg" padding={3} flex="1" align="center">
      <icon name="user-round-search" color="#3975BA" size="xl"/>
      **Analista de Crédito**
      <caption textAlign="center">Evalúa y recomienda</caption>
    </box>
    <icon name="arrow-right" color="#087F5B" size="xl"/>
    <box background="#E8F3EC" radius="lg" padding={3} flex="1" align="center">
      <icon name="users-round" color="#087F5B" size="xl"/>
      **Instancia colegiada**
      <caption textAlign="center">Analiza y decide</caption>
    </box>
  </row>
  <box background="#F0EAF8" radius="md" padding={2}>
    <text color="#7954A7" weight="medium" textAlign="center">La responsabilidad de administrar el crédito recae en el funcionario que inició la operación y la recomendó a su superior.</text>
  </box>
</box>

### B. Facultades de aprobación por monto

Esta tabla debe ser el elemento central del módulo.

| Monto de la solicitud | Integrantes de la instancia |
|---|---|
| Hasta 110 SMMLV | Coordinador de Crédito + Analistas de Crédito |
| Más de 110 y hasta 300 SMMLV | Vicepresidente de Operaciones + Coordinador de Crédito + Analistas de Crédito |
| Más de 300 y hasta 500 SMMLV | Presidente + Vicepresidente de Operaciones + Coordinador de Crédito + Analistas de Crédito |
| Superior a 500 SMMLV | Junta Directiva |

### C. Visualización recomendada: escala de aprobación

<box border radius="xl" padding={3} gap={3}>
  <row align="center">
    <box background="#DDF3E8" radius="md" padding={2} align="center" width="76px">
      <title color="#087F5B" size="lg">≤ 110</title>
      <caption color="#087F5B">SMMLV</caption>
    </box>
    <box flex="1">
      **Nivel 1 · Coordinación de Crédito**
      <text color="secondary" size="sm">Coordinador de Crédito y Analistas de Crédito</text>
    </box>
    <icon name="chevron-right" color="#087F5B"/>
  </row>
  <divider/>
  <row align="center">
    <box background="#DCEBFA" radius="md" padding={2} align="center" width="76px">
      <title color="#315C9C" size="lg">≤ 300</title>
      <caption color="#315C9C">SMMLV</caption>
    </box>
    <box flex="1">
      **Nivel 2 · Vicepresidencia**
      <text color="secondary" size="sm">Vicepresidente de Operaciones, Coordinador y Analistas</text>
    </box>
    <icon name="chevron-right" color="#315C9C"/>
  </row>
  <divider/>
  <row align="center">
    <box background="#EDE8F7" radius="md" padding={2} align="center" width="76px">
      <title color="#7954A7" size="lg">≤ 500</title>
      <caption color="#7954A7">SMMLV</caption>
    </box>
    <box flex="1">
      **Nivel 3 · Presidencia**
      <text color="secondary" size="sm">Presidente, Vicepresidente, Coordinador y Analistas</text>
    </box>
    <icon name="chevron-right" color="#7954A7"/>
  </row>
  <divider/>
  <row align="center">
    <box background="#FFF1DE" radius="md" padding={2} align="center" width="76px">
      <title color="#B96916" size="lg"> > 500</title>
      <caption color="#B96916">SMMLV</caption>
    </box>
    <box flex="1">
      **Nivel 4 · Junta Directiva**
      <text color="secondary" size="sm">Instancia máxima de aprobación</text>
    </box>
    <icon name="chevron-right" color="#B96916"/>
  </row>
</box>

## D. Aprobaciones especiales de Junta Directiva

<box background="#FFF1DE" radius="xl" padding={3}>
  <row align="center" gap={2}>
    <icon name="shield-alert" color="#B96916" size="xl"/>
    **Aprobación por unanimidad**
  </row>
  La Junta Directiva debe aprobar, con el voto unánime de los miembros asistentes, las operaciones activas de crédito celebradas con:
  - Accionistas titulares del 5% o más del capital suscrito.
  - Administradores de la entidad.
  - Cónyuges de los accionistas o administradores.
  - Parientes dentro del segundo grado de consanguinidad o afinidad, o único civil, de los socios y administradores.
</box>

## E. Información general de la instancia

- Las atribuciones delegadas son personales.
- Se utilizan únicamente de forma colegiada.
- El área de Crédito evalúa al cliente y la operación.
- Se determina el monto, plazo y garantías exigidas.
- Todos los funcionarios deben conocer y cumplir las políticas aprobadas por la Junta Directiva.

---

# 2. 3.2. Comité de Garantías

Esta parte debe tener una interfaz diferente a las atribuciones de crédito: una **ficha de comité con sus integrantes, funciones, criterios de convocatoria y reglas de decisión**.

## Encabezado

<box background="#EDE8F7" radius="xl" padding={3}>
  <row align="center">
    <box background="#D9CBEA" radius="lg" size="48px" align="center" justify="center">
      <icon name="landmark" size="2xl" color="#7954A7"/>
    </box>
    <box flex="1">
      <title size="xl" color="#7954A7">Comité de Garantías</title>
      <text color="#70558F" size="sm">Evaluación de la calidad de las garantías inmobiliarias</text>
    </box>
  </row>
</box>

## A. ¿Cuál es su función?

<box border radius="xl" padding={3}>
  <icon name="clipboard-check" color="#7954A7" size="2xl"/>

  **Evaluar la calidad de la garantía en operaciones de crédito de vivienda usada.**

  El Comité analiza las condiciones del inmueble y determina la viabilidad de la garantía en los casos definidos por la política.
</box>

## B. ¿Cuándo se debe convocar?

<box border radius="xl" padding={3} gap={3}>
  <row align="center">
    <box background="#E5F0FC" radius="lg" size="44px" align="center" justify="center">
      <icon name="banknote" color="#3975BA" size="xl"/>
    </box>
    <box flex="1">
      **1. Monto del préstamo**
      <title size="lg" color="#315C9C">Superior a 350 SMMLV</title>
      <text color="secondary" size="sm">Operaciones de vivienda usada.</text>
    </box>
  </row>
  <divider/>
  <row align="center">
    <box background="#FFF1DE" radius="lg" size="44px" align="center" justify="center">
      <icon name="calendar-clock" color="#B96916" size="xl"/>
    </box>
    <box flex="1">
      **2. Antigüedad del inmueble**
      <title size="lg" color="#B96916">Más de 35 años</title>
      <text color="secondary" size="sm">Evaluación de inmuebles con vetustez superior a 35 años.</text>
    </box>
  </row>
  <divider/>
  <row align="center">
    <box background="#F0EAF8" radius="lg" size="44px" align="center" justify="center">
      <icon name="house" color="#7954A7" size="xl"/>
    </box>
    <box flex="1">
      **3. Excepciones de garantía**
      <title size="lg" color="#7954A7">Estrato y parqueadero</title>
      <text color="secondary" size="sm">Excepciones contempladas en el numeral 2.4.4.</text>
    </box>
  </row>
</box>

## C. ¿Quiénes conforman el Comité?

| Integrante | Participación |
|---|---|
| Coordinación de Crédito | Secretario del Comité |
| Vicepresidencia de Operaciones | Miembro; en su ausencia, el Presidente de la compañía |
| Dirección Jurídica | Miembro o quien haga sus veces |
| Gerencia de Riesgos | Miembro; en su ausencia, Coordinación de Riesgos Financieros |

## D. Reglas de funcionamiento

<grid columns={2} gap={2}>
  <grid-item>
    <box background="#E8F3EC" radius="lg" padding={3}>
      <icon name="users" color="#087F5B" size="xl"/>
      <title size="xl" color="#087F5B">3 miembros</title>
      <caption>Quórum mínimo de representantes de área para sesionar.</caption>
    </box>
  </grid-item>
  <grid-item>
    <box background="#E5F0FC" radius="lg" padding={3}>
      <icon name="vote" color="#3975BA" size="xl"/>
      <title size="xl" color="#315C9C">Mayoría simple</title>
      <caption>Regla para la toma de decisiones.</caption>
    </box>
  </grid-item>
</grid>

<box border radius="lg" padding={3}>
  <row align="center">
    <icon name="calendar-days" color="#7954A7" size="lg"/>
    **Periodicidad**
  </row>
  El Comité no cuenta con una periodicidad definida. El área de Crédito lo convoca cuando se presentan situaciones que ameritan su sesión.
</box>

---

# 3. Así se vería en CF Navega: dinámico e interactivo

{@body const [approval,setApproval]=DIL.useState("110")}
{@body const [committee,setCommittee]=DIL.useState("monto")}
{@body const approvalData={"110":{range:"Hasta 110 SMMLV",members:"Coordinador de Crédito y Analistas de Crédito",color:"#087F5B"},"300":{range:"Más de 110 y hasta 300 SMMLV",members:"Vicepresidente de Operaciones, Coordinador de Crédito y Analistas de Crédito",color:"#315C9C"},"500":{range:"Más de 300 y hasta 500 SMMLV",members:"Presidente, Vicepresidente de Operaciones, Coordinador de Crédito y Analistas de Crédito",color:"#7954A7"},"board":{range:"Superior a 500 SMMLV",members:"Junta Directiva",color:"#B96916"}}}
<box border radius="2xl" padding={3} gap={3}>
  <box background="#075C48" theme="dark" radius="xl" padding={3}>
    <row align="center">
      <box background="#FFFFFF20" radius="lg" size="48px" align="center" justify="center">
        <icon name="scale" color="#FFFFFF" size="2xl"/>
      </box>
      <box flex="1">
        <title color="#FFFFFF" size="xl">Instancias de aprobación</title>
        <text color="#D8EEE4" size="sm">Capítulo 3 · Anexo 6-A</text>
      </box>
    </row>
  </box>
  <segmented-control block value={committee} onChange={setCommittee} options={[{label:"3.1 Atribuciones de crédito",value:"monto"},{label:"3.2 Comité de Garantías",value:"garantias"}]}/>
  {#if committee==="monto"}
    <box gap={3}>
      <title color="#087F5B" size="lg">3.1. Atribuciones de crédito</title>
      <text color="secondary" size="sm">Selecciona el rango de la operación para conocer quiénes conforman la instancia de aprobación.</text>
      <radio-group direction="col" value={approval} onChange={setApproval}>
        <radio value="110">Hasta 110 SMMLV</radio>
        <radio value="300">Más de 110 y hasta 300 SMMLV</radio>
        <radio value="500">Más de 300 y hasta 500 SMMLV</radio>
        <radio value="board">Superior a 500 SMMLV</radio>
      </radio-group>
      <box background="#E8F3EC" radius="xl" padding={3} gap={2}>
        <badge color="success">Instancia facultada</badge>
        <title size="xl" color={approvalData[approval].color}>{approvalData[approval].range}</title>
        <divider/>
        <row align="center">
          <icon name="users-round" color={approvalData[approval].color} size="xl"/>
          **Integrantes**
        </row>
        {approvalData[approval].members}
      </box>
      <box background="#E5F0FC" radius="lg" padding={3}>
        <icon name="info" color="#3975BA" inline/>
        **Regla general:** Las atribuciones son personales, pero se ejercen exclusivamente de forma colegiada.
      </box>
      <box background="#FFF1DE" radius="lg" padding={3}>
        <icon name="shield-alert" color="#B96916" inline/>
        **Aprobación especial de Junta Directiva**

        Operaciones con accionistas titulares del 5% o más del capital suscrito, administradores, cónyuges y parientes hasta segundo grado de consanguinidad o afinidad, o único civil.

        Se requiere voto unánime de los miembros asistentes.
      </box>
    </box>
  {:else}
    <box gap={3}>
      <title color="#7954A7" size="lg">3.2. Comité de Garantías</title>
      <text color="secondary" size="sm">Selecciona una categoría para consultar las condiciones de convocatoria.</text>
      <radio-group direction="col" value={committee==="garantias"?committee==="garantias"?"monto":"monto":"monto"} onChange={()=>{}} disabled>
        <radio value="monto">Evaluación de garantías</radio>
      </radio-group>
      <segmented-control block value={committee==="garantias"? "garantias": "monto"} onChange={setCommittee} options={[{label:"Función y convocatoria",value:"garantias"},{label:"Atribuciones",value:"monto"}]}/>
      <box background="#EDE8F7" radius="lg" padding={3}>
        **Función**
        Evaluar la calidad de la garantía en créditos de vivienda usada.
      </box>
      <title size="md">Criterios de convocatoria</title>
      <box border radius="lg" padding={3} gap={2}>
        <row align="center">
          <icon name="banknote" color="#3975BA" size="xl"/>
          **Préstamos superiores a 350 SMMLV**
        </row>
        <divider/>
        <row align="center">
          <icon name="calendar-clock" color="#B96916" size="xl"/>
          **Inmuebles con vetustez superior a 35 años**
        </row>
        <divider/>
        <row align="center">
          <icon name="house" color="#7954A7" size="xl"/>
          **Excepciones de estrato y parqueadero del numeral 2.4.4**
        </row>
      </box>
      <title size="md">Integrantes del Comité</title>
      <box background="#E8F3EC" radius="lg" padding={3} gap={2}>
        - **Coordinación de Crédito:** secretario.
        - **Vicepresidencia de Operaciones:** o Presidente en su ausencia.
        - **Dirección Jurídica:** o quien haga sus veces.
        - **Gerencia de Riesgos:** o Coordinación de Riesgos Financieros en su ausencia.
      </box>
      <grid columns={2} gap={2}>
        <grid-item>
          <box background="#E5F0FC" radius="lg" padding={3}>
            <title size="xl" color="#315C9C">3</title>
            <caption>Representantes mínimo para sesionar</caption>
          </box>
        </grid-item>
        <grid-item>
          <box background="#EDE8F7" radius="lg" padding={3}>
            <title size="xl" color="#7954A7">Mayoría simple</title>
            <caption>Regla de decisión</caption>
          </box>
        </grid-item>
      </grid>
      <box background="#FFF1DE" radius="lg" padding={3}>
        <icon name="calendar-days" color="#B96916" inline/>
        **Periodicidad:** no definida. El área de Crédito convoca cuando se requiere.
      </box>
    </box>
  {/if}
  <divider/>
  <caption>Fuente: Anexo 6-A · Página 24 · Uso interno – Credifamilia</caption>
</box>

---

# 4. Prompt listo para Lovable

<WritingBlock id="81529" variant="document">Implementar el capítulo 3. INSTANCIAS DE APROBACIÓN en CF Navega, correspondiente a los numerales 3.1 Atribuciones de crédito y 3.2 Comité de Garantías del Anexo 6-A.

Mantener la misma identidad visual institucional y la estructura de los módulos anteriores: verde oscuro, verde esmeralda, azul informativo, morado para condiciones especiales y naranja para alertas. Utilizar tarjetas, iconos, indicadores, acordeones, selectores y animaciones sutiles.

## 3.1 ATRIBUCIONES DE CRÉDITO

Crear una escala interactiva de cuatro niveles. Al seleccionar un nivel, mostrar automáticamente el rango de monto y los integrantes de la instancia.

Nivel 1:
- Solicitudes hasta 110 SMMLV.
- Coordinador de Crédito.
- Analistas de Crédito.

Nivel 2:
- Solicitudes entre 110 y 300 SMMLV.
- Vicepresidente de Operaciones.
- Coordinador de Crédito.
- Analistas de Crédito.

Nivel 3:
- Solicitudes entre 300 y 500 SMMLV.
- Presidente.
- Vicepresidente de Operaciones.
- Coordinador de Crédito.
- Analistas de Crédito.

Nivel 4:
- Solicitudes superiores a 500 SMMLV.
- Junta Directiva.

Mostrar las reglas generales:
- Las atribuciones delegadas son personales.
- Se utilizan únicamente en forma colegiada.
- La responsabilidad de administrar el crédito es del funcionario que inició la operación recomendándola a su superior.
- El área de Crédito evalúa al cliente y la operación y decide monto, plazo y garantías exigidas.

Crear tarjeta destacada de aprobación especial de Junta Directiva:
- Accionistas titulares del 5% o más del capital suscrito.
- Administradores.
- Cónyuges de accionistas o administradores.
- Parientes dentro del segundo grado de consanguinidad o afinidad, o único civil.
- Requiere voto unánime de los miembros asistentes.

## 3.2 COMITÉ DE GARANTÍAS

Mostrar su función:
Evaluar la calidad de la garantía en créditos de vivienda usada.

Crear tres tarjetas de criterios de convocatoria:

1. Préstamos superiores a 350 SMMLV.
2. Inmuebles con vetustez superior a 35 años.
3. Excepciones de estrato y parqueadero del numeral 2.4.4.

Mostrar composición:
- Coordinación de Crédito: secretario del Comité.
- Vicepresidencia de Operaciones o Presidente en su ausencia.
- Dirección Jurídica o quien haga sus veces.
- Gerencia de Riesgos o Coordinación de Riesgos Financieros en su ausencia.

Reglas de funcionamiento:
- Quórum mínimo: tres representantes de área.
- Decisión: mayoría simple.
- Periodicidad: no definida.
- Convocatoria: realizada por el área de Crédito cuando se presenten situaciones que ameriten sesión.

## FUNCIONALIDAD

- Implementar navegación por pestañas.
- Selección de rango de monto con actualización automática de integrantes.
- Mostrar alertas y reglas especiales.
- Acordeones para ampliar información.
- Adaptar diseño a escritorio y móvil.
- No modificar otros módulos existentes.
- No resumir ni eliminar condiciones de la política.
- No inventar atribuciones, integrantes, quórums ni excepciones.

Fuente: Anexo 6-A, página 24. Fecha de actualización: septiembre de 2026. Uso interno – Credifamilia.</WritingBlock>

**Y algo importante:** el capítulo 3 ya queda conectado conceptualmente con lo que construimos anteriormente. El siguiente es el **capítulo 4. Política de excepciones**, que debe relacionarse directamente con estas instancias de aprobación para que el usuario de CF Navega pueda identificar qué se puede excepcionar, quién lo autoriza y qué condiciones deben cumplirse. 💚

---

If you want, I can:

- Continuar con el desarrollo del capítulo 4 Política de excepciones vinculando con instancias de aprobación
- Elaborar ejemplo interactivo de selección y visualización de niveles de aprobación en CF Navega
- Desarrollar sección de casos especiales y aprobación unánime de Junta Directiva con ejemplos
