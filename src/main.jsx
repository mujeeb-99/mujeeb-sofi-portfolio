import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Download, Github, Linkedin,
  Mail, Menu, X, Layers3, Database, Monitor, Terminal, ExternalLink,
  Send, Sparkles, BriefcaseBusiness, GraduationCap, MapPin
} from 'lucide-react';
import './styles.css';

const skills = [
  { name: 'HTML5', level: 'Strong foundation', color: 'orange' },
  { name: 'CSS3', level: 'Strong foundation', color: 'blue' },
  { name: 'JavaScript', level: 'Building expertise', color: 'yellow' },
  { name: 'React', level: 'Frontend development', color: 'cyan' },
  { name: 'Tailwind CSS', level: 'Modern styling', color: 'teal' },
  { name: 'Node.js', level: 'Backend fundamentals', color: 'green' },
  { name: 'SQL / MySQL', level: 'Database querying', color: 'blue' },
  { name: 'MongoDB', level: 'NoSQL fundamentals', color: 'green' },
  { name: 'Python', level: 'Scripting & data', color: 'yellow' },
  { name: 'Git & GitHub', level: 'Version control', color: 'orange' },
  { name: 'PHP', level: 'Web development', color: 'purple' },
  { name: 'Tableau', level: 'Data visualization', color: 'cyan' }
];

const projects = [
  { number: '01', title: 'BookStack', category: 'WEB DEVELOPMENT', description: 'A library management website for polytechnic students to discover eBooks and study resources.', tech: ['HTML', 'CSS', 'JavaScript', 'PHP'], icon: Layers3, gradient: 'project-blue', link: 'https://github.com/' },
  { number: '02', title: 'Web Scraping Analytics', category: 'DATA VISUALIZATION', description: 'A dashboard concept that turns scraped data into clear insights and visual stories with Tableau.', tech: ['Python', 'Pandas', 'Tableau'], icon: Monitor, gradient: 'project-violet', link: 'https://github.com/' },
  { number: '03', title: 'Automatic Backup System', category: 'PYTHON AUTOMATION', description: 'A Python script concept for automating file backups and making routine data protection easier.', tech: ['Python', 'Automation', 'Scheduling'], icon: Database, gradient: 'project-cyan', link: 'https://github.com/' },
  { number: '04', title: 'Traffic Sign Recognition', category: 'MACHINE LEARNING', description: 'An ML project exploring image classification to recognize common road and traffic signs.', tech: ['Python', 'Machine Learning', 'OpenCV'], icon: Code2, gradient: 'project-pink', link: 'https://github.com/' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const navigate = (item) => {
    setActive(item);
    setMenuOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Hi Mujeeb,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:mujeebsofi99@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => setActive('Home')}>Portfolio<span>.</span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(item => <button key={item} className={active === item ? 'nav-link active' : 'nav-link'} onClick={() => navigate(item)}>{item}</button>)}
        </nav>
        <a className="header-cta" href="#contact" onClick={() => setActive('Contact')}><Mail size={15} /> Let's Talk</a>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" /> Available for opportunities</div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Mujeeb <span>Sofi</span><b>.</b></h1>
            <h2>Software Developer<br /><span>Full Stack Developer</span></h2>
            <p className="hero-description">I build clean, responsive, and user-friendly digital experiences — from thoughtful interfaces to practical web applications.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('Projects')}>Explore My Work <ArrowRight size={17} /></button>
              <button className="btn btn-secondary" onClick={() => navigate('Contact')}>Get in Touch <ArrowUpRight size={16} /></button>
            </div>
            <div className="social-row">
              <a href="https://github.com/mujeeb-99" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href="https://www.linkedin.com/in/mujeeb-sofi-308381233" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:mujeebsofi99@gmail.com" aria-label="Email"><Mail /></a>
              <span className="social-caption">Let's build something meaningful</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="photo-frame"><img src="/mujeeb-sofi.jpeg" alt="Portrait of Mujeeb Sofi" /></div>
            <div className="float-card code-card"><div className="float-icon"><Code2 size={20} /></div><strong>Clean code.</strong><span>Thoughtful solutions.</span></div>
            <div className="float-card stack-card"><div className="stack-item"><Monitor /><span><b>Frontend</b><small>React · Tailwind</small></span></div><div className="stack-item"><Terminal /><span><b>Backend</b><small>Node.js · APIs</small></span></div><div className="stack-item"><Database /><span><b>Data</b><small>SQL · MongoDB</small></span></div></div>
            <div className="visual-caption"><Sparkles size={16} /> Curious mind. Builder's mindset.</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip section-wrap">
          <div><span className="strip-label">01 / THE DEVELOPER</span><p>Turning ideas into <em>useful digital products.</em></p></div>
          <div className="strip-stat"><strong>Frontend</strong><span>Craft & experience</span></div>
          <div className="strip-stat"><strong>Full Stack</strong><span>End-to-end thinking</span></div>
          <div className="strip-stat"><strong>Always</strong><span>Learning & improving</span></div>
        </section>

        <section className="section-wrap content-section" id="about">
          <div className="section-heading"><div><span className="eyebrow">A LITTLE ABOUT ME</span><h2>Building with purpose<span>.</span></h2></div><span className="section-index">01 — 04</span></div>
          <div className="about-grid">
            <article className="glass-card about-card">
              <div className="card-icon"><Sparkles /></div><h3>Who I am</h3>
              <p>I'm Mujeeb Sofi, a software developer focused on creating modern web experiences. I enjoy solving problems, learning new technologies, and turning ideas into simple, useful products.</p>
              <p>My interests span frontend development, full-stack applications, databases, and data-driven projects. I'm eager to learn from a team and contribute to real-world software.</p>
              <div className="about-meta"><span><GraduationCap size={17} /> B.Tech · Computer Science</span><span><MapPin size={17} /> Kashmir, India</span></div>
            </article>
            <article className="glass-card approach-card"><span className="eyebrow">MY APPROACH</span><h3>Good software is more than code.</h3><p>It's about understanding people, making complex things feel simple, and paying attention to the details.</p><div className="approach-list"><div><span>01</span><b>Understand the problem</b></div><div><span>02</span><b>Design a clear solution</b></div><div><span>03</span><b>Build, test, improve</b></div></div></article>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <div className="section-heading"><div><span className="eyebrow">TOOLS OF THE TRADE</span><h2>Skills & technologies<span>.</span></h2></div><span className="section-index">02 — 04</span></div>
          <div className="skills-layout">
            <div className="skills-intro"><Code2 size={27} /><h3>My toolkit</h3><p>A growing set of tools I use to design, develop, and understand digital products. I believe in strong fundamentals and continuous learning.</p><div className="skill-note"><span className="pulse-dot" /> Open to learning your stack</div></div>
            <div className="skill-grid">{skills.map((skill, i) => <div className="skill-chip" key={skill.name} style={{'--delay': `${i * 35}ms`}}><span className={`skill-mark ${skill.color}`}>{skill.name.slice(0, 1)}</span><span><b>{skill.name}</b><small>{skill.level}</small></span><ArrowUpRight className="chip-arrow" size={15} /></div>)}</div>
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <div className="section-heading"><div><span className="eyebrow">SELECTED WORK</span><h2>Projects in progress<span>.</span></h2><p className="heading-sub">A few projects that reflect my curiosity and hands-on learning.</p></div><span className="section-index">03 — 04</span></div>
          <div className="project-grid">{projects.map(project => { const Icon = project.icon; return <article className="project-card" key={project.number}><div className={`project-art ${project.gradient}`}><span className="project-number">{project.number} / PROJECT</span><div className="art-orbit" /><div className="art-icon"><Icon size={37} /></div><div className="art-lines"><i /><i /><i /></div><a href={project.link} target="_blank" rel="noreferrer" className="project-open" aria-label={`Open ${project.title} on GitHub`}><ArrowUpRight /></a></div><div className="project-info"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div><a className="text-link" href={project.link} target="_blank" rel="noreferrer">View project <ArrowRight size={15} /></a></div></article>; })}</div>
          <p className="project-disclaimer">Project links currently point to GitHub's homepage. Replace them with your repository URLs before publishing.</p>
        </section>

        <section className="section-wrap content-section experience-section" id="experience">
          <div className="section-heading"><div><span className="eyebrow">THE JOURNEY</span><h2>Learning by doing<span>.</span></h2></div><span className="section-index">04 — 04</span></div>
          <div className="timeline"><div className="timeline-marker"><BriefcaseBusiness size={19} /></div><div className="timeline-content"><span className="timeline-date">CURRENT FOCUS</span><h3>Software & Full Stack Development</h3><p>Strengthening frontend fundamentals, exploring React-based interfaces, practicing database design, and building practical projects to prepare for an entry-level software development role.</p><div className="tech-list"><span>Build</span><span>Learn</span><span>Iterate</span></div></div><div className="timeline-side">Next chapter<br /><span>In progress ↗</span></div></div>
        </section>

        <section className="contact-band section-wrap" id="contact"><div className="contact-glow" /><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let's make something <span>great.</span></h2><p>Have an opportunity, idea, or just want to say hello? My inbox is open.</p></div><a href="mailto:mujeeb.sofi@example.com" className="btn btn-primary">Contact Mujeeb <ArrowUpRight size={17} /></a></section>

        <section className="section-wrap contact-section">
          <div className="contact-copy"><span className="eyebrow">GET IN TOUCH</span><h2>Start a conversation<span>.</span></h2><p>Use the form to draft an email. Update the placeholder email address in the source code before going live.</p><a className="contact-email" href="mailto:mujeeb.sofi@example.com"><Mail size={18} /> mujeebsofi99@gmail.com</a></div>
          <form className="contact-form glass-card" onSubmit={submitForm}><div className="form-row"><label>Your name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Full name" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" /></label></div><label>Message<textarea required rows="4" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell me a little about what you have in mind..." /></label><button className="btn btn-primary form-submit" type="submit">Draft email <Send size={16} /></button>{sent && <p className="form-hint">Your email app should open with your message. If it didn't, check the placeholder email address in the source.</p>}</form>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="brand" href="#home">mujeeb<span>.</span></a><p>Designed with curiosity. Built with code.</p><span>© {new Date().getFullYear()} Mujeeb Sofi</span><button className="back-top" onClick={() => navigate('Home')}>Back to top ↑</button></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);