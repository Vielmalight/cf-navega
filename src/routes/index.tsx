import { createFileRoute } from "@tanstack/react-router";

// El sitio subido vive en public/sitio/ y se sirve tal cual, sin reescribirlo.
// Esta página lo muestra a pantalla completa para que sea lo primero que se vea.
const SITE_ENTRY = "/sitio/index.html";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wiki Hipotecaria | Credifamilia" },
      {
        name: "description",
        content:
          "Guía práctica de crédito hipotecario Credifamilia: requisitos, documentos y asesoría para comprar vivienda.",
      },
      { property: "og:title", content: "Wiki Hipotecaria | Credifamilia" },
      {
        property: "og:description",
        content:
          "Guía práctica de crédito hipotecario Credifamilia: requisitos, documentos y asesoría para comprar vivienda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src={SITE_ENTRY}
      title="Sitio web"
      className="block h-screen w-full border-0 bg-background"
    />
  );
}
