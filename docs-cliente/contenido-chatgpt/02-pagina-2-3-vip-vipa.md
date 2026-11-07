# 02-pagina-2-3-vip-vipa

Link de ChatGPT (última respuesta): https://chatgpt.com/share/6aeaa54e-4e00-83ea-a5b8-62806e90d032

Fuente: chat de ChatGPT de la clienta. Texto final, no modificar el contenido.

¡Vamos con el numeral **2.3. Crédito de Vivienda VIP y VIPA**! 💚

Este apartado es más corto que el anterior, pero tiene condiciones muy importantes. Hay algo que debemos tener claro desde el principio:

**Los créditos VIP y VIPA utilizan las políticas generales de vivienda nueva VIS y NO VIS, excepto por las condiciones especiales que establece el numeral 2.3.**

Por eso, no vamos a copiar todas las políticas de vivienda nueva. Vamos a crear una sección propia que muestre las diferencias y permita consultar las reglas generales compartidas desde CF Navega.

Fuente: Anexo 6-A, página 17. <FileCite ref_id="turn21file0"/>

# 1. Así se organizaría la página

<box border radius="2xl" padding={3} gap={3}>
  <box background="#075C48" theme="dark" radius="xl" padding={3} gap={2}>
    <row align="center">
      <box background="#FFFFFF20" radius="lg" size="44px" align="center" justify="center">
        <icon name="house" color="#FFFFFF" size="2xl"/>
      </box>
      <box flex="1">
        <title color="#FFFFFF" size="xl">Crédito de vivienda VIP y VIPA</title>
        <caption color="#D7EEE5">Políticas especiales de otorgamiento</caption>
      </box>
      <badge color="success">2.3</badge>
    </row>
    <title color="#FFFFFF" size="2xl">Condiciones de financiación</title>
    <text color="#D7EEE5" size="sm">Consulta plazos, RCI, recursos propios, puntaje Acierta y restricciones especiales.</text>
  </box>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="#E5F0FC" radius="lg" padding={3} align="center">
        <icon name="house" color="#3975BA" size="2xl"/>
        <title color="#315C9C" size="lg">VIP</title>
        <caption>Vivienda de interés prioritario</caption>
      </box>
    </grid-item>
    <grid-item>
      <box background="#F0EAF8" radius="lg" padding={3} align="center">
        <icon name="building-2" color="#7954A7" size="2xl"/>
        <title color="#7954A7" size="lg">VIPA</title>
        <caption>Vivienda de interés prioritario para ahorradores</caption>
      </box>
    </grid-item>
  </grid>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="surface-secondary" radius="lg" padding={3}>
        <caption>PLAZO GENERAL</caption>
        <title size="2xl" color="#087F5B">20 años</title>
        <caption>Excepto condiciones del numeral 2.1.4.1.</caption>
      </box>
    </grid-item>
    <grid-item>
      <box background="surface-secondary" radius="lg" padding={3}>
        <caption>RECURSOS PROPIOS</caption>
        <title size="2xl" color="#087F5B">5% – 8%</title>
        <caption>Según rango de Acierta.</caption>
      </box>
    </grid-item>
  </grid>
</box>

La página tendrá cinco apartados de consulta y un bloque de reglas generales compartidas.

---

# 2. Información que debe aparecer en cada apartado

## 2.3.1. Plazo y relación cuota-ingreso (RCI)

<box border radius="xl" padding={3} gap={3}>
  <row align="center">
    <icon name="calendar-clock" color="#3975BA" size="2xl"/>
    **Plazo máximo de financiación**
  </row>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="#E5F0FC" radius="lg" padding={3}>
        <caption color="#315C9C">PLAZO GENERAL</caption>
        <title color="#315C9C" size="2xl">20 años</title>
        <caption>Amortización en pesos o UVR.</caption>
      </box>
    </grid-item>
    <grid-item>
      <box background="#E8F3EC" radius="lg" padding={3}>
        <caption color="#087F5B">PLAZO ESPECIAL</caption>
        <title color="#087F5B" size="2xl">Hasta 25</title>
        <caption>Años, sujeto al numeral 2.1.4.1.</caption>
      </box>
    </grid-item>
  </grid>
  <divider color="subtle"/>
  **Condiciones de RCI**
  <box background="#EEE8F8" radius="lg" padding={3}>
    <caption color="#7954A7">RCI MÁXIMO ESPECIAL</caption>
    <title size="2xl" color="#7954A7">35%</title>
    <text color="#68458F" size="sm">Siempre que no cuente con subsidios y cumpla las políticas de clientes Premium, salvo lo dispuesto en el numeral 2.1.4.2.</text>
  </box>
</box>

### ¿Qué información debe desplegarse?

**Plazo:**
- Plazo máximo general: 20 años.
- Modalidad de amortización: pesos o UVR.
- Excepción referenciada: numeral 2.1.4.1.

**RCI:**
- Puede llegar hasta 35%.
- No debe contar con subsidio.
- Debe cumplir las políticas estipuladas para clientes Premium.
- Debe revisarse la excepción establecida en el numeral 2.1.4.2.

**Importante:** el numeral 2.3 remite expresamente a los numerales 2.1.4.1 y 2.1.4.2. En VIPA también aparece la prohibición de excepciones. Dejaría esta interacción señalada para validación de Riesgos antes de automatizar plazos o RCI especiales para VIPA.

## 2.3.2. Recursos propios mínimos

<badge color="success">Porcentaje de aporte del cliente</badge>

Esta sección debe tener una tabla destacada, porque los porcentajes cambian según el puntaje de Acierta.

<box border radius="xl" padding={3} gap={3}>
  <title size="lg" color="#087F5B">Recursos propios mínimos</title>
  <table>
    <table-row>
      <table-cell>
        **Puntaje Acierta**
      </table-cell>
      <table-cell align="end">
        **Aporte mínimo**
      </table-cell>
    </table-row>
    <table-row>
      <table-cell>658 a 729</table-cell>
      <table-cell align="end"><title color="#3975BA" size="xl">8%</title></table-cell>
    </table-row>
    <table-row>
      <table-cell>730 o superior</table-cell>
      <table-cell align="end"><title color="#087F5B" size="xl">5%</title></table-cell>
    </table-row>
  </table>
  <caption>Porcentajes mínimos establecidos en el numeral 2.3, con referencia al numeral 2.1.4.4.</caption>
</box>

### Aclaración que debe aparecer debajo

Los recursos propios representan el aporte mínimo que debe realizar el cliente para la adquisición de la vivienda.

Los porcentajes deben verificarse de acuerdo con la tabla completa del numeral 2.1.4.4 y las condiciones aplicables al perfil.

No se debe interpretar el 5% como el porcentaje universal de recursos propios para todos los clientes.

## 2.3.3. Demostración de recursos propios

<badge color="info">Validación al momento de la solicitud</badge>

Este es un requisito independiente del porcentaje mínimo de recursos propios. Debe tener una sección propia.

**Título:** Soportes para demostrar recursos propios.

La política establece que al momento de solicitar el crédito, el cliente debe demostrar como mínimo el 5% del valor de la vivienda mediante alguno de estos soportes:

<box border radius="xl" padding={3} gap={3}>
  <title size="lg" color="#315C9C">¿Cómo puede demostrar el 5%?</title>
  <box background="#E5F0FC" radius="lg" padding={3} gap={2}>
    <row align="center">
      <icon name="piggy-bank" color="#3975BA" size="xl"/>
      **Extracto de cesantías**
    </row>
    <text size="sm">Extracto que permita verificar los recursos disponibles en cesantías.</text>
  </box>
  <box background="#E8F3EC" radius="lg" padding={3} gap={2}>
    <row align="center">
      <icon name="wallet" color="#087F5B" size="xl"/>
      **Extracto de cuenta inmovilizada**
    </row>
    <text size="sm">Extracto que evidencie los recursos mantenidos en una cuenta inmovilizada.</text>
  </box>
  <box background="#F0EAF8" radius="lg" padding={3} gap={2}>
    <row align="center">
      <icon name="receipt" color="#7954A7" size="xl"/>
      **Extracto de pago a la constructora**
    </row>
    <text size="sm">Soporte que permita demostrar los pagos efectuados a la constructora.</text>
  </box>
  <box background="surface-secondary" radius="lg" padding={3}>
    **Momento de validación**

    Al momento de la solicitud del crédito.
  </box>
</box>

Aquí pondría un indicador visual de «5% demostrado», pero sin permitir que el asesor marque como demostrado un porcentaje que no esté respaldado por los soportes.

## 2.3.4. Calificación BB del modelo interno

<badge color="warning">Condición especial</badge>

Este numeral merece una tarjeta independiente para que no se confunda con el puntaje de Acierta.

**Título:** Experiencia financiera para calificación BB.

La política establece:

Cuando el modelo de otorgamiento interno arroje una calificación BB, el cliente debe contar con experiencia financiera, vigente o no, diferente de cuentas de ahorro o cuentas corrientes.

Además, se deben respetar las restricciones del numeral 1.4.

### Así debe aparecer:

| Condición | Requisito |
|---|---|
| Calificación del modelo | BB |
| Experiencia financiera | Debe demostrar experiencia financiera. |
| Estado de la experiencia | Puede estar vigente o no vigente. |
| Productos que no cuentan por sí solos | Cuentas de ahorro y cuentas corrientes. |
| Restricciones adicionales | Aplican las del numeral 1.4. |

**Nota para Lovable:** no asignar una calificación BB automáticamente ni presentar esta condición como un requisito general para todos. Solamente debe mostrarse cuando el resultado del modelo sea BB.

## 2.3.5. Puntaje Acierta

<badge color="discovery">Condición definida por Riesgos</badge>

Esta sección debe mostrar que el puntaje requerido depende de dos variables:

- Perfil del cliente: asalariado o independiente.
- Ciudad donde se encuentra el proyecto.

**Información de la política:**

Los puntos de corte de Acierta serán definidos por el área de Riesgo.

<box border radius="xl" padding={3} gap={2}>
  <title size="lg" color="#7954A7">Determinación del puntaje</title>
  <grid columns={2} gap={2}>
    <grid-item>
      <box background="#F0EAF8" radius="lg" padding={3}>
        <icon name="users" color="#7954A7" size="xl"/>
        **Perfil**
        <caption>Asalariado o independiente.</caption>
      </box>
    </grid-item>
    <grid-item>
      <box background="#E5F0FC" radius="lg" padding={3}>
        <icon name="map-pin" color="#3975BA" size="xl"/>
        **Ciudad**
        <caption>Ubicación del proyecto.</caption>
      </box>
    </grid-item>
  </grid>
  <box background="surface-secondary" radius="lg" padding={3}>
    **Resultado**

    El puntaje mínimo aplicable será el definido por el área de Riesgo para el perfil y la ciudad correspondientes.
  </box>
</box>

No colocaría un único puntaje mínimo para todos los créditos VIP y VIPA porque el Anexo no establece una cifra universal para este numeral.

Si la página llega a conectarse con una matriz institucional de cortes de Riesgo, podremos hacer que el asesor seleccione perfil y ciudad y consulte el puntaje correspondiente. Mientras tanto, mostraremos que el corte es definido por Riesgos, sin inventarlo.

## 2.3.6. Restricción de excepciones en VIPA

<badge color="danger">Restricción expresa</badge>

Esta debe ser una alerta muy visible en el módulo.

<box background="#FCE9E9" radius="xl" padding={3} gap={2}>
  <row align="center" gap={2}>
    <icon name="shield-alert" color="#BE4545" size="2xl"/>
    <title color="#A53636" size="lg">VIPA · Sin excepciones</title>
  </row>
  **La política establece que para los créditos VIPA no se admiten excepciones.**

  Esta condición debe mostrarse en el proceso de consulta del producto VIPA y no debe poder desactivarse desde la vista del asesor.
</box>

Esta regla debe quedar disponible en todas las consultas del producto VIPA: plazos, recursos propios, Acierta y condiciones de otorgamiento.

Fuente de estos seis apartados: Anexo 6-A, numeral 2.3, página 17. <FileCite ref_id="turn21file0"/>

---

# 3. Reglas generales que también aplican a VIP y VIPA

Este apartado es muy importante y no debe quedar por fuera.

El Anexo 6-A establece que las políticas generales de vivienda nueva también aplican a los créditos VIP y VIPA, salvo las modificaciones del numeral 2.3.

Por eso, pondría una sección llamada:

**Políticas generales compartidas**

| Apartado | Información que debe consultar el asesor |
|---|---|
| Determinación de ingresos | Numeral 2.2.1: reconocimiento de ingresos, porcentajes y soportes. |
| Políticas de aceptación | Numeral 2.2.2: amortización, RCI, LTV, Acierta, endeudamiento, seguros y garantías. |
| Políticas de rechazo | Numeral 2.2.3: comportamiento en centrales, moras, cartera castigada y restricciones. |
| Plazo especial | Numeral 2.1.4.1: condiciones para financiación hasta 25 años. |
| Bolsa VIP | Numeral 2.1.4.2: condiciones especiales de RCI y utilización del cupo. |
| Recursos propios y LTV | Numeral 2.1.4.4: porcentajes y soportes de recursos propios. |

En CF Navega estos apartados deben tener enlaces internos a las secciones que ya construimos. Al hacer clic, el asesor debe poder consultar la política completa sin abrir el PDF.

# 4. Así se verá la sección completa con interacción

Este es el modelo visual que utilizaría para construir el numeral 2.3:

{@body const [product,setProduct]=DIL.useState("vip")}
{@body const [open,setOpen]=DIL.useState("plazo")}
{@body const entries=[{id:"plazo",name:"Plazo y RCI",icon:"calendar-clock",desc:"Condiciones del plazo máximo y relación cuota-ingreso."},{id:"recursos",name:"Recursos propios",icon:"wallet",desc:"Aporte mínimo según Acierta."},{id:"soportes",name:"Demostración del aporte",icon:"file-check",desc:"Soportes admitidos al solicitar el crédito."},{id:"bb",name:"Calificación BB",icon:"chart-no-axes-combined",desc:"Experiencia financiera exigida por el modelo."},{id:"acierta",name:"Puntaje Acierta",icon:"gauge",desc:"Puntos de corte definidos por Riesgos."},{id:"excepciones",name:"Restricciones VIPA",icon:"shield-alert",desc:"Condición de no admisión de excepciones."}]}
<box border radius="2xl" padding={3} gap={3}>
  <box background="#075C48" theme="dark" radius="xl" padding={3}>
    <row align="center">
      <icon name="house" color="#FFFFFF" size="2xl"/>
      <box flex="1">
        <title color="#FFFFFF" size="xl">Crédito VIP y VIPA</title>
        <caption color="#D8EEE4">Políticas específicas · Numeral 2.3</caption>
      </box>
    </row>
  </box>
  **Selecciona el producto**
  <segmented-control block value={product} onChange={v=>{setProduct(v);setOpen(v==="vipa"?"excepciones":"plazo")}} options={[{label:"Vivienda VIP",value:"vip"},{label:"Vivienda VIPA",value:"vipa"}]}/>
  {#if product==="vip"}
    <box background="#E5F0FC" radius="lg" padding={3} gap={1}>
      <badge color="info">Producto VIP</badge>
      <title color="#315C9C" size="2xl">20 años</title>
      <text color="#315C9C" size="sm">Plazo general en pesos o UVR, sujeto a la remisión al numeral 2.1.4.1.</text>
    </box>
  {:else}
    <box background="#F0EAF8" radius="lg" padding={3} gap={1}>
      <badge color="discovery">Producto VIPA</badge>
      <title color="#7954A7" size="2xl">Sin excepciones</title>
      <text color="#68458F" size="sm">Se aplican las condiciones generales y las restricciones específicas del producto.</text>
    </box>
  {/if}
  **Consulta las condiciones**
  {#each entries as e}
    <box border radius="lg" padding={3} gap={2}>
      <pressable onClick={()=>setOpen(open===e.id?"":e.id)}>
        <row align="center" gap={2}>
          <icon name={e.icon} color={e.id==="excepciones"?"danger":"success"} size="xl"/>
          <box flex="1" gap={0}>
            **{e.name}**
            <caption>{e.desc}</caption>
          </box>
          <icon name={open===e.id?"chevron-up":"chevron-down"} color="secondary"/>
        </row>
      </pressable>
      {#if open===e.id}
        <divider color="subtle"/>
        {#if e.id==="plazo"}
          **Plazo máximo general: 20 años.**

          La política establece excepción según numeral 2.1.4.1.
          **RCI:** hasta 35% sin subsidio, cumpliendo las políticas Premium, salvo numeral 2.1.4.2.
          {#if product==="vipa"}
            <text color="danger" weight="medium" size="sm">La aplicación de excepciones al plazo y RCI debe validarse frente a la prohibición de excepciones para VIPA.</text>
          {/if}
        {:else if e.id==="recursos"}
          | Acierta | Recursos propios mínimos |
          |---|---:|
          | 658–729 | **8%** |
          | ≥ 730 | **5%** |
          <caption>Conforme al numeral 2.1.4.4 y sus condiciones.</caption>
        {:else if e.id==="soportes"}
          Debe demostrarse mínimo 5% del valor de la vivienda al solicitar el crédito, mediante:
          - Extracto de cesantías.
          - Extracto de cuenta inmovilizada.
          - Extracto de pago a la constructora.
        {:else if e.id==="bb"}
          Cuando el modelo interno arroje BB:
          - Experiencia financiera vigente o no.
          - Diferente de cuentas de ahorro o corrientes.
          - Sujeto a restricciones del numeral 1.4.
        {:else if e.id==="acierta"}
          El punto de corte depende de:
          - Perfil: asalariado o independiente.
          - Ciudad.
          - Parámetros establecidos por el área de Riesgo.

          No existe un único corte numérico en el numeral 2.3.
        {:else}
          <box background="#FBE9E9" radius="md" padding={2}>
            **Para créditos VIPA no se admiten excepciones.**
          </box>
        {/if}
      {/if}
    </box>
  {/each}
  <box background="surface-secondary" radius="lg" padding={3} gap={1}>
    <row align="center" gap={2}>
      <icon name="link" color="success"/>
      **Políticas generales compartidas**
    </row>
    <text size="sm">Los créditos VIP y VIPA también se rigen por las políticas generales de vivienda nueva de los numerales 2.2.1, 2.2.2 y 2.2.3, salvo las diferencias establecidas en el numeral 2.3.</text>
  </box>
</box>

# 5. Qué debe programarse en Lovable

Te dejo el contenido listo para implementación, manteniendo el diseño colorido que hemos venido definiendo.

<WritingBlock id="58362" variant="document"># CF NAVEGA – CRÉDITO DE VIVIENDA VIP Y VIPA
## Numeral 2.3 del Anexo 6-A

Crear una sección nueva llamada:

CRÉDITO DE VIVIENDA VIP Y VIPA.

Conservar el diseño institucional de CF Navega, utilizando verde oscuro, azul, morado y naranja, iconos, tarjetas, indicadores y secciones desplegables.

### 1. ENCABEZADO

Título: Crédito de vivienda VIP y VIPA.
Subtítulo: Condiciones específicas de financiación y políticas de otorgamiento.

Mostrar dos identificadores:
- Vivienda VIP.
- Vivienda VIPA.

### 2. PLAZO Y RCI

Mostrar:
- Plazo máximo general de 20 años en amortizaciones en pesos o UVR.
- Excepción referenciada al numeral 2.1.4.1.
- RCI de hasta 35% siempre que no cuente con subsidios y cumpla las políticas de clientes Premium, salvo lo mencionado en el numeral 2.1.4.2.

Incluir enlace interno a:
- Política 2.1.4.1: plazo de financiación hasta 25 años.
- Política 2.1.4.2: Bolsa VIP y condiciones de RCI.

Importante: señalar para validación interna la interacción entre las excepciones referenciadas y la regla de no admitir excepciones en VIPA.

### 3. RECURSOS PROPIOS

Crear una tabla destacada:

- Acierta entre 658 y 729: mínimo 8%.
- Acierta igual o superior a 730: mínimo 5%.

Referencia: numeral 2.1.4.4.

No presentar estos porcentajes aislados de las condiciones de esa matriz complementaria.

### 4. DEMOSTRACIÓN DE RECURSOS PROPIOS

Crear un bloque denominado:

¿Cómo demostrar los recursos propios?

La política exige demostrar como mínimo el 5% del valor de la vivienda al momento de solicitar el crédito.

Soportes admitidos:
- Extracto de cesantías.
- Extracto de cuenta inmovilizada.
- Extracto de pago a la constructora.

Mantener este requisito separado del porcentaje total de recursos propios.

### 5. CALIFICACIÓN BB DEL MODELO INTERNO

Crear una tarjeta de condición especial.

Cuando el modelo interno arroje calificación BB:
- El cliente debe tener experiencia financiera vigente o no vigente.
- Debe ser diferente de cuentas de ahorro o corrientes.
- Aplican las restricciones del numeral 1.4.

Mostrar solamente cuando se consulte esta calificación, no como requisito general para todos los solicitantes.

### 6. PUNTAJE ACIERTA

Crear una sección que explique:

El puntaje depende del perfil del cliente (asalariado o independiente) y de la ciudad.

Los puntos de corte son definidos por el área de Riesgo.

No inventar un puntaje universal ni asignar cortes automáticos sin integración con los parámetros institucionales.

### 7. RESTRICCIONES VIPA

Crear una alerta visual destacada:

"Para créditos VIPA no se admiten excepciones".

Debe permanecer visible cuando se selecciona VIPA.

### 8. POLÍTICAS GENERALES COMPARTIDAS

Incluir accesos internos a:
- 2.2.1 Determinación de ingresos.
- 2.2.2 Políticas generales de aceptación.
- 2.2.3 Políticas generales de rechazo.

Indicar que VIP y VIPA se rigen por las mismas políticas generales de vivienda nueva, excepto por las condiciones especiales del numeral 2.3.

### 9. FUNCIONALIDAD

Permitir seleccionar VIP o VIPA.

La información debe actualizarse según el producto seleccionado.

Cada apartado debe poder abrirse y cerrarse.

Conservar notas, porcentajes, restricciones y referencias cruzadas.

Diseño responsivo para computador y celular.

No inventar condiciones, documentos, plazos ni puntajes.

No modificar otros módulos de CF Navega.

Fuente: Anexo 6-A, numeral 2.3, página 17.</WritingBlock>

---

## 6. Dos verificaciones antes de publicar

Hay dos puntos que no debemos resolver por interpretación:

| Tema | Qué debemos verificar |
|---|---|
| Excepciones de plazo y RCI | El numeral 2.3 remite a 2.1.4.1 y 2.1.4.2, pero también indica que VIPA no admite excepciones. Riesgos debe confirmar el alcance exacto de esas remisiones para VIPA. |
| Recursos propios | Los mínimos de 8% y 5% deben contrastarse con la matriz completa de 2.1.4.4, sin asumir que todos los perfiles tienen idénticas condiciones. |

**Mi recomendación:** este módulo debe ser más visual y corto que el de vivienda nueva, porque el numeral 2.3 tiene seis reglas particulares. Su verdadero valor está en que el asesor pueda identificar rápidamente qué cambia entre VIP y VIPA y consultar las políticas generales que se heredan de vivienda nueva.

Así mantenemos toda la información del Anexo 6-A sin repetir páginas enteras ni crear requisitos que no están establecidos. 💚
