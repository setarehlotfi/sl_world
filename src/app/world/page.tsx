'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EditorSidebar from "@/components/EditorSidebar/EditorSidebar";
import styles from "./page.module.css";

export default function WorldPage() {
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
          <div className={`${styles.chapterNumber} ${styles.fadeIn} ${styles.d1}`}>I.</div>
          <h1 className={`${styles.chapterTitle} ${styles.fadeIn} ${styles.d2}`}>
            A Letter to<br />Whoever Arrives
          </h1>

          <div className={`${styles.dateline} ${styles.fadeIn} ${styles.d3}`}>
            Written at my desk, mid-morning, February 2026. Tea still warm.
          </div>

          <div className={`${styles.prose} ${styles.fadeIn} ${styles.d3}`}>
            <p className={styles.indent1}>
              Dear visitor, you&rsquo;ve found me. Which is rather remarkable given that I&rsquo;ve done almost nothing to make myself findable. I take this as a sign of <em>excellent taste</em> on your part, or perhaps a very slow internet connection that has, by some miracle, deposited you here instead of somewhere louder.
            </p>
            <p className={styles.indent2}>
              Welcome to Setareh Lotfi. It is, I confess, not much of a world. More of a room, really. A room with some books, a few ongoing projects, a window I stare out of more than I probably should, and a persistent belief that the best ideas arrive on their own schedule<span className={styles.supRef}>[1]</span>.
            </p>
            <p className={styles.indent3}>
              I am a person who makes things. Slowly. This has not been a popular professional strategy, and yet here we are, both of us, reading a paragraph about it. So perhaps there&rsquo;s something to it after all.
            </p>
          </div>

          <div className={styles.sectionBreak} />

          <div className={styles.photoBlock} data-reveal>
            <div className={styles.photoPlaceholder} />
            <p className={styles.photoCaption}>
              fig. 01. My desk on a Tuesday, or possibly a Wednesday. The days blur together when you&rsquo;re not rushing through them. <em>Note the tea, the unfinished letter, the book I keep meaning to return.</em>
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent1}>
              My work, such as it is, sits somewhere between <em>creative practice</em> and <em>research</em>, which is a polite way of saying I spend a lot of time thinking about things before I do them. The thinking, I have come to believe, is the doing. Or at least that&rsquo;s what I tell myself while staring at the ceiling for forty-five minutes on a Thursday afternoon.
            </p>
            <p className={styles.indent2}>
              I am interested in how things accumulate meaning over time. The patina on a brass handle. The crease in a book&rsquo;s spine that tells you someone paused on page 114. The particular shade of brown that a leaf turns in October, just before it lets go. These are not urgent observations. Nobody is waiting for my report on autumn leaves. And yet I find them <em>devastatingly important</em>, in the way that all unimportant things secretly are.
            </p>
          </div>

          <div className={styles.sectionBreak} />

          <div className={styles.photoBlock} data-reveal>
            <div className={styles.photoPlaceholder} />
            <p className={styles.photoCaption}>
              fig. 02. A collection of objects I&rsquo;ve been meaning to organize since last spring. <em>The fact that I haven&rsquo;t is, I think, the point.</em>
            </p>
          </div>

          <div className={styles.prose} data-reveal>
            <p className={styles.indent1}>
              People occasionally ask what I&rsquo;m <em>working on</em>, which is a perfectly reasonable question that I find almost impossible to answer. The honest response is: everything, a little bit at a time. A long essay about slowness that I started two years ago. A series of photographs of <em>doors that are slightly open</em>. Some research into how the postal service used to operate when letters took three weeks and everyone was, by all accounts, more thoughtful about what they wrote<span className={styles.supRef}>[2]</span>.
            </p>
            <p className={styles.indent2}>
              There is also a novel, or what might become a novel, or what might remain a very committed collection of notes. Time will tell. Time always does, given enough of it.
            </p>
            <p className={styles.indent3}>
              This website is an extension of that philosophy. It won&rsquo;t update on a schedule. New work will appear when it&rsquo;s ready, which is to say when it has sat in a drawer for long enough that I&rsquo;ve forgotten why I was embarrassed by it. There are no newsletters with subject lines designed to create urgency. Urgency, I&rsquo;ve found, is almost always <em>someone else&rsquo;s idea</em>.
            </p>
          </div>

          <div className={styles.sectionBreak} />

          <div className={styles.prose} data-reveal>
            <p className={styles.indent2}>
              If you&rsquo;ve read this far, I&rsquo;m genuinely touched. You could have been doing anything. Scrolling, clicking, buying something you don&rsquo;t need. Instead you&rsquo;re here, reading a letter from a stranger who types slowly and thinks even slower. That says something rather nice about you.
            </p>
            <p className={styles.indent1}>
              Do come back, whenever you remember. The door is always slightly open<span className={styles.supRef}>[3]</span>.
            </p>
          </div>

          <div className={styles.closing} data-reveal>
            <p>Yours, unhurriedly,</p>
            <p>&mdash; The Proprietor</p>
          </div>
        </main>

        <aside className={styles.rightMargin} data-margin>
          <div className={styles.marginNote}>
            <div className={styles.marginNoteImg}>
              <div className={styles.bookLabel}>In Praise<br />of Slowness</div>
              <div className={styles.bookAuthor}>Carl Honor&eacute;</div>
            </div>
            <p className={styles.marginNoteText}>
              <span className={styles.noteNumber}>[1]</span> Carl Honor&eacute; wrote an entire book about the global movement toward deceleration, which I read very slowly over the course of a summer. He would have approved.
            </p>
            <br />
            <p className={styles.marginNoteText}>
              <span className={styles.noteNumber}>[2]</span> The average transatlantic letter in 1842 took twenty-one days. One imagines the sender chose their words with considerably more care than we do when firing off a Slack message at 11:47pm.
            </p>
            <br />
            <p className={styles.marginNoteText}>
              <span className={styles.noteNumber}>[3]</span> See: fig. 01 of the ongoing door photography series. Or don&rsquo;t. There&rsquo;s no rush.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
