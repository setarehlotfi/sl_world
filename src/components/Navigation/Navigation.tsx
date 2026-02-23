'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const navItems = [
  { numeral: 'I', label: 'Home', href: '/' },
  { numeral: 'II', label: 'Garden', href: '#garden' },
  { numeral: 'III', label: 'Stories', href: '#stories' },
  { numeral: 'IV', label: 'Gallery', href: '#gallery' },
  { numeral: 'V', label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const renderNavItems = (isMobile = false) => (
    <ul className={isMobile ? styles.mobileNavList : styles.navList}>
      {navItems.map((item) => (
        <li key={item.label} className={isMobile ? styles.mobileNavItem : styles.navItem}>
          <span className={isMobile ? styles.mobileNumeral : styles.numeral}>
            {item.numeral}.
          </span>
          {item.href.startsWith('#') ? (
            <a
              href={item.href}
              className={isMobile ? styles.mobileNavLink : styles.navLink}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ) : (
            <Link
              href={item.href}
              className={isMobile ? styles.mobileNavLink : styles.navLink}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.siteTitle}>
          <Link href="/">SL World</Link>
        </div>
        <nav aria-label="Main navigation">
          {renderNavItems()}
        </nav>
        <div className={styles.sidebarFooter}>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </div>
      </aside>

      {/* Mobile hamburger button */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
      >
        <span className={styles.hamburgerLabel}>Menu</span>
      </button>

      {/* Mobile overlay */}
      <div
        className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileHeader}>
          <span className={styles.mobileSiteTitle}>SL World</span>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            Close
          </button>
        </div>
        <nav aria-label="Mobile navigation" className={styles.mobileNav}>
          {renderNavItems(true)}
        </nav>
        <div className={styles.mobileFooter}>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </div>
      </div>
    </>
  );
}
