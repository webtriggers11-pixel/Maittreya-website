'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  useReveal,
  SERVICES,
  Section,
  Eyebrow,
  FAQItem,
  LeadForm,
} from '@/components/shared';
import { BLOG_POSTS } from '@/data/blogPosts';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ── Service SVG icons ── */
function IconSearch({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m16 16-2.8-2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function IconSocial({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="5.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="4" cy="14.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="14.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.6 7.2 5.6 12.3M12.4 7.2l2 5.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconPen({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M3 14.5 14 3.5a2.12 2.12 0 0 1 3 3L6 17.5l-4 .5.5-3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function IconTarget({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}
function IconCode({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="m6 7-4 3 4 3M14 7l4 3-4 3M11.5 4l-3 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPlay({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2.5" y="4" width="11" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.5 8.5 17.5 10l-4 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDiamond({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 2.5 17.5 9 10 17.5 2.5 9 10 2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function IconMail({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2.5" y="5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m2.5 7 7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPhone({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4.5 3h3l1.5 3.5-2 1.5c1 2 2.5 3.5 4.5 4.5l1.5-2L16.5 12v3c0 1-1 2-2 1.5C8 14.5 5.5 12 4 5.5 3.5 4.5 4.5 3 4.5 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function IconPin({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 2a5.5 5.5 0 0 1 5.5 5.5c0 4-5.5 10.5-5.5 10.5S4.5 11.5 4.5 7.5A5.5 5.5 0 0 1 10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="10" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const SERVICE_ICONS = {
  seo: IconSearch,
  social: IconSocial,
  content: IconPen,
  ads: IconTarget,
  web: IconCode,
  video: IconPlay,
  logo: IconDiamond,
};

/* ── Service chips strip (bottom of hero) ── */
function ServiceChipsStrip() {
  const chips = [
    { label: 'SEO', Icon: IconSearch },
    { label: 'Social Media', Icon: IconSocial },
    { label: 'Content Writing', Icon: IconPen },
    { label: 'Google Ads', Icon: IconTarget },
    { label: 'Website Development', Icon: IconCode },
    { label: 'Video Editing', Icon: IconPlay },
    { label: 'Logo Design', Icon: IconDiamond },
  ];
  return (
    <div className="mt-14 pt-8 border-t border-paper/10">
      <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-paper/40 mb-4">What we do</p>
      <div className="flex flex-wrap gap-2">
        {chips.map(({ label, Icon }, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="service-chip flex items-center gap-2 px-4 py-2 rounded-full border border-paper/15 bg-paper/5 text-paper/60 text-[12px] font-medium cursor-default"
          >
            <Icon size={13} />
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ── Static service card (no flip) ── */
function ServiceCard({ s, href }) {
  const router = useRouter();
  const Icon = SERVICE_ICONS[s.id] || IconCode;
  return (
    <div
      onClick={() => router.push(href)}
      className="service-card group cursor-pointer rounded-2xl border border-line bg-paper p-7 flex flex-col gap-5"
    >
      <div className="w-12 h-12 rounded-xl bg-cyan-soft flex items-center justify-center text-midnight group-hover:bg-midnight group-hover:text-paper transition-colors duration-300 shrink-0">
        <Icon size={22} />
      </div>
      <div className="flex-1">
        <h3 className="font-display font-bold text-[19px] text-ink group-hover:text-midnight transition-colors leading-snug">
          {s.title}
        </h3>
        <p className="mt-2.5 text-[13px] text-ink-soft leading-relaxed line-clamp-3">{s.desc}</p>
      </div>
      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-ink-soft/60 group-hover:text-midnight transition-colors">
        Learn more
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </div>
    </div>
  );
}

/* ── Why Maittreya ── */
function WhyMaittreya() {
  const reasons = [
    {
      n: '01',
      title: 'Visibility',
      desc: 'We combine data-backed strategies to increase your brand visibility and drive growth.',
      Icon: IconSearch,
    },
    {
      n: '02',
      title: 'Transparency',
      desc: 'We believe in building transparent partnerships at every step of the journey.',
      Icon: IconTarget,
    },
    {
      n: '03',
      title: 'Dynamic Marketing',
      desc: 'From SEO to Social Media, we use the latest tools and personalised strategies to elevate your brand and keep it ahead of the curve.',
      Icon: IconCode,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 section-dot-grid pointer-events-none" />
      <Section>
        <div className="reveal max-w-2xl mb-12 md:mb-16">
          <Eyebrow>Why choose us</Eyebrow>
          <h2 className="mt-4 font-display font-extrabold text-[38px] md:text-[56px] leading-[1.05] text-ink">
            Why Maittreya Digital Services?
          </h2>
          <p className="mt-4 text-[15px] md:text-[16px] text-ink-soft leading-relaxed max-w-lg">
            No inflated claims — just mindful execution and transparent communication.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="reveal relative rounded-2xl border border-line bg-paper p-8 hover:border-midnight/20 hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="font-mono text-[11px] tracking-[0.24em] text-ink-soft/40 mb-6">{r.n}</div>
              <div className="w-11 h-11 rounded-xl bg-cyan-soft flex items-center justify-center text-midnight mb-5">
                <r.Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-[22px] text-ink leading-snug mb-3">{r.title}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ── How We Work ── */
function ProcessSection() {
  const steps = [
    {
      n: '01',
      title: 'Understand your business',
      line: 'Goals, audience, and constraints — aligned before we ship anything.',
    },
    {
      n: '02',
      title: 'Shape the strategy',
      line: 'Channel mix, milestones, and success metrics you can actually measure.',
    },
    {
      n: '03',
      title: 'Execute & optimize',
      line: 'Ship, learn from data, then refine — weekly visibility, no black box.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-y border-line bg-paper">
      <Section>
        <div className="reveal max-w-2xl mb-12 md:mb-16">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 font-display font-extrabold text-[38px] md:text-[56px] leading-[1.05] text-ink">
            A clear process from day one.
          </h2>
          <p className="mt-4 text-[15px] text-ink-soft leading-relaxed max-w-lg">
            The same rhythm for every engagement — structured, transparent, built to convert.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          <div className="hidden md:block absolute top-[28px] left-[calc(33.33%+20px)] right-[calc(33.33%+20px)] h-px bg-line z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="reveal relative z-10 rounded-2xl border border-line bg-paper p-8 hover:border-midnight/15 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full border-2 border-midnight bg-paper flex items-center justify-center font-mono text-[14px] font-bold text-midnight mb-6">
                {step.n}
              </div>
              <h3 className="font-display font-bold text-[20px] text-ink mb-3 leading-snug">{step.title}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{step.line}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ── Blog carousel ── */
function BlogCarousel() {
  const router = useRouter();
  const scrollerRef = useRef(null);
  const latest = (BLOG_POSTS || []).slice(0, 6);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const w = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-paper">
      <Section>
        <div className="reveal mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] leading-[1.06] text-ink">
            Latest from the blog.
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-line bg-paper grid place-items-center text-midnight hover:bg-midnight hover:text-paper transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-line bg-paper grid place-items-center text-midnight hover:bg-midnight hover:text-paper transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="m5 2 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => router.push('/blog')}
              className="ml-1 border border-midnight text-midnight inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-[13px] font-semibold hover:bg-midnight hover:text-paper transition-colors"
            >
              View all <span>→</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="reveal flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6"
        >
          {latest.map((p) => (
            <button
              key={p.slug}
              type="button"
              data-card
              onClick={() => router.push(`/blog/${p.slug}`)}
              className="snap-start shrink-0 w-[300px] md:w-[360px] text-left rounded-2xl border border-line bg-paper overflow-hidden card-hover transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-midnight">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 via-midnight/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-midnight">
                  <span className="px-2 py-1 rounded-full bg-cyan-soft">{p.category}</span>
                  <span className="text-ink-soft">{p.date}</span>
                </div>
                <h3 className="mt-4 font-display font-bold text-[18px] text-ink leading-snug">{p.title}</h3>
                <p className="mt-2 text-[13px] text-ink-soft leading-relaxed line-clamp-2">{p.excerpt}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ── FAQ ── */
const FAQ_ITEMS = [
  [
    'What is digital marketing in simple words?',
    'Digital marketing helps your business to grow by increasing visibility and turning visitors into customers.',
  ],
  [
    'What does digital marketing offer?',
    'Digital marketing offers a range of services such as SEO, Google Ads, social media marketing, and website development to help businesses grow online.',
  ],
  [
    'What are the advantages of digital marketing?',
    'The advantages of digital marketing include increased brand visibility, better reach and measurable growth.',
  ],
];

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="md:col-span-7 divide-y divide-line border-y border-line">
      {FAQ_ITEMS.map(([q, a], i) => (
        <FAQItem
          key={q}
          q={q}
          a={a}
          open={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? null : i)}
        />
      ))}
    </div>
  );
}

/* ── Final CTA band ── */
function FinalCtaBand() {
  const router = useRouter();
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-midnight text-paper">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(900px 500px at 75% 20%, rgba(170,238,255,0.14), transparent), linear-gradient(135deg, #003d44 0%, #004953 50%, #012329 100%)',
        }}
      />
      <div className="absolute inset-0 hero-ambient-noise pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-cyan/80 mb-5">
            Ready to grow?
          </p>
          <h2 className="font-display font-extrabold text-[30px] md:text-[48px] leading-tight max-w-2xl mx-auto">
            Your growth starts here.
          </h2>
          <p className="mt-4 text-[15px] text-paper/70 max-w-md mx-auto leading-relaxed">
            Tell us about your business and we will craft a strategy tailored to your goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/contact')}
              className="bg-cyan text-midnight inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans text-[15px] font-semibold shadow-lg shadow-black/20 hover:bg-paper transition-colors"
            >
              Get Consultation <span aria-hidden>→</span>
            </motion.button>
            <button
              type="button"
              onClick={() => {
                document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[14px] font-medium text-paper/60 hover:text-paper underline underline-offset-4 transition-colors"
            >
              Or send a brief below
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── HomePage ── */
function HomePage() {
  const router = useRouter();
  useReveal();

  return (
    <div className="relative isolate">
      {/* ── HERO (dark) ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-[100px] pb-16 overflow-hidden">
        {/* Background layers pushed below content via -z-10 */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden>
          <div className="hero-dark-gradient absolute inset-0" />
          <div className="hero-dark-glow-a" />
          <div className="hero-dark-glow-b" />
          <div className="hero-ambient-noise absolute inset-0" />
        </div>

        <Section>
          <motion.div className="max-w-4xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-cyan/60" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-cyan/70">
                Maittreya Digital Services
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold text-[44px] sm:text-[58px] md:text-[72px] lg:text-[82px] leading-[1.02] text-paper tracking-tight"
            >
              Digital Marketing —
              <br />
              <span className="text-cyan">Your Growth</span> Starts Here.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-paper/65 max-w-xl"
            >
              Crafting digital experiences that elevate your business growth.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push('/contact')}
                className="bg-cyan text-midnight inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans text-[15px] font-semibold shadow-lg shadow-cyan/20 hover:bg-paper transition-colors w-fit"
              >
                Get Consultation <span aria-hidden>→</span>
              </motion.button>
              <button
                type="button"
                onClick={() => router.push('/services')}
                className="border border-paper/20 text-paper/80 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans text-[15px] font-medium hover:bg-paper/8 hover:text-paper transition-colors w-fit"
              >
                Our Services
              </button>
            </motion.div>

            <ServiceChipsStrip />
          </motion.div>
        </Section>
      </section>

      {/* ── WHY MAITTREYA ── */}
      <WhyMaittreya />

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 bg-cyan-soft/25 backdrop-blur-[2px]">
        <Section>
          <div className="reveal mb-12 md:mb-16">
            <div className="max-w-2xl">
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-4 font-display font-extrabold text-[38px] md:text-[56px] leading-[1.05] text-ink">
                Everything under one roof.
              </h2>
              <p className="mt-4 text-[15px] text-ink-soft leading-relaxed max-w-lg">
                From search visibility to brand identity — one senior-led team, one workflow.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="reveal">
                <ServiceCard s={s} href={s.href} />
              </div>
            ))}
          </div>
        </Section>
      </section>

      <ProcessSection />
      <BlogCarousel />

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-paper">
        <Section>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4 reveal">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-4 font-display font-extrabold text-[32px] md:text-[40px] leading-[1.05] text-ink">
                Common questions.
              </h2>
              <p className="mt-4 text-[15px] text-ink-soft leading-relaxed">
                Still unsure?{' '}
                <button
                  type="button"
                  onClick={() => router.push('/contact')}
                  className="text-midnight font-medium underline underline-offset-2 hover:text-midnight-700"
                >
                  Message us
                </button>
                .
              </p>
            </div>
            <FaqAccordion />
          </div>
        </Section>
      </section>

      <FinalCtaBand />

      {/* ── LEAD FORM ── */}
      <section
        id="home-contact"
        className="py-20 md:py-28 bg-midnight text-paper relative overflow-hidden scroll-mt-24"
      >
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(closest-side, rgba(170,238,255,0.12), transparent)',
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(closest-side, rgba(0,73,83,0.4), transparent)',
          }}
        />
        <Section>
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start relative">
            <div className="md:col-span-5 reveal">
              <Eyebrow dark>Contact</Eyebrow>
              <h2 className="mt-5 font-display font-extrabold text-[32px] md:text-[46px] leading-[1.05]">
                Tell us what you are building.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-paper/70 max-w-md">
                Short brief is fine — we respond within one working day.
              </p>
              <ul className="mt-8 space-y-4 text-[14px] text-paper/80">
                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-midnight-700 border border-paper/10 grid place-items-center text-cyan shrink-0">
                    <IconMail size={16} />
                  </span>
                  hello@maittreya.in
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-midnight-700 border border-paper/10 grid place-items-center text-cyan shrink-0">
                    <IconPhone size={16} />
                  </span>
                  +91 99204 12345
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-midnight-700 border border-paper/10 grid place-items-center text-cyan shrink-0">
                    <IconPin size={16} />
                  </span>
                  BKC, Mumbai 400051
                </li>
              </ul>
            </div>
            <div className="md:col-span-7 reveal">
              <div className="rounded-3xl bg-paper text-ink p-7 md:p-10 shadow-xl shadow-black/15">
                <LeadForm />
              </div>
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export { HomePage };
