'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  useReveal,
  SERVICES,
  Section,
  Eyebrow,
  Banner,
  FAQItem,
  LeadForm,
} from '@/components/shared';
import { BLOG_POSTS } from '@/data/blogPosts';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V4M8 20v-6m4 6V8m4 12v-9m4 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 0 1-4-.8L3 20l1.8-3.6A7.96 7.96 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceFlipCard({ s, href }) {
  const router = useRouter();
  return (
    <div className="flip-card h-[360px] cursor-pointer" onClick={() => router.push(href)}>
      <div className="flip-inner rounded-2xl shadow-lg shadow-midnight/5 transition-shadow duration-300 hover:shadow-xl">
        <div className="flip-face rounded-2xl overflow-hidden border border-line bg-paper">
          <div className="relative h-[200px] overflow-hidden">
            <img src={s.img} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
              {s.tags.slice(0, 2).map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-paper/95 text-midnight text-[10px] font-mono uppercase tracking-wider">{t}</span>
              ))}
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-display font-bold text-[20px] text-ink">{s.title}</h3>
            <p className="mt-2 text-[13px] text-ink-soft leading-relaxed line-clamp-3">{s.desc}</p>
          </div>
        </div>
        <div className="flip-face flip-back rounded-2xl bg-midnight text-paper p-7 flex flex-col">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cyan">{s.title}</div>
          <h3 className="mt-3 font-display font-bold text-[24px] leading-tight">What we deliver</h3>
          <p className="mt-3 text-[13px] leading-relaxed text-paper/80 flex-1">{s.desc}</p>
          <ul className="mt-4 space-y-1.5 text-[12px] text-paper/85">
            {s.tags.map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan" />{t}</li>
            ))}
          </ul>
          <div className="mt-5 inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold text-cyan">
            Get in touch <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  const steps = [
    { n: '01', title: 'Understand your business', line: 'Goals, audience, and constraints — aligned before we ship anything.', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80' },
    { n: '02', title: 'Shape the strategy', line: 'Channel mix, milestones, and success metrics you can actually measure.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80' },
    { n: '03', title: 'Execute & optimize', line: 'Ship, learn from data, then refine — weekly visibility, no black box.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80' },
  ];

  return (
    <section className="py-16 md:py-24 border-y border-line/90 bg-paper/80 backdrop-blur-md">
      <Section>
        <div className="reveal max-w-2xl mb-10 md:mb-14">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 font-display font-extrabold text-[38px] md:text-[56px] leading-[1.05] text-ink">
            A clear process from day one.
          </h2>
          <p className="mt-4 text-[15px] md:text-[16px] text-ink-soft leading-relaxed max-w-xl">
            The same rhythm we use for India and US engagements — structured, transparent, and built to convert.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.article
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="reveal group rounded-2xl border border-line bg-paper overflow-hidden shadow-sm hover:shadow-md hover:border-midnight/15 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-midnight/10">
                <img src={step.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-midnight/10 to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.2em] text-paper/90 bg-midnight/50 backdrop-blur-sm px-3 py-1 rounded-full">{step.n}</span>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display font-bold text-[19px] md:text-[21px] text-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">{step.line}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </section>
  );
}

function HeroVisualBand() {
  return (
    <Section className="mt-2 md:mt-4 pb-8 md:pb-12">
      <motion.div
        className="relative w-full overflow-hidden rounded-2xl border border-midnight/20 bg-midnight aspect-[4/3] md:aspect-[21/9] shadow-xl shadow-midnight/15"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="hero-visual-gradient absolute inset-0" />
          <div className="hero-visual-grid absolute inset-0" />
          <div className="hero-visual-orb-a absolute rounded-full blur-3xl opacity-[0.38]" />
          <div className="hero-visual-orb-b absolute rounded-full blur-3xl opacity-[0.28]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.22]" viewBox="0 0 1200 360" preserveAspectRatio="none" fill="none">
            <path d="M0 240 C200 120 400 300 600 200 C800 100 1000 280 1200 160" stroke="currentColor" className="text-cyan" strokeWidth="1.2" vectorEffect="nonScalingStroke" />
            <path d="M0 300 C250 180 450 340 700 220 C900 120 1050 260 1200 200" stroke="currentColor" className="text-cyan" strokeWidth="0.9" opacity={0.5} vectorEffect="nonScalingStroke" />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-cyan/95">Capabilities</p>
          <p className="mt-3 max-w-xl font-display text-[16px] font-semibold leading-snug text-paper md:text-[20px]">
            Strategy, creative, product engineering, and analytics — one senior-led team from brief to launch.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

function FinalCtaBand() {
  const router = useRouter();
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-midnight text-paper">
      <div className="absolute inset-0 opacity-90 pointer-events-none" style={{ background: 'radial-gradient(900px 400px at 80% 20%, rgba(170,238,255,0.18), transparent), linear-gradient(135deg, #003d44 0%, #004953 45%, #012329 100%)' }} />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <h2 className="font-display font-extrabold text-[28px] md:text-[44px] leading-tight max-w-2xl mx-auto">
            Ready to grow your business?
          </h2>
          <p className="mt-4 text-[15px] text-paper/75 max-w-lg mx-auto leading-relaxed">
            We will reply with sharp questions, not a generic deck.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/contact')}
              className="bg-cyan text-midnight inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans text-[15px] font-semibold shadow-lg shadow-black/20 hover:bg-paper transition-colors"
            >
              Get Consultation <span aria-hidden>→</span>
            </motion.button>
            <button
              type="button"
              onClick={() => { document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-[14px] font-medium text-cyan/90 hover:text-paper underline underline-offset-4"
            >
              Or send a brief below
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  ['What is digital marketing?', 'Digital marketing is the use of online channels — search, social, email, content, and paid ads — to attract, engage, and convert customers. It covers everything from SEO to influencer campaigns.'],
  ['What does digital marketing offer?', 'Measurable reach, targeted audiences, lower cost per acquisition than traditional channels, and rich data to refine every campaign in real time.'],
  ['What are the advantages of digital marketing?', 'You can reach the right audience at the right moment, track spend, iterate quickly, and build long-term assets like SEO and owned content.'],
  ['What is the 3-pillar strategy?', 'Our framework: 1) Foundations (SEO, site, brand), 2) Demand creation (content, social, video), 3) Demand capture (ads, conversion optimisation). Each pillar feeds the next.'],
  ['What marketing activities do you run?', 'SEO, content, social, Google Ads, video, websites, product builds, and brand identity — one channel or the full mix.'],
];

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="md:col-span-7 divide-y divide-line border-y border-line">
      {FAQ_ITEMS.map(([q, a], i) => (
        <FAQItem key={q} q={q} a={a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
      ))}
    </div>
  );
}

function BlogCarousel() {
  const router = useRouter();
  const scrollerRef = useRef(null);
  const posts = BLOG_POSTS || [];
  const latest = posts.slice(0, 6);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const w = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24">
      <Section>
        <div className="reveal mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] leading-[1.06] text-ink">Latest from the blog.</h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous" className="w-11 h-11 rounded-full border border-line bg-paper grid place-items-center text-midnight hover:bg-midnight hover:text-paper transition-colors duration-200">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next" className="w-11 h-11 rounded-full border border-line bg-paper grid place-items-center text-midnight hover:bg-midnight hover:text-paper transition-colors duration-200">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="m5 2 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" onClick={() => router.push('/blog')} className="ml-1 btn-ghost border border-midnight text-midnight inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-[13px] font-semibold hover:bg-midnight hover:text-paper transition-colors">
              View all <span>→</span>
            </button>
          </div>
        </div>

        <div ref={scrollerRef} className="reveal flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6">
          {latest.map((p) => (
            <button key={p.slug} type="button" data-card onClick={() => router.push(`/blog/${p.slug}`)}
              className="snap-start shrink-0 w-[300px] md:w-[360px] text-left card-hover rounded-2xl border border-line bg-paper overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              <Banner src={p.img} alt="" ratio="16/10" />
              <div className="p-6">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-midnight">
                  <span className="px-2 py-1 rounded-full bg-cyan-soft">{p.category}</span>
                  <span className="text-ink-soft">{p.date}</span>
                </div>
                <h3 className="mt-4 font-display font-bold text-[18px] md:text-[19px] text-ink leading-snug">{p.title}</h3>
                <p className="mt-2 text-[13px] text-ink-soft leading-relaxed line-clamp-2">{p.excerpt}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>
    </section>
  );
}

function HomePage() {
  const router = useRouter();
  useReveal();

  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-[1] min-h-full overflow-hidden" aria-hidden>
        <div className="home-ambient-base absolute inset-0" />
        <div className="hero-ambient absolute inset-0 min-h-full">
          <div className="hero-ambient-shine" />
          <div className="hero-ambient-shine hero-ambient-shine-lower" />
          <div className="hero-ambient-noise" />
        </div>
        <div className="absolute top-[-6%] right-[-6%] w-[min(92vw,520px)] h-[min(92vw,520px)] max-w-[520px] max-h-[520px] rounded-full blob-a blur-[3px]" style={{ background: 'radial-gradient(closest-side, rgba(170,238,255,0.78), transparent)' }} />
        <div className="absolute top-[14%] left-[-7%] w-[min(78vw,440px)] h-[min(78vw,440px)] max-w-[440px] max-h-[440px] rounded-full blob-b blur-[2px]" style={{ background: 'radial-gradient(closest-side, rgba(0,73,83,0.14), transparent)' }} />
        <div className="absolute top-[42%] right-[-5%] w-[min(70vw,400px)] h-[min(70vw,400px)] max-w-[400px] max-h-[400px] rounded-full blob-c blur-[3px]" style={{ background: 'radial-gradient(closest-side, rgba(170,238,255,0.45), transparent)' }} />
        <div className="absolute top-[68%] left-[-6%] w-[min(75vw,380px)] h-[min(75vw,380px)] max-w-[380px] max-h-[380px] rounded-full blob-d blur-[2px]" style={{ background: 'radial-gradient(closest-side, rgba(0,73,83,0.12), transparent)' }} />
      </div>

      {/* HERO */}
      <section className="pt-[120px] pb-0 md:pt-[150px] md:pb-0 relative">
        <Section>
          <motion.div className="max-w-3xl pb-12 md:pb-14" initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="mt-5 md:mt-6 font-display font-extrabold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-[1.03] text-ink tracking-tight"
            >
              Growth and product,
              <br />
              <span className="text-midnight">built for startups.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-ink-soft max-w-xl">
              Senior-led marketing and software — clear scope, modern stack, honest reporting.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/contact')}
                className="bg-midnight text-paper inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans text-[15px] font-semibold w-fit hover:bg-midnight-700 transition-colors"
              >
                Get Consultation <span aria-hidden>→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </Section>
        <HeroVisualBand />
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24">
        <Section>
          <div className="reveal max-w-2xl mb-10 md:mb-14">
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="mt-4 font-display font-extrabold text-[38px] md:text-[56px] leading-[1.06] text-ink">What makes us different.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] text-ink-soft leading-relaxed max-w-xl">
              No inflated claims — just senior execution and transparent communication.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: 'Data-driven strategies', d: 'Goals, channels, and reporting you can act on.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80', Icon: IconChart },
              { t: 'Transparent communication', d: 'Plain-language scopes and steady updates.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80', Icon: IconChat },
              { t: 'Modern tools & execution', d: 'Current stacks for web, ads, and analytics.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80', Icon: IconZap },
            ].map((v, i) => {
              const Icon = v.Icon;
              return (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="reveal card-hover rounded-2xl border border-line bg-paper overflow-hidden"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Banner src={v.img} alt="" ratio="16/10" />
                  <div className="p-6 md:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-soft text-midnight mb-4"><Icon /></div>
                    <h3 className="font-display font-bold text-[20px] md:text-[22px] text-ink">{v.t}</h3>
                    <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">{v.d}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-cyan-soft/35 backdrop-blur-[2px]">
        <Section>
          <div className="reveal mb-10 md:mb-14">
            <div className="max-w-2xl">
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-4 font-display font-extrabold text-[38px] md:text-[56px] leading-[1.06] text-ink">Everything under one roof.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="reveal flip-card-shell h-[360px]">
                <ServiceFlipCard s={s} href={`/services#${s.id}`} />
              </div>
            ))}
          </div>
        </Section>
      </section>

      <ProcessSection />
      <BlogCarousel />

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Section>
          <div className="grid md:grid-cols-12 gap-10 md:gap-12">
            <div className="md:col-span-5 reveal">
              <Eyebrow>FAQ</Eyebrow>
              <p className="mt-4 text-[15px] text-ink-soft leading-relaxed">
                Still unsure?{' '}
                <button type="button" onClick={() => router.push('/contact')} className="text-midnight font-medium underline underline-offset-2 hover:text-midnight-700">
                  Message us
                </button>.
              </p>
            </div>
            <FaqAccordion />
          </div>
        </Section>
      </section>

      <FinalCtaBand />

      {/* LEAD FORM */}
      <section id="home-contact" className="py-16 md:py-24 bg-midnight text-paper relative overflow-hidden scroll-mt-24">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(170,238,255,0.15), transparent)' }} />
        <Section>
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start relative">
            <div className="md:col-span-5 reveal">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-cyan">
                <span className="w-6 h-px bg-cyan" /> Contact
              </div>
              <h2 className="mt-5 font-display font-extrabold text-[32px] md:text-[48px] leading-[1.05]">Tell us what you are building.</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-paper/75 max-w-md">Short brief is fine — we respond within one working day.</p>
              <ul className="mt-8 space-y-3 text-[14px] text-paper/85">
                <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-midnight-700 grid place-items-center text-cyan">📧</span> hello@maittreya.in</li>
                <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-midnight-700 grid place-items-center text-cyan">📞</span> +91 99204 12345</li>
                <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-midnight-700 grid place-items-center text-cyan">📍</span> BKC, Mumbai 400051</li>
              </ul>
            </div>
            <div className="md:col-span-7 reveal">
              <div className="rounded-3xl bg-paper text-ink p-7 md:p-10 shadow-xl shadow-black/10">
                <LeadForm />
              </div>
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export { HomePage, ServiceFlipCard };
