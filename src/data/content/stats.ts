import type { Locale, StatsSectionContent } from "../types";

export const statsContent: Record<Locale, StatsSectionContent> = {
  en: {
    items: [
      {
        value: 13,
        description: "Regionally based crews serving nearby neighborhoods",
      },
      {
        prefix: ">",
        value: 16000,
        description: "Clients trust the Bloomscape team for home and garden care",
      },
      {
        prefix: ">",
        value: 284000,
        description: "Hours tending landscapes, patios, and rooftops",
      },
      {
        prefix: ">",
        value: 130,
        description: "Gardeners, designers, and specialists on staff",
      },
    ],
  },
  de: {
    items: [
      {
        value: 13,
        description: "Regional verankerte Teams fuer kurze Wege",
      },
      {
        prefix: ">",
        value: 16000,
        description: "Kundinnen und Kunden vertrauen Bloomscape",
      },
      {
        prefix: ">",
        value: 284000,
        description: "Stunden Gartenpflege und Hausservice",
      },
      {
        prefix: ">",
        value: 130,
        description: "Mitarbeitende aus Gartenbau, Reinigung und Betreuung",
      },
    ],
  },
};
