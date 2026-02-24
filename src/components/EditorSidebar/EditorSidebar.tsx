import Link from "next/link";
import Image from "next/image";
import styles from "./EditorSidebar.module.css";

type SubItem = { label: string; href: string };
type Chapter = {
  numeral: string;
  title: string;
  href: string;
  active?: boolean;
  subItems?: SubItem[];
};

const chapters: Chapter[] = [
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

export default function EditorSidebar() {
  return (
    <aside className={styles.sidebar} data-sidebar>
      <nav className={styles.sidebarNav}>
        {chapters.map((ch) => (
          <div key={ch.numeral} className={styles.navGroup}>
            <span className={styles.navNumber}>{ch.numeral}.</span>
            <a
              href={ch.href}
              className={`${styles.navCategory} ${ch.active ? styles.active : ""}`}
            >
              {ch.title}
            </a>
            {ch.subItems && (
              <ul className={styles.navSub}>
                {ch.subItems.map((sub) => (
                  <li key={sub.label}>
                    <a href={sub.href}>{sub.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
      <div className={styles.sidebarFooter}>
        <div className={styles.footerBrand}>
          <Link href="/"><Image src="/images/logo.png" alt="Setareh Lotfi" width={100} height={28} className={styles.footerLogo} /></Link>
        </div>
        <div className={styles.footerInfo}>
          40.7128° N, 74.0060° W
        </div>
        <div className={styles.footerBuild}>
          v{process.env.NEXT_PUBLIC_VERSION} · node --patience
          <br />
          npm run slowly
        </div>
      </div>
    </aside>
  );
}
