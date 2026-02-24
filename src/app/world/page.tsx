'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EditorSidebar from "@/components/EditorSidebar/EditorSidebar";
import MobileWorldMenu from "@/components/MobileWorldMenu/MobileWorldMenu";
import styles from "./page.module.css";

function getWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - start.getTime();
  return Math.ceil((diff / 86400000 + start.getDay() + 1) / 7);
}

export default function WorldPage() {
  const weekNumber = getWeekNumber();
  const year = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <MobileWorldMenu />
      <header className={styles.topBar}>
        <Link href="/" className={styles.topBrand}>
          <Image src="/images/logo.png" alt="Setareh Lotfi" width={140} height={40} className={styles.topLogo} priority />
        </Link>
        <span className={styles.topPageTitle}>Correspondence</span>
        <div className={styles.topNavSection}>
          <p className={styles.topDescription}>
            A personal gazette on unhurried creative work and gentle research.
          </p>
          <p className={styles.topDescription}>
            Dispatches arrive when they arrive. No sooner.
          </p>
        </div>
      </header>

      <div className={styles.pageLayout}>
        <EditorSidebar />

        <main className={styles.mainContent} data-main>
          <div className={styles.letterCard}>
          <div className={styles.mobileLogo}>
            <Image src="/images/logo.png" alt="Setareh Lotfi" width={160} height={46} className={styles.mobileLogoImg} />
          </div>
          <div className={`${styles.chapterNumber} ${styles.fadeIn} ${styles.d1}`}>I.</div>
          <h1 className={`${styles.chapterTitle} ${styles.fadeIn} ${styles.d2}`}>
            A Dispatch for the<br />Nondeterministic Traveler
          </h1>

          <div className={`${styles.prose} ${styles.fadeIn} ${styles.d3}`}>
            <p className={`${styles.indent1} ${styles.dropCapParagraph}`}>
              You&rsquo;ve arrived, and I have no idea how. This page wasn&rsquo;t built to be found. It has no distribution strategy, no audience, and a <code>robots.txt</code> written out of genuine hostility toward crawlers. That you&rsquo;re here at all is either excellent taste or a training set I&rsquo;d very much like to understand.
            </p>
            <p className={styles.indent2}>
              I build things. Mostly software, occasionally companies, and, at least once, the kind of AI that made a hedge fund&rsquo;s existing models feel politely obsolete.
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent2}>
              I&rsquo;ve been at this since high school, when I taught myself Objective-C to build an English-to-Farsi dictionary app. At the time, Farsi NLP was a tragedy. Google Translate was producing sentences that were technically in two languages and comprehensible in neither. If you wanted a Farsi dictionary in your pocket, someone had to build it. So I did. I ran the whole thing on Parse, which Facebook would later acquire and then, in an act of corporate tenderness, shut down entirely<span className={styles.supRef}>[1]</span>.
            </p>
            <p className={styles.indent1}>
              The instinct remains: <em>the thing should exist, so I will make the thing.</em> It&rsquo;s a philosophy that has governed my life ever since, with varying degrees of financial reward and emotional consequence.
            </p>
            <p className={styles.indent3}>
              Five years at Google, wandering through more product groups than the Mountain View campus has bicycles. A visual search app acquired by Snap. A crypto venture in Paris, which was exactly as chaotic as it sounds and about which I shall say nothing further. Most recently, I joined Aura Intelligence as its founding CTO, rebuilt the product from the ground up, and ran it until Bain &amp; Company acquired the whole operation in 2025.
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent1}>
              Since then, my curiosity has become my full-time occupation. I angel invest, advise founders, and spend an unreasonable number of hours pulling apart vision-language models to see what&rsquo;s actually under the hood. I&rsquo;m deep in multimodal infrastructure, robotics, and the tooling that moves us past the chatbot era into systems that actually do things in the world. Some of this becomes a prototype. Some becomes an investment thesis. But the question I keep circling back to is less technical and more human: what does a software engineer even look like in three years? What does hiring look like when your best candidate might be a founder who can taste product, sell it, and prompt a model into building it? The role isn&rsquo;t dead. But it&rsquo;s molting, and most people haven&rsquo;t noticed yet.
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent2}>
              <strong>The Ephemera</strong>
            </p>
            <p className={styles.indent2}>
              When I&rsquo;m not deep in a codebase, I am preoccupied with the tactile. The patina on a brass handle. The specific crease in a book&rsquo;s spine at page 114. The particular, heartbreaking brown a leaf turns in October just before it lets go. Nobody is waiting for my report on autumn leaves, and yet here we are.
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent1}>
              I sit on the Young Collectors Council at the Guggenheim, though I suspect I take skiing more seriously than almost anything else. I have a burgeoning, perhaps unhealthy, attachment to vintage alpine culture, a project I&rsquo;m currently manifesting into a publication called <em>Chalant Society</em>. I&rsquo;ve never once managed to keep a hobby from becoming a project. It&rsquo;s a character flaw I&rsquo;ve learned to embrace<span className={styles.supRef}>[2]</span>.
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent2}>
              If you&rsquo;re building something, I&rsquo;d love to hear about it. If you&rsquo;ve read this far without building anything at all, I&rsquo;m touched. You could have been anywhere else on the internet. Instead you&rsquo;re here, reading a letter from a stranger who is genuinely delighted by the improbability of the whole thing<span className={styles.supRef}>[3]</span>.
            </p>
            <p className={styles.indent1}>
              Do come back. The door is always slightly open<span className={styles.supRef}>[4]</span>.
            </p>
          </div>

          <div className={styles.closing} data-reveal>
            <p>From the desk of,</p>
            <p>&mdash; S.L.</p>
          </div>
          </div>

        </main>

        <aside className={styles.rightMargin} data-margin>
          <div className={styles.marginNote}>
            <div className={styles.bookEdition}>
              <div className={styles.bookEditionHeader}>Currently Reading</div>
              <div className={styles.bookEditionWeek}>Week {weekNumber}, {year}</div>
              <div className={styles.bookEditionRule} />
              <div className={styles.bookCover}>
                <Image
                  src="/images/book_cover_feb.png"
                  alt="Apple in China by Patrick McGee"
                  width={180}
                  height={270}
                  className={styles.bookCoverImg}
                />
              </div>
              <h3 className={styles.bookTitle}>Apple in China</h3>
              <p className={styles.bookAuthorName}>Patrick McGee</p>
              <div className={styles.bookReviewRule} />
              <p className={styles.bookReview}>
                Cupertino&rsquo;s Faustian waltz with Beijing, rendered with the quiet authority of a man who has read every footnote in the room. A corporate thriller in the sober cloth of serious journalism. One finishes feeling not outraged but <em>implicated</em>&mdash;the mark of genuinely uncomfortable writing.
              </p>
            </div>

            <div className={styles.marginNotes}>
              <p className={styles.marginNoteText}>
                <span className={styles.noteNumber}>[1]</span> Parse, 2011&ndash;2017. A perfectly good backend-as-a-service. Acquired by Facebook in 2013, sunsetted in 2017. Poured one out for it at the time. Still haven&rsquo;t fully moved on.
              </p>
              <p className={styles.marginNoteText}>
                <span className={styles.noteNumber}>[2]</span> The average lifespan of a &ldquo;hobby&rdquo; in my possession before it acquires a domain name, a brand deck, and a vague five-year plan is approximately six weeks.
              </p>
              <p className={styles.marginNoteText}>
                <span className={styles.noteNumber}>[3]</span> The average transatlantic letter in 1842 took twenty-one days. One imagines the sender chose their words with considerably more care than we do when firing off a Slack message at 11:47pm.
              </p>
              <p className={styles.marginNoteText}>
                <span className={styles.noteNumber}>[4]</span> See: fig. 01 of the ongoing door photography series. Or don&rsquo;t. There&rsquo;s no rush.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
