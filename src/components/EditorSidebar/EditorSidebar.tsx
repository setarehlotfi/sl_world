import Link from "next/link";
import Image from "next/image";
import { chapters } from "@/data/world-navigation";
import styles from "./EditorSidebar.module.css";

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
