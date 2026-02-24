'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { chapters } from '@/data/world-navigation';
import styles from './MobileWorldMenu.module.css';

export default function MobileWorldMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const isExternal = (href: string) => href.startsWith('http');

  return (
    <>
      <header className={styles.mobileTopBar}>
        <Link href="/" className={styles.brandLink}>
          <span className={styles.brandName}>Setareh Lotfi</span>
        </Link>
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          Chapters
        </button>
      </header>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.overlayHeader}>
          <Link href="/" className={styles.brandLink} onClick={handleNavClick}>
            <span className={styles.brandName}>Setareh Lotfi</span>
          </Link>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            Close
          </button>
        </div>

        <nav className={styles.overlayNav} aria-label="World navigation">
          {chapters.map((ch) => (
            <div key={ch.numeral} className={styles.navGroup}>
              <span className={styles.numeral}>{ch.numeral}.</span>
              <div className={styles.navContent}>
                <a
                  href={ch.href}
                  className={`${styles.categoryTitle} ${ch.active ? styles.active : ''}`}
                  onClick={handleNavClick}
                >
                  {ch.title}
                </a>
                {ch.subItems && (
                  <ul className={styles.subList}>
                    {ch.subItems.map((sub) => (
                      <li key={sub.label}>
                        {isExternal(sub.href) ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleNavClick}
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <a href={sub.href} onClick={handleNavClick}>
                            {sub.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
