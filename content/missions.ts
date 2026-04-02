import type { MissionCardProps } from "@/components/cards/MissionCard";

export type MissionItem = MissionCardProps & {
  slug: string;
};

export const missions: MissionItem[] = [
  {
    slug: "droits-humains",
    title: "Protection des droits humains",
    description:
      "Prévenir, documenter et signaler les atteintes aux libertés fondamentales dans une logique de vigilance, d’accompagnement et de plaidoyer responsable.",
    image: "/images/actions/suivi-minat-2024-1.jpg",
    imageFit: "cover",
  },
  {
    slug: "recherche-renseignement",
    title: "Recherche et renseignement",
    description:
      "Collecter, centraliser et analyser les informations utiles à la prévention des risques, à l’évaluation des situations et à la prise de décision institutionnelle.",
    image: "/images/actualites/reunion-strategique-2025-2.jpg",
    imageFit: "cover",
  },
  {
    slug: "urgence-secours",
    title: "Interventions d’urgence et secours",
    description:
      "Apporter une réponse structurée face aux catastrophes, aux crises sociales et aux contextes de vulnérabilité nécessitant une mobilisation rapide.",
    image: "/images/actualites/inauguration-siege-baham-4.jpg",
    imageFit: "cover",
  },
  {
    slug: "mediation",
    title: "Médiation, arbitrage et assistance",
    description:
      "Favoriser la résolution pacifique des différends et accompagner les parties dans un cadre juridique et humain.",
    image: "/images/actualites/reunion-strategique-2025-5.jpg",
    imageFit: "contain",
  },
  {
    slug: "consommateurs",
    title: "Protection des consommateurs",
    description:
      "Conduire des missions de contrôle, de prévention et d’alerte sur la qualité des produits, les abus commerciaux et la sécurité des usagers.",
    image: "/images/actions/protection-consommateurs-terrain.jpg",
    imageFit: "contain",
  },
  {
    slug: "formation",
    title: "Formation et sensibilisation",
    description:
      "Développer la culture des droits humains, renforcer les capacités locales et soutenir l’appropriation des bonnes pratiques institutionnelles.",
    image: "/images/hero/siege-national-cadres-minat-2024.jpg",
    imageFit: "cover",
  },
];
