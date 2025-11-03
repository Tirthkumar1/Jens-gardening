import type { Locale, SeasonalSectionContent } from "../types";

export const seasonalContent: Record<Locale, SeasonalSectionContent> = {
  en: {
    heading: "Seasonal spotlight",
    items: [
      {
        title: "Spring",
        detail:
          "Aerate heavy soils, layer in compost, and top-dress with organic fertilizer before planting a mix of cool-season herbs, lettuces, and vibrant bulbs so early blooms and kitchen harvests overlap.",
        imageUrl: "/images/seasonal/spring.jpg",
      },
      {
        title: "Summer",
        detail:
          "Deep-water at dawn twice weekly, mulch beds to lock in moisture, and deadhead flowering perennials every few days to keep color strong while keeping pests at bay with companion plantings.",
        imageUrl: "/images/seasonal/summer.jpg",
      },
      {
        title: "Fall",
        detail:
          "Stagger plantings of bulbs, kale, and winter pansies, then shred fallen leaves into beds and raise mower heights so perennials are insulated and soil biology thrives through the cold months.",
        imageUrl: "/images/seasonal/fall.jpg",
      },
    ],
  },
  de: {
    heading: "Saisonale Highlights",
    items: [
      {
        title: "Fruehling",
        detail:
          "Verdichteten Boden lueften, grosszuegig Kompost einarbeiten und eine Mischung aus fruehen Kraeutern, Salaten und Blueten setzen, damit Genuss und Farbe sich von frueh an abwechseln.",
        imageUrl: "/images/seasonal/spring.jpg",
      },
      {
        title: "Sommer",
        detail:
          "Frueh am Morgen tiefgruendig giessen, Beete mulchen und verbluete Stauden regelmaessig schneiden, um Hitze zu trotzen und neue Blueten zu foerdern, waehrend Mischkulturen Schaedlinge fernhalten.",
        imageUrl: "/images/seasonal/summer.jpg",
      },
      {
        title: "Herbst",
        detail:
          "Zwiebeln und Wintergemuese gestaffelt setzen, Laub schreddern und als Schutzschicht einarbeiten und die Schnitt hoehe anheben, damit Stauden gut isoliert durch die kalte Saison kommen.",
        imageUrl: "/images/seasonal/fall.jpg",
      },
    ],
  },
};
