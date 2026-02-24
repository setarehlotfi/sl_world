export type SubItem = { label: string; href: string };
export type Chapter = {
  numeral: string;
  title: string;
  href: string;
  active?: boolean;
  subItems?: SubItem[];
};

export const chapters: Chapter[] = [
  {
    numeral: "I",
    title: "Correspondence",
    href: "/world#correspondence",
    active: true,
  },
  {
    numeral: "II",
    title: "The Work",
    href: "#the-work",
    subItems: [
      { label: "Creative Practice", href: "#creative-practice" },
      { label: "Ongoing Research", href: "#ongoing-research" },
      { label: "Collaborations", href: "#collaborations" },
    ],
  },
  {
    numeral: "III",
    title: "Library",
    href: "/reading-list",
    subItems: [
      { label: "Reading List", href: "/reading-list" },
      { label: "Marginalia", href: "#marginalia" },
    ],
  },
  {
    numeral: "IV",
    title: "Collected Objects",
    href: "#collected-objects",
    subItems: [
      { label: "Ephemera", href: "#ephemera" },
    ],
  },
  {
    numeral: "V",
    title: "Dispatches",
    href: "#dispatches",
    subItems: [
      { label: "Spring", href: "#spring" },
      { label: "Summer", href: "#summer" },
      { label: "Autumn", href: "#autumn" },
      { label: "Winter", href: "#winter" },
    ],
  },
  {
    numeral: "VI",
    title: "Press & Mentions",
    href: "#press-mentions",
  },
  {
    numeral: "VII",
    title: "Known Whereabouts",
    href: "#known-whereabouts",
    subItems: [
      { label: "LinkedIn", href: "https://www.linkedin.com/setarehlotfi" },
      { label: "X", href: "https://x.com/setarehlotfi" },
    ],
  },
];
