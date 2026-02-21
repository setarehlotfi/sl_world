import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <main className={styles.landing}>
      <div className={styles.hero}>
        <div className={styles.stitchedFrame}>
          <Image
            src="/images/sl-world-oval.png"
            alt="SL World — an oval illustration of a garden scene with a tree, a person on a ladder, a wicker chair, and a basket of fruit"
            width={600}
            height={800}
            priority
            className={styles.illustration}
          />
        </div>
        <Link href="/world" className={styles.enter}>
          enter
        </Link>
      </div>
    </main>
  );
}
