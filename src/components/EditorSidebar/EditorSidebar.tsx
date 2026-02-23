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
    href: "#correspondence",
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
      { label: "Photographs", href: "#photographs" },
      { label: "Ephemera", href: "#ephemera" },
      { label: "Field Drawings", href: "#field-drawings" },
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
    title: "Index",
    href: "#index",
  },
  {
    numeral: "VII",
    title: "Press & Mentions",
    href: "#press-mentions",
  },
  {
    numeral: "VIII",
    title: "Write to Me",
    href: "#write-to-me",
    subItems: [
      { label: "Inquiries", href: "#inquiries" },
      { label: "Commissions", href: "#commissions" },
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
          Somewhere Quiet
          <br />
          <a href="mailto:hello@theslowworld.com">hello@theslowworld.com</a>
          <br />
          <a href="#">@theslowworld</a>
        </div>
      </div>
    </aside>
  );
}
