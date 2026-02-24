'use client';

import { useState, useMemo } from 'react';
import styles from './ReadingList.module.css';

type Book = {
  author: string;
  title: string;
  tags: string[];
  pretension: number;
  description: string;
  publisher?: string;
};

const books: Book[] = [
  {
    author: "Nassim Nicholas Taleb",
    title: "The Black Swan",
    tags: ["Finance & Power", "Cocktail Party Ammunition"],
    pretension: 4,
    description: `The perennial favorite of the \u201cI told you so\u201d crowd. This is the book you quote when the market dips 4.5% on a Monday morning. It\u2019s the perfect intellectual shield for explaining why your portfolio is currently \u201cundergoing a volatility event\u201d rather than just crashing.`,
  },
  {
    author: "Plato",
    title: "The Republic",
    tags: ["Dead Philosophers", "Cocktail Party Ammunition"],
    pretension: 5,
    description: `The ultimate tutorial flex. If you cannot successfully argue that your scout is actually a \u201cGuardian\u201d in a cave of shadows, have you even been to Brasenose? It\u2019s the foundational text for anyone who plans on ruling a small country or, at the very least, a very contentious HOA.`,
  },
  {
    author: "Evelyn Waugh",
    title: "Brideshead Revisited",
    tags: ["Fiction & Literature", "Cocktail Party Ammunition"],
    pretension: 5,
    description: `Less a novel, more a religious experience for the aesthetically obsessed. Read it for the strawberries and champagne; stay for the crushing realization that your youth is a fleeting, golden hallucination that will eventually be requisitioned by the Army.`,
  },
  {
    author: "Isaiah Berlin",
    title: "The Hedgehog and the Fox",
    tags: ["Dead Philosophers", "Cocktail Party Ammunition"],
    pretension: 5,
    description: `Sir Isaiah was the undisputed heavyweight champion of the All Souls common room. This essay is the perfect \u201ccheat code\u201d for cocktail parties. Simply categorize everyone you meet as either a \u201cHedgehog\u201d (bore) or a \u201cFox\u201d (flighty), and you\u2019ll be the most sought-after guest at the Garden Party.`,
  },
  {
    author: "Niccol\u00f2 Machiavelli",
    title: "The Prince",
    tags: ["Finance & Power", "Dead Philosophers"],
    pretension: 4,
    description: `For the PPE student who realizes that \u201cethics\u201d is just a six-letter word for \u201closing the Union debate.\u201d It\u2019s a slim volume, which is helpful, as it leaves more room in your Filson briefcase for a flask of sherry.`,
  },
  {
    author: "Robert Caro",
    title: "The Power Broker",
    tags: ["Finance & Power", "Endurance Tests"],
    pretension: 4,
    description: `At 1,336 pages, this isn\u2019t a book so much as a structural commitment. It\u2019s the literary equivalent of buying a rowing machine: you\u2019ll tell everyone you\u2019re \u201cgetting through it,\u201d and by page 400, you\u2019ll have developed a genuinely unsettling knowledge of mid-century New York parkway construction. Pairs beautifully with a herniated disc and a long winter.`,
  },
  {
    author: "Jeffrey Pfeffer",
    title: "Power",
    tags: ["Finance & Power", "Self-Improvement (Disguised)"],
    pretension: 3,
    description: `Everything Machiavelli said, but with footnotes and a Stanford syllabus. Pfeffer essentially wrote the user manual for organizational politics that HR desperately wishes didn\u2019t exist. Read it before your next performance review. Or before staging a quiet coup at the departmental offsite.`,
  },
  {
    author: "David Foster Wallace",
    title: "The Pale King",
    tags: ["Fiction & Literature", "Endurance Tests"],
    pretension: 5,
    description: `An unfinished novel about the IRS. Yes, the IRS. And somehow it\u2019s mesmerizing. Wallace managed to make boredom itself the subject, which is either the most brilliant literary gambit of the 21st century or the most elaborate prank ever played on a reader. You won\u2019t know which until page 300, and by then it\u2019s too late.`,
  },
  {
    author: "David Foster Wallace",
    title: "String Theory",
    tags: ["Fiction & Literature", "Cocktail Party Ammunition"],
    pretension: 4,
    description: `Five essays about tennis that contain approximately zero useful tips for improving your backhand. What they do contain is the closest anyone has come to explaining what it feels like to watch a human body do something impossible. Read it courtside at Wimbledon for maximum pretension, or on your couch in gym shorts for maximum honesty.`,
  },
  {
    author: "David Foster Wallace",
    title: "Brief Interviews with Hideous Men",
    tags: ["Fiction & Literature"],
    pretension: 4,
    description: `A collection of stories about deeply unpleasant people being deeply unpleasant in deeply inventive ways. It\u2019s the kind of book you read on the Tube and then hold face-down on your lap when someone sits next to you, lest they catch a paragraph and call the authorities.`,
  },
  {
    author: "Michael Lewis",
    title: "Going Infinite",
    tags: ["Finance & Power", "Cocktail Party Ammunition"],
    pretension: 2,
    description: `The Sam Bankman-Fried biography that reads like a thriller written by someone who wandered into a crime scene and just started taking notes. Lewis had the misfortune of embedding with his subject right as the entire enterprise collapsed in spectacular fashion, which, honestly, makes for a much better book than the one he planned to write.`,
  },
  {
    author: "David Graeber",
    title: "Debt: The First 5,000 Years",
    tags: ["Finance & Power", "Dead Philosophers", "Endurance Tests"],
    pretension: 5,
    description: `The book that will ruin every casual conversation you have about money for the rest of your life. Graeber argues, convincingly, that basically everything you think you know about economics is a pleasant fiction. Wonderful at dinner parties if your goal is to make the banker at the table quietly excuse himself to the terrace.`,
  },
  {
    author: "Jostein Gaarder",
    title: "Sophie\u2019s World",
    tags: ["Dead Philosophers", "Gateway Drugs"],
    pretension: 2,
    description: `A history of Western philosophy disguised as a young adult novel, or possibly a young adult novel disguised as a history of Western philosophy. Either way, it\u2019s how half the literate world first encountered Kant without developing a migraine. A charming gateway drug to existential dread.`,
  },
  {
    author: "Mikhail Bulgakov",
    title: "The Master and Margarita",
    tags: ["Fiction & Literature", "Cocktail Party Ammunition"],
    pretension: 5,
    description: `The Devil visits Stalinist Moscow, and things go about as well as you\u2019d expect. There\u2019s a giant talking cat, a severed head, and a witch\u2019s flight over the city. It\u2019s the funniest book ever written about totalitarianism, which is admittedly a thin category, but Bulgakov owns it completely.`,
  },
  {
    author: "Fred Brooks",
    title: "The Mythical Man-Month",
    tags: ["For the Builders", "Cocktail Party Ammunition"],
    pretension: 3,
    description: `Published in 1975 and still painfully accurate, which tells you everything you need to know about the software industry\u2019s capacity for self-improvement. Brooks\u2019s central thesis, that adding more people to a late project makes it later, has been ignored by every project manager in history. They keep buying the book, though.`,
  },
  {
    author: "Andrew Hunt & David Thomas",
    title: "The Pragmatic Programmer",
    tags: ["For the Builders"],
    pretension: 2,
    description: `The rare technical book that non-technical people can read without their eyes glazing over. It\u2019s essentially a collection of wise advice about building things properly, which means it\u2019s also a quiet indictment of approximately 90% of the software you use daily.`,
  },
  {
    author: "Don Norman",
    title: "The Design of Everyday Things",
    tags: ["For the Builders", "Self-Improvement (Disguised)"],
    pretension: 3,
    description: `After reading this, you will never push a door that says \u201cpull\u201d without feeling a small, righteous fury at the designer. Norman ruined doors, faucets, and stovetops for an entire generation of readers. You\u2019ll start noticing bad design everywhere, which is either enlightening or a curse. Probably both.`,
  },
  {
    author: "Tony Fadell",
    title: "Build",
    tags: ["For the Builders", "Self-Improvement (Disguised)"],
    pretension: 2,
    description: `Written by the man who helped create the iPod and then, apparently not satisfied, went on to reinvent the thermostat. It\u2019s a masterclass in building products, managing teams, and politely telling everyone in the room that their idea won\u2019t work. Essential reading for founders. Cautionary reading for their employees.`,
  },
  {
    author: "Jennifer Aaker & Naomi Bagdonas",
    title: "Humor, Seriously",
    tags: ["Self-Improvement (Disguised)", "Cocktail Party Ammunition"],
    pretension: 2,
    description: `A Stanford business school professor wrote a book arguing that humor is a strategic advantage in the workplace. The irony of an academic treatise on being funny is not lost on anyone, but the research is solid, and you\u2019ll walk away with a legitimate excuse to be less boring in meetings. Consider it a professional development expense.`,
  },
  {
    author: "Jack Schafer",
    title: "The Like Switch",
    tags: ["Self-Improvement (Disguised)"],
    pretension: 1,
    description: `Written by a former FBI behavioral analyst, which means the tips for making people like you come with the faint whiff of an interrogation room. It\u2019s charm offensive as a science. Read it before your next networking event and try not to feel like you\u2019re running a covert operation at the drinks table.`,
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    tags: ["Fiction & Literature", "Gateway Drugs"],
    pretension: 3,
    description: `You\u2019ve read it. You think you understood it. You didn\u2019t. Nobody does at seventeen. Go back and read it again, this time with a mortgage and a vague sense of your own mortality, and watch it transform from a love story into something far more unsettling. It\u2019s 180 pages. You have the time.`,
  },
  {
    author: "Stewart Brand",
    title: "Maintenance: Of Everything",
    tags: ["For the Builders", "Cocktail Party Ammunition"],
    pretension: 3,
    publisher: "Stripe Press",
    description: `A book about the deeply unglamorous act of keeping things from falling apart, which is, when you think about it, roughly 95% of civilization\u2019s actual job description. Brand makes the case that maintenance is more important than innovation, a thesis that will be enthusiastically endorsed by anyone who has ever owned a house built before 1970.`,
  },
  {
    author: "Cameron MacAllister",
    title: "Just Good Manners",
    tags: ["Self-Improvement (Disguised)", "Gateway Drugs"],
    pretension: 1,
    description: `A guide to courtesy that shouldn\u2019t need to exist and yet, given the state of things, very much does. It\u2019s the kind of book you buy for yourself and then accidentally leave on a colleague\u2019s desk. A slim, civilized reminder that saying \u201cplease\u201d and \u201cthank you\u201d remains, against all odds, a competitive advantage.`,
  },
  {
    author: "Kai-Fu Lee",
    title: "Empire of AI",
    tags: ["For the Builders", "Finance & Power"],
    pretension: 3,
    description: `For those who want to understand why the machines are coming and what they\u2019ll want when they get here. Lee writes with the calm authority of someone who has been building the future for decades and is only mildly concerned about the rest of us catching up.`,
  },
  {
    author: "Scott Kupor",
    title: "Secrets of Sand Hill Road",
    tags: ["Finance & Power", "For the Builders"],
    pretension: 2,
    description: `The venture capital playbook, written by someone who actually sits on Sand Hill Road and decides which dreams get funded and which get a polite \u201cwe\u2019ll circle back.\u201d Kupor demystifies term sheets, board dynamics, and the delicate art of taking someone\u2019s money while pretending you had other options. Required reading before your first pitch meeting. Therapeutic reading after your last one.`,
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Lord of the Rings",
    tags: ["Fiction & Literature", "Endurance Tests"],
    pretension: 3,
    description: `Three volumes, eleven hours of walking, and one very small person carrying the fate of civilization on a chain around his neck. It\u2019s the foundational text of modern fantasy and, not coincidentally, the foundational text of every argument you\u2019ve ever had about whether the Eagles could have just flown them to Mordor. (They couldn\u2019t. Stop asking.)`,
  },
  {
    author: "Ayn Rand",
    title: "The Fountainhead",
    tags: ["Fiction & Literature", "Finance & Power"],
    pretension: 3,
    description: `A novel about an architect who would rather dynamite his own building than compromise his vision. It\u2019s the favorite book of every 22-year-old who just got their first apartment and their first opinion about zoning laws. You\u2019ll either find it electrifying or insufferable, and whichever camp you land in, you\u2019ll stay there permanently.`,
  },
  {
    author: "Robert A. Heinlein",
    title: "The Moon Is a Harsh Mistress",
    tags: ["Fiction & Literature", "Cocktail Party Ammunition"],
    pretension: 3,
    description: `A lunar colony revolts against Earth, guided by a sentient computer and a one-armed political agitator. Heinlein wrote it in 1966 and somehow predicted decentralized governance, AI companions, and the general temperament of anyone who has ever described themselves as a \u201clibertarian space enthusiast.\u201d Disturbingly prescient.`,
  },
  {
    author: "Roland Barthes",
    title: "Camera Lucida",
    tags: ["Dead Philosophers", "Cocktail Party Ammunition"],
    pretension: 5,
    description: `Barthes wrote a book about photography and accidentally wrote the most devastating meditation on grief since the invention of the funeral. He spends half the book developing an elaborate theory of the image and the other half trying not to cry about his mother. The result is 119 pages of exquisite French melancholy that will make you look at every photograph you\u2019ve ever taken and think, \u201cwell, that\u2019s ruined now.\u201d Essential reading for anyone who has ever described a snapshot as \u201chaunting.\u201d`,
  },
  {
    author: "Antoine de Saint-Exup\u00e9ry",
    title: "The Little Prince",
    tags: ["Fiction & Literature", "Gateway Drugs"],
    pretension: 2,
    description: `A children\u2019s book that isn\u2019t really a children\u2019s book, about a small boy on a small asteroid who asks enormous questions. You\u2019ll read it in an hour and think about it for the rest of your life. It\u2019s the only book on this list that might actually make you a better person, which is either a recommendation or a warning, depending on how comfortable you are with sincerity.`,
  },
];

const ALL_TAGS = [
  "Fiction & Literature",
  "Finance & Power",
  "Dead Philosophers",
  "For the Builders",
  "Self-Improvement (Disguised)",
  "Cocktail Party Ammunition",
  "Endurance Tests",
  "Gateway Drugs",
];

const TAG_DESCRIPTIONS: Record<string, string> = {
  "Fiction & Literature": "Stories that will ruin your commute in the best way",
  "Finance & Power": "For aspiring overlords and reluctant capitalists",
  "Dead Philosophers": "They can\u2019t argue back, which is the whole appeal",
  "For the Builders": "Read these before shipping. Or after the postmortem.",
  "Self-Improvement (Disguised)": "Books that trick you into becoming competent",
  "Cocktail Party Ammunition": "One-book shortcuts to seeming interesting",
  "Endurance Tests": "You\u2019ll need a bookmark, a chiropractor, and six months",
  "Gateway Drugs": "Start here. We\u2019ll wait.",
};

const TAG_STYLE_MAP: Record<string, string> = {
  "Fiction & Literature": styles.tagFiction,
  "Finance & Power": styles.tagFinance,
  "Dead Philosophers": styles.tagPhilosophers,
  "For the Builders": styles.tagBuilders,
  "Self-Improvement (Disguised)": styles.tagSelfImprovement,
  "Cocktail Party Ammunition": styles.tagCocktail,
  "Endurance Tests": styles.tagEndurance,
  "Gateway Drugs": styles.tagGateway,
};

const pretensionLabels = [
  "",
  "Beach Read",
  "Coffee Table",
  "Dinner Party",
  "Oxford Tutorial",
  "Insufferable",
];

function PretensionMeter({ level }: { level: number }) {
  return (
    <div className={styles.pretensionRow}>
      <span className={styles.pretensionLabel}>Pretension:</span>
      <div className={styles.pretensionDots}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={i <= level ? styles.pretensionDotFilled : styles.pretensionDotEmpty}
          />
        ))}
      </div>
      <span className={styles.pretensionName}>{pretensionLabels[level]}</span>
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.bookCard} onClick={() => setExpanded(!expanded)}>
      <div className={styles.bookHeader}>
        <div className={styles.bookInfo}>
          <div className={styles.bookTitleRow}>
            <h3 className={styles.bookTitle}>{book.title}</h3>
            {book.publisher && (
              <span className={styles.bookPublisher}>{book.publisher}</span>
            )}
          </div>
          <p className={styles.bookAuthor}>{book.author}</p>
        </div>
        <div className={`${styles.expandToggle} ${expanded ? styles.expandToggleOpen : ''}`}>
          +
        </div>
      </div>

      <div className={styles.bookTags}>
        {book.tags.map((tag) => (
          <span
            key={tag}
            className={`${styles.bookTag} ${TAG_STYLE_MAP[tag] || ''}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={`${styles.expandable} ${expanded ? styles.expandableOpen : ''}`}>
        <p className={styles.bookDescription}>{book.description}</p>
        <PretensionMeter level={book.pretension} />
      </div>
    </div>
  );
}

export default function ReadingList() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('editorial');

  const filtered = useMemo(() => {
    let result = books;
    if (activeTag) {
      result = result.filter((b) => b.tags.includes(activeTag));
    }
    if (sortBy === 'pretension-high') {
      result = [...result].sort((a, b) => b.pretension - a.pretension);
    } else if (sortBy === 'pretension-low') {
      result = [...result].sort((a, b) => a.pretension - b.pretension);
    } else if (sortBy === 'alpha') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }
    return result;
  }, [activeTag, sortBy]);

  return (
    <section id="reading-list" className={styles.section}>
      <div className={styles.chapterNumber}>III.</div>
      <h2 className={styles.chapterTitle}>The Reading List</h2>
      <div className={styles.headerRule} />
      <p className={styles.subtitle}>
        A curated library for the ambitious, the curious,
        and the profoundly unbothered.
      </p>

      <div className={styles.resultsBar}>
        <span className={styles.resultsText}>
          {filtered.length === 0
            ? "No books found."
            : filtered.length === 1
            ? "1 title"
            : `${filtered.length} titles`}
        </span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="editorial">Editorial Order</option>
          <option value="alpha">A to Z</option>
          <option value="pretension-high">Most Insufferable First</option>
          <option value="pretension-low">Least Insufferable First</option>
        </select>
      </div>

      <div className={styles.tags}>
        <button
          onClick={() => setActiveTag(null)}
          className={`${styles.tagButton} ${!activeTag ? styles.tagButtonActive : ''}`}
        >
          [All]
        </button>
        {ALL_TAGS.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(isActive ? null : tag)}
              className={`${styles.tagButton} ${isActive ? styles.tagButtonActive : ''}`}
            >
              [{tag}]
            </button>
          );
        })}
      </div>

      <div>
        {filtered.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerNote}>
          <strong>A Note on These Selections:</strong> If you find any of the
          following too taxing, there is always T.S. Eliot. One needn&rsquo;t
          understand <em>The Waste Land</em>; one simply needs to look profoundly
          depressed while holding a copy of it near a fountain.
        </p>
      </div>
    </section>
  );
}
