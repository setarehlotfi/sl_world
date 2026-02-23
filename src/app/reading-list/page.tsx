'use client';

import Image from 'next/image';
import Link from 'next/link';
import EditorSidebar from "@/components/EditorSidebar/EditorSidebar";
import ReadingList from "@/components/ReadingList/ReadingList";
import styles from "../world/page.module.css";

export default function ReadingListPage() {
  return (
    <>
      <header className={styles.topBar}>
        <Link href="/" className={styles.topBrand}>
          <Image src="/images/logo.png" alt="Setareh Lotfi" width={140} height={40} className={styles.topLogo} priority />
        </Link>
        <span className={styles.topPageTitle}>Library</span>
        <div className={styles.topNavSection}>
          <p className={styles.topDescription}>
            A curated library for the ambitious, the curious,
          </p>
          <p className={styles.topDescription}>
            and the profoundly unbothered.
          </p>
        </div>
      </header>

      <div className={styles.pageLayout}>
        <EditorSidebar />

        <main className={styles.mainContent} data-main>
          <ReadingList />
        </main>

        <aside className={styles.rightMargin} data-margin />
      </div>
    </>
  );
}
