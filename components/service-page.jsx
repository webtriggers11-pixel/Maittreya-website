'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section, Eyebrow, FAQItem } from '@/components/shared';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ── Hero ── */
function ServiceHero({ title, h1, sub }) {
  return (
    <section className="relative min-h-[52vh] flex items-center pt-[100px] pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 hero-dark-gradient" />
        <div className="hero-dark-glow-a" />
        <div className="hero-dark-glow-b" />
      </div>
      <Section>
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-paper/50 text-[13px] font-medium hover:text-paper/80 transition-colors mb-5"
            >
              <span>←</span> All Services
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <span className="inline-block px-3 py-1 rounded-full border border-cyan/25 bg-cyan/5 text-cyan text-[11px] font-semibold tracking-wider uppercase mb-4">
              {title}
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-[40px] md:text-[58px] leading-[1.05] text-paper"
          >
            {h1}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-[16px] md:text-[17px] text-paper/65 leading-relaxed max-w-xl"
          >
            {sub}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-midnight font-display font-semibold text-[14px] hover:bg-amber-hover transition-colors shadow-lg shadow-amber/20"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </section>
  );
}

/* ── Features / Proficiency grid ── */
function FeaturesSection({ heading, features }) {
  if (!features?.length) return null;
  return (
    <section className="py-20 md:py-28 bg-paper">
      <Section>
        <div className="reveal mb-12">
          <Eyebrow>What we offer</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-[32px] md:text-[44px] leading-tight text-ink">
            {heading}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl border border-line bg-paper hover:border-midnight/20 hover:shadow-lg hover:shadow-midnight/5 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-soft flex items-center justify-center mb-4 group-hover:bg-midnight group-hover:text-paper transition-colors duration-300">
                <span className="font-display font-black text-midnight group-hover:text-paper text-[14px] transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display font-bold text-[17px] text-ink mb-2 leading-snug">{f.title}</h3>
              <p className="text-[13px] text-ink-soft leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ── Intro paragraph (optional) ── */
function IntroSection({ text }) {
  if (!text) return null;
  return (
    <section className="py-14 bg-cyan-soft/20">
      <Section>
        <p className="text-[17px] md:text-[18px] text-ink-soft leading-relaxed max-w-3xl mx-auto text-center reveal">
          {text}
        </p>
      </Section>
    </section>
  );
}

/* ── Process section ── */
function ProcessSection({ heading, steps }) {
  if (!steps?.length) return null;
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 section-dot-grid pointer-events-none" />
      <Section>
        <div className="reveal mb-12 md:mb-16">
          <Eyebrow>Our process</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-[32px] md:text-[44px] leading-tight text-ink">
            {heading}
          </h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-8 right-8 h-px bg-line" />
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="reveal flex flex-col gap-4">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-midnight flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-cyan text-[18px]">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[18px] text-ink mb-2">{step.title}</h3>
                  <p className="text-[13px] text-ink-soft leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
}

/* ── Benefits list ── */
function BenefitsSection({ heading, benefits }) {
  if (!benefits?.length) return null;
  return (
    <section className="py-20 md:py-24 bg-paper">
      <Section>
        <div className="reveal mb-10">
          <Eyebrow>Why choose us</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-[32px] md:text-[44px] leading-tight text-ink">
            {heading}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {benefits.map((b, i) => (
            <div key={i} className="reveal flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-midnight shrink-0 flex items-center justify-center mt-0.5">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#AAEEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[14px] text-ink-soft leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ── Deliverables ── */
function DeliverablesSection({ heading, deliverables }) {
  if (!deliverables?.length) return null;
  return (
    <section className="py-20 bg-cyan-soft/20">
      <Section>
        <div className="reveal mb-10">
          <Eyebrow>Deliverables</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-[32px] md:text-[44px] leading-tight text-ink">
            {heading}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {deliverables.map((d, i) => (
            <div
              key={i}
              className="reveal flex items-center gap-2.5 px-5 py-3 rounded-full border border-midnight/15 bg-paper text-[14px] text-ink font-medium shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-midnight" />
              {d}
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ── Why social media section (social only) ── */
function WhySection({ data }) {
  if (!data) return null;
  return (
    <section className="py-20 bg-midnight text-paper">
      <Section>
        <div className="reveal mb-10">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] leading-tight">
            {data.heading}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          {data.points.map((p, i) => (
            <div key={i} className="reveal flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-cyan/20 border border-cyan/40 shrink-0 flex items-center justify-center mt-0.5">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#AAEEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[14px] text-paper/70 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ── FAQ ── */
function ServiceFAQ({ faqs }) {
  if (!faqs?.length) return null;
  return (
    <section className="py-20 md:py-28 bg-paper">
      <Section>
        <div className="reveal mb-10 md:mb-14">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-[32px] md:text-[44px] leading-tight text-ink">
            Frequently asked questions
          </h2>
        </div>
        <div className="max-w-3xl divide-y divide-line">
          {faqs.map(([q, a], i) => (
            <FAQItem key={i} q={q} a={a} />
          ))}
        </div>
      </Section>
    </section>
  );
}

/* ── CTA band ── */
function ServiceCTA({ title }) {
  return (
    <section className="py-20 bg-midnight text-paper">
      <Section>
        <div className="reveal max-w-2xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] leading-tight mb-4">
            Ready to grow with {title}?
          </h2>
          <p className="text-[15px] text-paper/60 mb-8 leading-relaxed">
            Let's talk about your goals and build a strategy that delivers real results.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber text-midnight font-display font-bold text-[14px] hover:bg-amber-hover transition-colors shadow-lg shadow-amber/20"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-paper/25 text-paper/70 font-medium text-[14px] hover:bg-paper/10 hover:text-paper transition-colors"
            >
              Explore other services
            </Link>
          </div>
        </div>
      </Section>
    </section>
  );
}

/* ── Main export ── */
export function ServicePageTemplate({ data }) {
  return (
    <main>
      <ServiceHero title={data.title} h1={data.hero.h1} sub={data.hero.sub} />
      <IntroSection text={data.intro} />
      <FeaturesSection heading={data.featuresHeading} features={data.features} />
      <ProcessSection heading={data.processHeading} steps={data.process} />
      <BenefitsSection heading={data.benefitsHeading} benefits={data.benefits} />
      <DeliverablesSection heading={data.deliverablesHeading} deliverables={data.deliverables} />
      <WhySection data={data.whySection} />
      <ServiceFAQ faqs={data.faqs} />
      <ServiceCTA title={data.title} />
    </main>
  );
}
