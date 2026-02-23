import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.gateway}>
      <div className={styles.gatewayBg} aria-hidden="true" />
      <Link href="/world" className={styles.gatewayLink} aria-label="Enter SL World">
        <div className={styles.heroContent}>
          <Image
            src="/images/sl-world-hero.png"
            alt="SL World — an oval illustration of a garden scene with a tree, a person on a ladder, a wicker chair, and a basket of fruit"
            width={600}
            height={800}
            priority
            className={styles.illustration}
          />
          <p className={styles.enterPrompt}>step inside</p>
          <div className={styles.enterArrow} aria-hidden="true">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path
                d="M0 6h16M12 1l6 5-6 5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={styles.byline}>by SL</p>
        </div>
      </Link>
    </div>
  );
}
