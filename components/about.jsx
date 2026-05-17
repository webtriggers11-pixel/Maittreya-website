'use client';

import { useRouter } from 'next/navigation';
import { useReveal, Section, Eyebrow, Banner } from '@/components/shared';

function AboutPage() {
  const router = useRouter();
  useReveal();

  const values = [
    ['Integrity', 'We say what we mean. Clear scope, honest timelines, and no surprises.'],
    ['Transparency', 'Decisions are documented and shared — you always know where your project stands.'],
    ['Long-term sustainability', 'We build for compounding returns, not quick wins that fade in 90 days.'],
    ['Relationship over transaction', "We are your strategic allies, not vendors. Your growth is our measure of success."],
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-16 md:pt-[170px] md:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: 'linear-gradient(180deg, #FDFEFE 0%, #E5F8FF 100%)' }}
        />
        <div className="absolute inset-0 -z-10 section-dot-grid" />
        <Section>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8 reveal">
              <Eyebrow>About Us</Eyebrow>
              <h1 className="mt-5 font-display font-extrabold text-[44px] md:text-[72px] leading-[1.02] text-ink">
                Friendship.
                <br />
                <span className="text-midnight">Mindful marketing.</span>
              </h1>
            </div>
            <div className="md:col-span-4 reveal" style={{ transitionDelay: '100ms' }}>
              <p className="text-[16px] leading-relaxed text-ink-soft">
                Maittreya means friendship. We are a relationship-driven digital and creative agency
                helping brands grow with confidence and clarity.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* ── STUDIO IMAGE ── */}
      <section className="pb-24">
        <Section>
          <div className="reveal">
            <Banner
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80"
              alt="Maittreya team at work"
              ratio="21/9"
            />
          </div>
        </Section>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 bg-midnight text-paper relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(800px 400px at 80% 20%, rgba(170,238,255,0.1), transparent), linear-gradient(135deg, #003d44 0%, #004953 50%, #012329 100%)',
          }}
        />
        <div className="absolute inset-0 hero-ambient-noise pointer-events-none" />
        <Section>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 relative">
            <div className="reveal">
              <Eyebrow dark>Our philosophy</Eyebrow>
              <h2 className="mt-5 font-display font-extrabold text-[32px] md:text-[44px] leading-[1.1]">
                The digital world is chaotic. We believe in mindful marketing.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-paper/72">
                We believe growth should be stable — not aggressive, not stressful.
                Here at Maittreya, we specialise in building long-term visibility through ethical,
                strategic, and data-backed methods.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              <Eyebrow dark>Our belief</Eyebrow>
              <h2 className="mt-5 font-display font-extrabold text-[32px] md:text-[44px] leading-[1.1]">
                Businesses don&rsquo;t need vendors — they need strategic allies.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-paper/72">
                Real success is not built overnight. It is built with patience.
                While the industry chases shortcuts, we choose to build something deeper — a growth
                partnership rooted in trust.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 md:py-28">
        <Section>
          <div className="reveal mb-14 max-w-2xl">
            <Eyebrow>Our purpose</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold text-[36px] md:text-[52px] leading-[1.05] text-ink">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal rounded-2xl border border-line bg-paper p-9 hover:border-midnight/20 hover:shadow-md transition-all duration-300">
              <div className="font-mono text-[10px] tracking-[0.24em] text-ink-soft/50 mb-5">MISSION</div>
              <h3 className="font-display font-bold text-[22px] text-ink mb-4 leading-snug">
                To become a trusted digital partner for brands.
              </h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                We help brands grow through ethical means and penalty-free, sustainable growth
                — building visibility that compounds over time, not overnight spikes that vanish.
              </p>
            </div>
            <div className="reveal rounded-2xl border border-line bg-paper p-9 hover:border-midnight/20 hover:shadow-md transition-all duration-300" style={{ transitionDelay: '80ms' }}>
              <div className="font-mono text-[10px] tracking-[0.24em] text-ink-soft/50 mb-5">VISION</div>
              <h3 className="font-display font-bold text-[22px] text-ink mb-4 leading-snug">
                A digital world built on integrity and long-term sustainability.
              </h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                We value integrity, honesty, and long-term sustainability over short-term wins.
                Every engagement leaves a system you own and results you can measure.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 md:py-28 relative">
        <div className="absolute inset-0 section-dot-grid pointer-events-none" />
        <Section>
          <div className="reveal mb-14 max-w-2xl">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold text-[36px] md:text-[52px] leading-[1.05] text-ink">
              Four operating principles.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line">
            {values.map(([t, d], i) => (
              <div
                key={t}
                className="bg-paper p-8 md:p-10 reveal hover:bg-cyan-soft/20 transition-colors duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="font-mono text-[11px] tracking-[0.22em] text-midnight/50 mb-4">0{i + 1}</div>
                <h3 className="font-display font-bold text-[22px] text-ink mb-3">{t}</h3>
                <p className="text-[14px] leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 md:py-28 bg-cyan-soft/30">
        <Section>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 reveal">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-5 font-display font-extrabold text-[34px] md:text-[48px] leading-[1.05] text-ink">
                Relationship-driven delivery.
              </h2>
              <p className="mt-5 text-[16px] text-ink-soft leading-relaxed max-w-lg">
                We are a digital and creative agency with a simple idea — businesses don't need vendors,
                they need partners. Direct communication, clear milestones, and work that compounds.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5 max-w-md">
                {[
                  ['Mindful approach', 'Stable, ethical growth'],
                  ['Data-backed', 'Strategy + transparency'],
                  ['Mumbai', 'HQ & timezone'],
                  ['India focused', 'Brands we understand'],
                ].map(([k, v]) => (
                  <div key={k} className="border-l-2 border-midnight pl-4">
                    <div className="font-display font-extrabold text-[16px] text-ink leading-tight">{k}</div>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-6 reveal" style={{ transitionDelay: '120ms' }}>
              <Banner
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Team collaboration session"
                ratio="4/3"
                className="shadow-xl"
              />
            </div>
          </div>
        </Section>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <Section>
          <div className="reveal rounded-3xl bg-midnight text-paper relative overflow-hidden p-10 md:p-16 grid md:grid-cols-12 gap-8 items-center">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(600px 300px at 80% 50%, rgba(170,238,255,0.12), transparent)',
              }}
            />
            <div className="md:col-span-8 relative">
              <Eyebrow dark>Work with us</Eyebrow>
              <h2 className="mt-4 font-display font-extrabold text-[30px] md:text-[44px] leading-[1.05]">
                Let&rsquo;s build something meaningful together.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right relative">
              <button
                onClick={() => router.push('/contact')}
                className="bg-cyan text-midnight inline-flex items-center gap-2 px-7 py-4 rounded-full font-sans text-[14px] font-semibold hover:bg-paper transition-colors shadow-lg shadow-black/15"
              >
                Get Consultation <span>→</span>
              </button>
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export { AboutPage };
