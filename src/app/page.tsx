'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

const universeColors: Record<string, string> = {
  landing: '#D7CCBE',
  garden: '#C9D4C1',
  stories: '#DBCFBF',
  gallery: '#C4CCD6',
  contact: '#C7BEAD',
};

export default function Page() {
  const sceneRefs = useRef<Map<string, HTMLElement>>(new Map());

  const setRef = useCallback((id: string) => (el: HTMLElement | null) => {
    if (el) sceneRefs.current.set(id, el);
    else sceneRefs.current.delete(id);
  }, []);

  useEffect(() => {
    const textureEl = document.querySelector('.canvas-texture') as HTMLElement;

    // Update background color based on which section is most visible
    const colorObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const color = universeColors[entry.target.id];
            if (color && textureEl) {
              textureEl.style.backgroundColor = color;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Reveal content sections when they enter viewport
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    sceneRefs.current.forEach((el) => {
      colorObserver.observe(el);
      revealObserver.observe(el);
    });

    return () => {
      colorObserver.disconnect();
      revealObserver.disconnect();
      if (textureEl) {
        textureEl.style.backgroundColor = '';
      }
    };
  }, []);

  return (
    <div className={styles.story}>
      {/* Hero / Landing */}
      <section
        id="landing"
        ref={setRef('landing')}
        className={`${styles.scene} ${styles.heroScene}`}
      >
        <div className={styles.heroContent}>
          <Image
            src="/images/sl-world-hero.png"
            alt="SL World — an oval illustration of a garden scene with a tree, a person on a ladder, a wicker chair, and a basket of fruit"
            width={600}
            height={800}
            priority
            className={styles.illustration}
          />
          <p className={styles.scrollPrompt}>scroll to follow the story</p>
          <div className={styles.scrollArrow} aria-hidden="true">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path
                d="M8 0v20M1 15l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* I. Garden */}
      <section
        id="garden"
        ref={setRef('garden')}
        className={`${styles.scene} ${styles.contentScene}`}
      >
        <div className={styles.sceneInner}>
          <span className={styles.numeral}>I.</span>
          <h2 className={styles.sceneTitle}>Garden</h2>
          <div className={styles.sceneBody}>
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
        </div>
      </section>

      {/* II. Stories */}
      <section
        id="stories"
        ref={setRef('stories')}
        className={`${styles.scene} ${styles.contentScene}`}
      >
        <div className={styles.sceneInner}>
          <span className={styles.numeral}>II.</span>
          <h2 className={styles.sceneTitle}>Stories</h2>
          <div className={styles.sceneBody}>
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
        </div>
      </section>

      {/* III. Gallery */}
      <section
        id="gallery"
        ref={setRef('gallery')}
        className={`${styles.scene} ${styles.contentScene}`}
      >
        <div className={styles.sceneInner}>
          <span className={styles.numeral}>III.</span>
          <h2 className={styles.sceneTitle}>Gallery</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem} />
            <div className={styles.galleryItem} />
            <div className={styles.galleryItem} />
          </div>
        </div>
      </section>

      {/* IV. Contact */}
      <section
        id="contact"
        ref={setRef('contact')}
        className={`${styles.scene} ${styles.contentScene}`}
      >
        <div className={styles.sceneInner}>
          <span className={styles.numeral}>IV.</span>
          <h2 className={styles.sceneTitle}>Contact</h2>
          <div className={styles.sceneBody}>
            <p>
              For inquiries, collaborations, or just a quiet hello —
            </p>
            <p>
              <a href="mailto:hello@example.com" className={styles.emailLink}>
                hello@example.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} SL World</p>
      </footer>
    </div>
  );
}
