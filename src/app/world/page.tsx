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
          <div className={styles.mobileLogo}>
            <Image src="/images/logo.png" alt="Setareh Lotfi" width={160} height={46} className={styles.mobileLogoImg} />
          </div>
          <div className={`${styles.chapterNumber} ${styles.fadeIn} ${styles.d1}`}>I.</div>
          <h1 className={`${styles.chapterTitle} ${styles.fadeIn} ${styles.d2}`}>
            A Letter to<br />Whoever Arrives
          </h1>

          <div className={`${styles.prose} ${styles.fadeIn} ${styles.d3}`}>
            <p className={`${styles.indent1} ${styles.dropCapParagraph}`}>
              <span className={styles.dropCap}>D</span>ear visitor, this page has no discoverability pipeline, no embedding in anyone&rsquo;s retrieval system, and a robots.txt that was written with genuine intent. Your arrival appears to be non-deterministic. I take that as a sign of excellent taste.
            </p>
            <p className={styles.indent3}>
              I build things. Mostly software, occasionally companies, and recently the kind of AI that makes other people&rsquo;s AI look like a sundial at night.
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent2}>
              I&rsquo;ve been at it since high school, when I taught myself Objective-C and built an English-to-Farsi dictionary app because it didn&rsquo;t exist and I needed one. The state of the art in Farsi NLP was Google Translate producing sentences that were technically in two languages and comprehensible in neither. If you wanted a Farsi dictionary in your pocket, someone had to sit down and build you a Farsi dictionary for your pocket. I ran the whole thing on Parse, which Facebook would later acquire and then, in an act of corporate tenderness, shut down entirely<span className={styles.supRef}>[1]</span>.
            </p>
            <p className={styles.indent1}>
              <em>The thing should exist, so I will make the thing.</em> That instinct has been running my life ever since, with varying degrees of financial and emotional consequence.
            </p>
            <p className={styles.indent3}>
              Five years at Google, across more product groups than Google itself probably remembers. A visual search app, acquired by Snap. A crypto company in Paris, which is exactly as chaotic as it sounds and about which I will say nothing further. Most recently, founding CTO of something called Aura Intelligence, which built AI for hedge funds until Bain &amp; Company acquired the whole thing.
            </p>
          </div>

          <div className={styles.sectionBreak} />

          <div className={styles.prose} data-reveal>
            <p className={styles.indent1}>
              These days I angel invest, advise founders, and think about developer tooling, vibe coding, and what vision-language models are about to make possible.
            </p>
          </div>

          <div className={styles.sectionBreak} />

          <div className={styles.photoBlock} data-reveal>
            <div className={styles.photoPlaceholder} />
            <p className={styles.photoCaption}>
              fig. 01. My desk on a Tuesday, or possibly a Wednesday. <em>Note the tea, the unfinished letter, the book I keep meaning to return.</em>
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent2}>
              I also think about the patina on a brass handle. The crease in a book&rsquo;s spine at page 114. The particular brown a leaf turns in October, just before it lets go. Nobody is waiting for my report on autumn leaves. And yet.
            </p>
          </div>

          <div className={styles.sectionBreak} />

          <div className={styles.prose} data-reveal>
            <p className={styles.indent1}>
              I sit on the young collectors group at the Guggenheim and the Met. Skiing is the one thing I take more seriously than software. I have an unreasonable attachment to vintage alpine culture that I&rsquo;m trying to turn into a publication called <em>Chalant Society</em>, because I&rsquo;ve never once managed to keep a hobby from becoming a project<span className={styles.supRef}>[2]</span>.
            </p>
          </div>

          <div className={styles.sectionBreak} />

          <div className={styles.prose} data-reveal>
            <p className={styles.indent2}>
              If you&rsquo;re building something, I&rsquo;d love to hear about it. If you&rsquo;ve read this far without building anything at all, I&rsquo;m touched. You could have been doing anything. Instead you&rsquo;re here, reading a letter from a stranger who types slowly and thinks even slower<span className={styles.supRef}>[3]</span>.
            </p>
            <p className={styles.indent1}>
              Do come back. The door is always slightly open<span className={styles.supRef}>[4]</span>.
            </p>
          </div>

          <div className={styles.closing} data-reveal>
            <p>Yours, unhurriedly,</p>
            <p>&mdash; S.L.</p>
          </div>

        </main>

        <aside className={styles.rightMargin} data-margin>
          <div className={styles.marginNote}>
            <div className={styles.bookEdition}>
              <div className={styles.bookEditionHeader}>Currently Reading</div>
              <div className={styles.bookEditionWeek}>Week {weekNumber}, {year}</div>
              <div className={styles.bookEditionRule} />
              <div className={styles.bookCover}>
                <div className={styles.bookCoverInner}>
                  <span className={styles.bookCoverTitle}>Apple<br />in China</span>
                </div>
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
