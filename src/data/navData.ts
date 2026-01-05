export type NavItem = {
  label: string
  href: string
}

export type NavGroup = {
  label: string
  href: string
  items: NavItem[]
}

export const leftLinks:NavGroup[] = [
  {
    label: "Produkte",
    href: "/produkte",
    items: [
      { label: "WIAM® ICE", href: "/produkte/ice" },
      { label: "WIAM® MaterialsHub", href: "/produkte/materialshub" },
      { label: "WIAM® LabDataHub", href: "/produkte/labdatahub" },
      { label: "WIAM® Dataportal", href: "/produkte/dataportal" },
      { label: "WIAM® METALLINFO", href: "/produkte/metallinfo" },
      { label: "WIAM® MMPDS", href: "/produkte/mmpds" },
      { label: "WIAM® Engineering Daten", href: "/produkte/engineering-daten" },
      { label: "WIAM® RIFeST", href: "/produkte/rifest" },
    ],
  },
  {
    label: "Lösungen",
    href: "/loesungen",
    items: [
      { label: "Industrie 4.0: Digitalisierung", href: "/loesungen/industrie-4-0" },
      { label: "Forschung & Entwicklung", href: "/loesungen/forschung-entwicklung" },
      { label: "Material Compliance", href: "/loesungen/material-compliance" },
      { label: "Prozessberatung und IT-Support", href: "/loesungen/it-support" },
    ],
  },
  {
    label: "Branchen",
    href: "/branchen",
    items: [
      { label: "Automotive & Zulieferer", href: "/branchen/automotive" },
      { label: "Luftfahrt", href: "/branchen/luftfahrt" },
      { label: "Maschinenbau & Werkzeugproduktion", href: "/branchen/maschinenbau" },
      { label: "Energietechnik", href: "/branchen/energietechnik" },
      { label: "Medizintechnik & Biotechnologie", href: "/branchen/medizintechnik" },
      { label: "Chemisch-Pharmazeutische Industrie", href: "/branchen/chemie-pharma" },
      { label: "Nahrungsmittelindustrie", href: "/branchen/nahrungsmittel" },
    ],
  },
] 

export const rightLinks:NavGroup[] = [
  {
    label: "Referenzen",
    href: "/referenzen",
    items: [
      { label: "Materialdatenmanagement", href: "/referenzen/materialdatenmanagement" },
      { label: "Labor- & Prüfdaten­auswertung", href: "/referenzen/labor-pruefdaten" },
      { label: "Einheitliche Datengrundlage", href: "/referenzen/datengrundlage" },
      {
        label: "Auswertung von Faserverbund- und Kunststoffproben",
        href: "/referenzen/faserverbund-kunststoff",
      },
      {
        label: "Austausch von Daten zwischen verschiedenen Applikationen",
        href: "/referenzen/datenaustausch",
      },
      {
        label: "Flexible Zugangs- und Berechtigungskonzepte",
        href: "/referenzen/berechtigung",
      },
    ],
  },
  {
    label: "Partner",
    href: "/partner",
    items: [
      { label: "IMA Dresden", href: "/partner/ima-dresden" },
      { label: "CADFEM", href: "/partner/cadfem" },
      { label: "Symate", href: "/partner/symate" },
      { label: "Partner werden", href: "/partner/werden" },
    ],
  },
  {
    label: "Unternehmen",
    href: "/unternehmen",
    items: [
      { label: "WIAM News", href: "/unternehmen/news" },
      { label: "Kundenbereich", href: "/unternehmen/kundenbereich" },
      { label: "Historie", href: "/unternehmen/historie" },
      { label: "Vision & Mission", href: "/unternehmen/vision-mission" },
      { label: "Team", href: "/unternehmen/team" },
      { label: "Karriere", href: "/unternehmen/karriere" },
      { label: "Kontakt", href: "/unternehmen/kontakt" },
      { label: "Cookie-Richtlinie (EU)", href: "/unternehmen/cookies" },
    ],
  },
] 

export const navLinks:NavGroup[] = [...leftLinks, ...rightLinks]