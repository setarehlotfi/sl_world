import Navigation from "@/components/Navigation/Navigation";
import styles from "./page.module.css";

export default function WorldPage() {
  return (
    <div className={styles.world}>
      <Navigation />

      <main className={styles.main}>
        {/* Page header */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>World</h1>
          <p className={styles.pageSubtitle}>
            A world of quiet things — gardens tended with care, stories told
            slowly, and beauty found in the unhurried.
          </p>
        </header>

        {/* I. Garden */}
        <section id="garden" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumeral}>I.</span>
            <h2 className={styles.sectionTitle}>Garden</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>
              The garden is a place of slow attention — where seasons are
              teachers and patience is the only tool that matters. Every
              planting is an act of faith in time.
            </p>
            <p>
              Here, <em>beauty is found in the unhurried</em>: the curl of a
              new leaf, the way light falls through morning branches, the
              quiet hum of things growing exactly as they should.
            </p>
          </div>
          <aside className={styles.sectionAside}>
            <figure className={styles.figure}>
              <div className={styles.imagePlaceholder} />
              <figcaption className={styles.figCaption}>
                <span className={styles.figLabel}>fig. i</span>
                Morning light in the garden
              </figcaption>
            </figure>
          </aside>
        </section>

        {/* II. Stories */}
        <section id="stories" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumeral}>II.</span>
            <h2 className={styles.sectionTitle}>Stories</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>
              Some stories are best told slowly — unfolding like cloth laid
              across a table, revealing pattern and texture only with time.
              These are the stories gathered here.
            </p>
            <p>
              They are stories of making and mending, of places remembered
              and places imagined. Each one a small world of its own.
            </p>
          </div>
          <aside className={styles.sectionAside}>
            <figure className={styles.figure}>
              <div className={styles.imagePlaceholder} />
              <figcaption className={styles.figCaption}>
                <span className={styles.figLabel}>fig. ii</span>
                Collected fragments
              </figcaption>
            </figure>
          </aside>
        </section>

        {/* III. Gallery */}
        <section id="gallery" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumeral}>III.</span>
            <h2 className={styles.sectionTitle}>Gallery</h2>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem} />
            <div className={styles.galleryItem} />
            <div className={styles.galleryItem} />
          </div>
        </section>

        {/* IV. Contact */}
        <section id="contact" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumeral}>IV.</span>
            <h2 className={styles.sectionTitle}>Contact</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>
              For inquiries, collaborations, or just a quiet hello —
            </p>
            <p>
              <a href="mailto:hello@example.com" className={styles.emailLink}>
                hello@example.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <p className={styles.footerTitle}>SL World</p>
            <p>A personal world of quiet things.</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#garden">Garden</a>
            <a href="#stories">Stories</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerMeta}>
            <p>&copy; {new Date().getFullYear()} SL World</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
