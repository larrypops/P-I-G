import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Police Internationale d’Intervention Générale",
    short_name: "P.I.G",
    description:
      "Plateforme institutionnelle de la Police Internationale d’Intervention Générale.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f1",
    theme_color: "#8f6b15",
    lang: "fr",
    icons: [
      {
        src: "/images/logo/pig-embleme-or.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
