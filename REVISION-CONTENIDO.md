# Revisión de contenido

Pendientes detectados durante la reorganización del sitio (fases a y b de `arreglo.txt`). No se modificó ningún texto normativo: estas dudas quedan para validación con la clienta, Crédito, Jurídica u Operaciones.

## 1. Vigencias en conflicto

| Documento / perfil | Valores encontrados | Tratamiento actual en el sitio |
| --- | --- | --- |
| Cámara de Comercio, dueño de negocio régimen común | 60 días vs 30 días | Se muestra el valor más estricto con la nota "Vigencia por confirmar con Crédito". |
| Certificado de tradición y libertad (CTL), rentista | 60 días vs 30 días | Se muestra el valor más estricto con la nota "Vigencia por confirmar con Crédito". |
| CTL en reproceso | 45 días vs 30 días | Se muestra el valor más estricto con la nota "Vigencia por confirmar con Crédito". |

Acción: confirmar con Crédito la vigencia definitiva de cada caso y actualizar `docs-data.js`.

## 2. Checklist de legalización incompleto

- **Acabados VIS** y **Adquisición de vivienda nueva/usada**: el Anexo 6-A no trae una lista cerrada e independiente. El sitio muestra "Checklist pendiente de confirmación con Jurídica/Operaciones" y no inventa documentos.
- Acción: recibir la lista aprobada por Operaciones/Jurídica y cargarla en `docs-data.js`.

## 3. Fuente de vivienda usada sin contenido

- `docs-cliente/contenido-chatgpt/03-pagina-2-4-vivienda-usada.md` sigue con "PEGAR AQUÍ" y el enlace de ChatGPT está marcado como pendiente (la clienta pegó el mismo link del punto 1).
- El sitio publica la sección 2.4 con el contenido disponible en `cambiosmax.txt` (2.4.1 Solicitantes, 2.4.2 Cambios, 2.4.3 Aceptación, 2.4.4 Garantía; RCI hasta 40 % y plazo hasta 25 años con Acierta >= 730).
- Acción: pedir el enlace correcto y el texto final para contrastar la sección.

## 4. Perfil técnico / tecnólogo

- El checklist indica "ACLARAR SI ES EMPLEADO O INDEPENDIENTE".
- El sitio lo mantiene como perfil propio (`tecnico`) con su checklist. Confirmar si debe dividirse en asalariado e independiente o conservarse como está.

## 5. Búsqueda global y perfiles no renderizados

- El buscador del header indexa el texto visible de las páginas. En `documentacion.html` solo está renderizado el perfil activo, por lo que los documentos de los otros perfiles no aparecen en el índice hasta que se seleccionan.
- No es un error normativo; es una mejora pendiente para la fase (c). Si se requiere, se puede generar un índice JSON con los 10 perfiles × 4 etapas.

## 6. Limpieza pendiente (fase e)

- Logos antiguos sin uso: `public/sitio/img/credifamilialogo.jpg` y `public/sitio/img/logocredifamilia.jpg`.
- Revisar si se eliminan o se conservan como respaldo.
