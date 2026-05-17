import { useState, useEffect, useRef, createContext, useContext } from 'react';

const RouterCtx = createContext({ path: '/', go: () => {} });
const useRouter = () => useContext(RouterCtx);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// Shared services list — referenced by Home + Services + Contact form (order matches nav + brief)
const SERVICES = [
  { id: 'seo', title: 'SEO', desc: 'Keyword research, on-page, off-page and technical SEO that compounds traffic month over month.', img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&q=80', tags: ['On-page', 'Technical', 'Off-page'] },
  { id: 'social', title: 'Social Media Marketing', desc: 'Strategy, content, and community management that grows engagement and brand affinity.', img: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=900&q=80', tags: ['Strategy', 'Creative', 'Community'] },
  { id: 'content', title: 'Content Writing', desc: 'Engaging, value-driven content built around your audience and search intent.', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80', tags: ['Long-form', 'SEO copy', 'Editorial'] },
  { id: 'ads', title: 'Google Ads', desc: 'Targeted search and display campaigns built to maximize ROI on every rupee spent.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80', tags: ['Search', 'Display', 'Performance'] },
  { id: 'web', title: 'Website Development', desc: 'Responsive, fast, user-friendly websites with ongoing support and maintenance.', img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80', tags: ['Responsive', 'CMS', 'Maintenance'] },
  { id: 'product', title: 'Software & Product Development', desc: 'MVPs, web apps, and internal tools — discovery through launch, with maintainable code and clear handoff.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80', tags: ['React', 'APIs', 'Shipping'] },
  { id: 'video', title: 'Video Editing', desc: 'Professional edits, transitions, and audio mixing for ads, reels, and brand films.', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80', tags: ['Reels', 'Ads', 'Brand films'] },
  { id: 'logo', title: 'Logo Design', desc: 'Distinctive brand identities — marks, wordmarks, and the system around them.', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=80', tags: ['Identity', 'Wordmark', 'Guidelines'] },
];

function Logo({ tone = 'dark' }) {
  const ink = tone === 'dark' ? '#012329' : '#FDFEFE';
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-xl bg-midnight"></div>
        <div className="absolute inset-[3px] rounded-[8px] bg-cyan grid place-items-center">
          <span className="font-display font-black text-midnight text-[18px] leading-none">M</span>
        </div>
      </div>
      <div className="leading-none">
        <div className="font-display font-extrabold text-[16px]" style={{ color: ink, letterSpacing: '-0.03em' }}>Maittreya</div>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: tone === 'dark' ? '#3A4A50' : '#AAEEFF' }}>Digital Services</div>
      </div>
    </div>
  );
}

function Nav() {
  const { path, go } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [path]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services', dropdown: true },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const dropItems = SERVICES.map((s) => [s.title, `/services#${s.id}`]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line shadow-[0_4px_20px_-12px_rgba(0,73,83,0.12)]' : 'bg-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
        <a href="/" onClick={(e) => { e.preventDefault(); go('/'); }} className="shrink-0"><Logo /></a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => l.dropdown ? (
            <div key={l.href} className="relative" ref={dropRef} onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
                className={`flex items-center gap-1 px-4 py-2 rounded-full font-sans text-[14px] font-medium transition-all ${path === l.href || path.startsWith('/services') ? 'text-midnight' : 'text-ink hover:text-midnight'}`}>
                {l.label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${dropOpen ? 'rotate-180' : ''}`}><path d="m2 4 3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </a>
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${dropOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-64 rounded-2xl bg-paper border border-line shadow-xl p-2">
                  {dropItems.map(([n, h]) => (
                    <a key={n} href={h} onClick={(e) => { e.preventDefault(); go(h); }}
                      className="block px-3 py-2.5 rounded-lg text-[13px] text-ink hover:bg-cyan-soft hover:text-midnight transition-colors">
                      {n}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
              className={`px-4 py-2 rounded-full font-sans text-[14px] font-medium transition-all ${(path === l.href || (l.href !== '/' && path.startsWith(l.href + '/'))) ? 'text-midnight' : 'text-ink hover:text-midnight'}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="/contact" onClick={(e) => { e.preventDefault(); go('/contact'); }}
            className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-[13px] font-semibold">
            Let's Talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <button className="md:hidden w-10 h-10 grid place-items-center rounded-lg hover:bg-line/60" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
          <div className="space-y-[5px]">
            <span className={`block w-5 h-[2px] bg-midnight transition-transform ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-midnight transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-midnight transition-transform ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </div>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? 'max-h-[600px]' : 'max-h-0'} bg-paper border-b border-line`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
              className={`py-3 px-3 rounded-lg font-sans text-[15px] font-medium ${path === l.href ? 'text-paper bg-midnight' : 'text-ink'}`}>
              {l.label}
            </a>
          ))}
          <a href="/contact" onClick={(e) => { e.preventDefault(); go('/contact'); }} className="btn-primary mt-2 text-center px-5 py-3 rounded-full font-sans text-[14px] font-semibold">Let's Talk</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const { go } = useRouter();
  return (
    <footer className="bg-midnight-900 text-paper relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(170,238,255,0.12), transparent)' }}></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-20 pb-10 relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 text-[15px] leading-relaxed text-cyan-soft/80 max-w-md">
              Digital marketing and product development for teams in India and the United States — senior-led, transparent, and built to convert.
            </p>
            <ul className="mt-6 space-y-2 text-[13px] text-paper/70">
              <li>hello@maittreya.in</li>
              <li>+91 99204 12345</li>
              <li>BKC, Mumbai 400051</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan mb-4">Services</div>
            <ul className="space-y-3 text-[14px]">
              {SERVICES.map((s) => (
                <li key={s.id}><a href={`/services#${s.id}`} onClick={(e)=>{e.preventDefault();go(`/services#${s.id}`);}} className="text-paper/80 hover:text-cyan transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan mb-4">Company</div>
            <ul className="space-y-3 text-[14px]">
              {[['About', '/about'], ['Blog', '/blog'], ['Contact', '/contact'], ['Privacy Policy', '/privacy']].map(([l, h]) => (
                <li key={h}><a href={h} onClick={(e) => { e.preventDefault(); go(h); }} className="text-paper/80 hover:text-cyan transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cyan/15 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[12px] text-paper/50">
          <div>© {new Date().getFullYear()} Maittreya Digital Services. All rights reserved.</div>
          <div className="flex gap-6">
            {['LinkedIn','Instagram','Twitter','YouTube'].map((s) => <a key={s} href="#" className="hover:text-cyan">{s}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Section({ children, className = '', id }) {
  return <section id={id} className={`max-w-[1280px] mx-auto px-6 md:px-10 ${className}`}>{children}</section>;
}

function Eyebrow({ children, dark = false }) {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase ${dark ? 'text-cyan' : 'text-midnight'}`}>
      <span className={`w-6 h-px ${dark ? 'bg-cyan' : 'bg-midnight'}`}></span>
      {children}
    </div>
  );
}

function PageWrap({ children, k }) { return <div key={k} className="page-fade">{children}</div>; }

function Banner({ src, alt, ratio = '16/9', overlay = true, className = '', children }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-midnight ${className}`} style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
      {overlay && <div className="absolute inset-0 bg-gradient-to-tr from-midnight/40 via-midnight/5 to-transparent"></div>}
      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
}

// Lead form — used on Home and Contact
function LeadForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: SERVICES[0].title });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => {
    const v = e.target.value;
    if (k === 'message' && v.length > 300) return;
    setForm({ ...form, [k]: v });
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    else if (!/^[+0-9 ()-]{7,}$/.test(form.phone)) e.phone = 'Invalid phone';
    if (!form.message.trim()) e.message = 'Required';
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-full bg-cyan-soft grid place-items-center mx-auto">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="m5 11 4 4 8-9" stroke="#004953" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="mt-6 font-display font-extrabold text-[24px] text-ink">Thanks, {form.name.split(' ')[0]}.</h3>
        <p className="mt-2 text-[14px] text-ink-soft">We'll be in touch within one working day.</p>
      </div>
    );
  }

  const serviceTitles = SERVICES.map((s) => s.title);

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className={compact ? 'grid md:grid-cols-2 gap-4' : 'grid md:grid-cols-2 gap-4'}>
        <FormField label="Full Name" error={errors.name}>
          <input value={form.name} onChange={update('name')} className="form-input" placeholder="Your full name" />
        </FormField>
        <FormField label="Email" error={errors.email}>
          <input type="email" value={form.email} onChange={update('email')} className="form-input" placeholder="you@company.com" />
        </FormField>
      </div>
      <FormField label="Contact Number" error={errors.phone}>
        <input value={form.phone} onChange={update('phone')} className="form-input" placeholder="+91 99204 12345" />
      </FormField>
      <FormField label="Service of Interest">
        <div className="flex flex-wrap gap-2">
          {serviceTitles.map((s) => (
            <button key={s} type="button" onClick={() => setForm({ ...form, service: s })}
              className={`px-3.5 py-2 rounded-full text-[12px] font-medium transition-all border ${form.service === s ? 'bg-midnight text-paper border-midnight' : 'bg-paper border-line text-ink-soft hover:border-midnight'}`}>
              {s}
            </button>
          ))}
        </div>
      </FormField>
      <FormField label="Message" error={errors.message} hint={`${form.message.length}/300`}>
        <textarea value={form.message} onChange={update('message')} rows={4} className="form-input resize-none" placeholder="Tell us about your project (max 300 characters)" />
      </FormField>
      <button type="submit" disabled={submitting} className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-[14px] font-semibold disabled:opacity-60">
        {submitting ? <><span className="w-4 h-4 border-2 border-paper/40 border-t-paper rounded-full animate-spin"></span> Sending…</> : <>Submit <span>→</span></>}
      </button>
      <style>{`
        .form-input { width: 100%; padding: 12px 14px; background: #FDFEFE; border: 1px solid #E6ECEE; border-radius: 12px; font-size: 14px; color: #0B1418; transition: border-color 200ms, box-shadow 200ms; font-family: 'Inter', system-ui, sans-serif; }
        .form-input:focus { outline: none; border-color: #004953; box-shadow: 0 0 0 4px rgba(0,73,83,0.08); }
      `}</style>
    </form>
  );
}

function FormField({ label, error, hint, children }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-midnight">{label}</span>
        {error && <span className="text-[11px] text-rose-600 font-medium">{error}</span>}
        {hint && !error && <span className="text-[10px] font-mono text-ink-soft">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

// FAQ Accordion (shared)
function FAQItem({ q, a, open: openProp, onToggle }) {
  const [openInternal, setOpenInternal] = useState(false);
  const open = openProp !== undefined ? openProp : openInternal;
  const handleToggle = onToggle ?? (() => setOpenInternal(!openInternal));
  return (
    <div className="reveal">
      <button onClick={handleToggle} className="w-full text-left py-6 flex items-start justify-between gap-6 group">
        <span className="font-display font-bold text-[17px] md:text-[19px] text-ink group-hover:text-midnight transition-colors">{q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full border border-line grid place-items-center transition-all ${open ? 'bg-midnight text-paper border-midnight rotate-45' : 'text-midnight'}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <p className="pb-6 text-[15px] text-ink-soft leading-relaxed max-w-2xl">{a}</p>
      </div>
    </div>
  );
}

export {
  RouterCtx,
  useRouter,
  useReveal,
  SERVICES,
  Logo,
  Nav,
  Footer,
  Section,
  Eyebrow,
  PageWrap,
  Banner,
  LeadForm,
  FAQItem,
};
