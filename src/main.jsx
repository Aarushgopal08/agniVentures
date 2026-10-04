import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const principles = [
  {
    number: '01',
    title: 'Solve real problems',
    copy: 'We start with usefulness: work that makes a difficult process clearer, simpler, or more possible.',
  },
  {
    number: '02',
    title: 'Build traction',
    copy: 'We earn our way forward by listening closely, delivering well, and proving that people value the outcome.',
  },
  {
    number: '03',
    title: 'Think bigger',
    copy: 'We use the insight from one chapter to shape products, brands, and ventures that can reach further.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Serve people well',
    copy: 'Deliver thoughtful, reliable immigration support that gives clients a genuinely better experience.',
  },
  {
    number: '02',
    title: 'Spot repeat problems',
    copy: 'Listen for the questions and bottlenecks that come up again and again across client journeys.',
  },
  {
    number: '03',
    title: 'Turn insight into tools',
    copy: 'When the right problem is proven, shape a simple service, system, or product that can reach more people.',
  },
];

const navLinks = [
  ['About', '#about'],
  ['Portfolio', '#portfolio'],
  ['Approach', '#approach'],
  ['Founder', '#founder'],
];

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#top" aria-label="AGNI Ventures home">
      <svg className="brand-flame" viewBox="0 0 30 38" aria-hidden="true">
        <path fill="#ff4d16" d="M15 0C12 8 3 12 3 23.2 3 31.3 8.2 38 15 38s12-6.7 12-14.8C27 12 18 8 15 0Z" />
        <path fill="#ffbd71" d="M15 13c-1.6 4.2-6.3 6.5-6.3 12.1 0 4.4 2.8 7.8 6.3 7.8s6.3-3.4 6.3-7.8C21.3 19.5 16.6 17.2 15 13Z" />
      </svg>
      <span className="brand-type"><strong>AGNI</strong><small>VENTURES</small></span>
    </a>
  );
}

function Eyebrow({ children, className = '' }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          <a className="nav-contact" href="#contact">Start a conversation</a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
        <a href="#contact" onClick={closeMenu}>Start a conversation</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero-content">
        <Eyebrow className="hero-topline">Founder-led venture</Eyebrow>
        <div className="hero-copy">
          <h1 id="hero-heading">Building useful things from real-world problems.</h1>
          <div className="hero-aside">
            <p>AGNI Ventures is a founder-led company by Aarush Gopal. We start with real problems, earn insight through real work, and build services, tools, and businesses with room to grow.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#portfolio">Our first chapter</a>
              <a className="button button-ghost" href="#founder">Meet the founder</a>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <a className="scroll-cue" href="#about"><span><i /></span> Scroll to explore</a>
          <p className="hero-statement">Current focus: immigration support. Long-term focus: useful businesses that create clarity, opportunity, and momentum.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="intro" aria-labelledby="about-heading">
      <div className="wrap intro-grid">
        <div>
          <Eyebrow>What AGNI stands for</Eyebrow>
          <h2 id="about-heading">A company designed to evolve.</h2>
        </div>
        <div className="intro-right">
          <p>AGNI is not limited to one industry. We begin wherever people have a real need, develop a deep understanding of the problem, then grow trusted services into systems, digital tools, and standalone businesses.</p>
          <div className="principles">
            {principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisaGuruArt() {
  return (
    <div className="product-art" role="img" aria-label="Abstract illustration of The VisaGuru passport and client progress">
      <div className="passport">
        <div className="passport-brand">
          <svg className="tiny-flame" viewBox="0 0 18 21" aria-hidden="true"><path fill="#FF6A2A" d="M9 0C6.9 4.1 3 6.3 3 11.8 3 16.8 5.7 21 9 21s6-4.2 6-9.2C15 6.3 11.1 4.1 9 0Z" /><path fill="#FFD07A" d="M9 6.7c-1 2.4-2.9 3.7-2.9 6.4 0 2.4 1.3 4.3 2.9 4.3s2.9-1.9 2.9-4.3C11.9 10.4 10 9.1 9 6.7Z" /></svg>
          THE VISAGURU
        </div>
        <div className="passport-title">Your path,<br />made clearer.</div>
        <div className="passport-sub">Practical immigration support</div>
      </div>
      <div className="status-chip"><small>Client progress</small><strong><span className="status-dot" />10 clients served</strong></div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" aria-labelledby="portfolio-heading">
      <div className="wrap">
        <div className="portfolio-heading">
          <div>
            <Eyebrow>The work we’re doing today</Eyebrow>
            <h2 id="portfolio-heading">One client at a time. One clearer path forward.</h2>
          </div>
          <p>Our first chapter is immigration support. It gives us a focused way to earn trust, understand a complicated system, and grow from genuine demand.</p>
        </div>
        <article className="product-card">
          <div className="product-copy">
            <div>
              <span className="product-label">Where we’re starting</span>
              <h3>The VisaGuru</h3>
              <p>A hands-on immigration support service helping people prepare for visa applications with more structure, clarity, and confidence.</p>
            </div>
            <a className="product-link" href="#contact">Talk about your application</a>
          </div>
          <VisaGuruArt />
        </article>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="approach" aria-labelledby="approach-heading">
      <div className="wrap approach-grid">
        <div>
          <Eyebrow>How we will grow</Eyebrow>
          <h2 id="approach-heading">Start small. Earn trust. Build leverage.</h2>
          <p className="approach-intro">There is no need to pretend the whole company is already figured out. Our job now is to become excellent at one useful thing, understand the market deeply, and let evidence guide the next bet.</p>
        </div>
        <div className="process-list">
          {processSteps.map((step) => (
            <article className="process" key={step.number}>
              <span className="process-no">{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.copy}</p></div>
              <span className="process-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Future() {
  return (
    <section className="future" aria-labelledby="future-heading">
      <div className="wrap future-inner">
        <div>
          <Eyebrow>The bigger ambition</Eyebrow>
          <h2 id="future-heading">Build something people know because it truly helps.</h2>
        </div>
        <div className="future-copy">
          <p>Big businesses rarely begin with a perfect grand plan. They begin with a real problem, a customer who will pay, and a founder who keeps improving. AGNI is here to build that foundation—with useful work today and bigger, better ideas tomorrow.</p>
          <div className="future-values"><span>Trust first</span><span>Learn fast</span><span>Build useful</span><span>Think long-term</span></div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="founder" aria-labelledby="founder-heading">
      <div className="wrap">
        <article className="founder-card">
          <div>
            <Eyebrow>Who’s building AGNI</Eyebrow>
            <h2 id="founder-heading">Aarush<br />Gopal.</h2>
            <p className="founder-role">Founder, AGNI Ventures</p>
          </div>
          <p className="founder-copy">AGNI Ventures is a founder-led company by Aarush Gopal. We start with real problems, earn insight through real work, and build services, tools, and businesses with room to grow.</p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="wrap contact-grid">
        <div>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2 id="contact-heading">Need help with an immigration application?</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" placeholder="Your name" required /></div>
            <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></div>
          </div>
          <div className="field"><label htmlFor="message">What are you thinking?</label><textarea id="message" name="message" rows="3" placeholder="Tell us a little about it" required /></div>
          <button className="button" type="submit">Send inquiry</button>
          <p className="form-note" aria-live="polite">{submitted ? 'Thank you — this draft form is ready to connect to your preferred inbox when the site goes live.' : ''}</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <Brand footer />
        <span>© {new Date().getFullYear()} AGNI Ventures. Starting with real work.</span>
        <div className="footer-links"><a href="#about">About</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a></div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Portfolio />
        <Approach />
        <Future />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
