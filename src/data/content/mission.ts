import type { Locale, MissionContent } from "../types";

export const missionContent: Record<Locale, MissionContent> = {
  en: {
    eyebrow: "Our promise",
    heading: "Let us transform your garden and home",
    paragraphs: [
      "Bloomscape Garden Services brings together certified horticulturists, interior caretakers, and designers under one coordinated team. From thriving perennial borders to spotless patios and common areas, we approach every visit with an eye for detail and a reverence for your outdoor sanctuary.",
      "Our crews are supported by dedicated account specialists who plan seasonal plantings, monitor irrigation, and schedule upkeep around your calendar. Transparent communication, photo updates, and clear proposals mean you always know what comes next—no surprises, only beautiful, resilient spaces.",
      "Whether you need a one-time refresh or a long-term partnership, we call back within 24 hours, deliver quotes in under a week, and get recurring maintenance on the books within six weeks. You can relax knowing your property is cared for by people who love it as much as you do.",
    ],
    images: [
      {
        src: "/images/mission/mission-square.jpg",
        alt: "Bloomscape crew tending an urban garden",
      },
    ],
  },
  de: {
    eyebrow: "Unser Versprechen",
    heading: "Wir verwandeln Haus und Garten in Ruheoasen",
    paragraphs: [
      "Bloomscape vereint zertifizierte Gaertnerinnen, Hausbetreuer und Designer in einem eingespielten Team. Von bluehenden Staudenbeeten bis zu gepflegten Terrassen und Gemeinschaftsflaechen kuemmern wir uns mit Liebe zum Detail um jeden Besuch.",
      "Ein persoenlicher Account-Service plant saisonale Pflanzungen, ueberwacht Bewaesserung und koordiniert Einsaetze nach Ihrem Kalender. Transparente Kommunikation, Foto-Updates und klare Angebote sorgen dafuer, dass Sie stets wissen, was als naechstes passiert – ohne Ueberraschungen, nur mit lebendigen, widerstandsfaehigen Raeumen.",
      "Ob einmalige Auffrischung oder langfristige Betreuung: Wir rufen werktags innerhalb von 24 Stunden zurueck, liefern Angebote in weniger als einer Woche und starten wiederkehrende Pflege in der Regel innerhalb von sechs Wochen. So koennen Sie entspannt sein, waehrend wir Ihre Flaechen wie unsere eigenen behandeln.",
    ],
    images: [
      {
        src: "/images/mission/mission-square.jpg",
        alt: "Bloomscape-Team pflegt einen Stadtgarten",
      },
    ],
  },
};
