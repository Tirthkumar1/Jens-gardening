import type { ContactSectionContent, Locale } from "../types";

export const contactContent: Record<Locale, ContactSectionContent> = {
  en: {
    heading: "Book your complimentary garden consultation",
    description:
      "Share a few details and our team will reach out within one business day to plan a visit and craft a custom proposal.",
    benefits: [
      "Dedicated account specialist",
      "On-site soil and plant health assessment",
      "Digital mood board and maintenance plan",
    ],
    phoneLabel: "Call us",
    phoneNumber: "+1 (555) 012-3456",
    whatsappLabel: "Chat on WhatsApp",
    whatsappNumber: "+1 (555) 987-6543",
    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.994327322533!2d-73.96854352380771!3d40.785091771380395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589f4ca68cf9%3A0xa3d8c7ab39868bf9!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1700000000000",
      title: "Bloomscape service area",
    },
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      serviceLabel: "Service interest",
      servicePlaceholder: "Choose a focus area",
      notesLabel: "Project notes",
      notesPlaceholder: "Tell us about your space, goals, or inspiration.",
      submitLabel: "Request my plan",
    },
  },
  de: {
    heading: "Kostenlose Gartenberatung buchen",
    description:
      "Teilen Sie ein paar Details und wir melden uns innerhalb eines Werktages, um einen Besuch zu planen und ein individuelles Angebot zu erstellen.",
    benefits: [
      "Persoenliche Ansprechperson",
      "Analyse von Boden und Pflanzen vor Ort",
      "Digitales Moodboard und Pflegeplan",
    ],
    phoneLabel: "Rufen Sie uns an",
    phoneNumber: "+49 (0)30 1234 5678",
    whatsappLabel: "WhatsApp Nachricht",
    whatsappNumber: "+49 (0)151 23456789",
    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.8870896554236!2d13.40495371580079!3d52.52000697981201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d0cc3e1ed5%3A0xa0f4b2650a7a53c8!2sBerlin%20Mitte!5e0!3m2!1sde!2sde!4v1700000000000",
      title: "Bloomscape Einsatzgebiet",
    },
    form: {
      nameLabel: "Name",
      namePlaceholder: "Ihr Vor- und Nachname",
      emailLabel: "E-Mail",
      emailPlaceholder: "sie@email.de",
      serviceLabel: "Leistungsinteresse",
      servicePlaceholder: "Bereich auswaehlen",
      notesLabel: "Projektnotizen",
      notesPlaceholder: "Beschreiben Sie Ihren Garten, Ziele oder Inspiration.",
      submitLabel: "Angebot anfordern",
    },
  },
};
