import Link from "next/link";
import styles from "./page.module.css";

export default function WorldPage() {
  return (
    <main className={styles.world}>
      <header className={styles.header}>
        <Link href="/" className={styles.homeLink}>
          SL World
        </Link>
      </header>

      <article className={styles.content}>
        <h1 className={styles.title}>Welcome</h1>

        <div className={styles.body}>
          <p>
            This is a world of quiet things — gardens tended with care, stories
            told slowly, and beauty found in the unhurried.
          </p>
        </div>

        <nav className={styles.links}>
          <a href="mailto:hello@example.com">contact</a>
        </nav>
      </article>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
