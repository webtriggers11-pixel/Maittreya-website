'use client';

import { useRouter } from 'next/navigation';
import { useReveal, Section, Eyebrow, Banner } from '@/components/shared';

function AboutPage() {
  const router = useRouter();
  useReveal();

  const values = [
    ['Senior by default', 'No juniors hidden behind a project manager. The people on the call do the work.'],
    ['Write it down', 'Decisions live in docs, not Slack threads. Every project ends with a clear handoff.'],
    ['Ship to learn', 'Small releases, often. We measure against real outcomes, not deliverables.'],
    ['Honest scope', "We say no to work we can't do well. We tell you what we don't know."],
  ];

  return (
    <div>
      <section className="pt-[140px] pb-16 md:pt-[170px] md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #FDFEFE 0%, #E5F8FF 100%)' }}></div>
        <Section>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8 reveal">
              <Eyebrow>About Us</Eyebrow>
              <h1 className="mt-5 font-display font-extrabold text-[44px] md:text-[76px] leading-[1.02] text-ink">
                A focused studio for<br/>
                <span className="text-midnight">growth and product.</span>
              </h1>
            </div>
            <div className="md:col-span-4 reveal">
              <p className="text-[16px] leading-relaxed text-ink-soft">
                We are an early-stage studio in Mumbai serving founders and marketing leads in India and the United States.
                Strategy, design, engineering, and growth sit in one workflow — so your site, campaigns, and product stay aligned.
              </p>
            </div>
          </div>
        </Section>
      </section>

      <section className="pb-24">
        <Section>
          <div className="reveal">
            <Banner src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80" alt="Studio" ratio="21/9" />
          </div>
        </Section>
      </section>

      <section className="py-24 md:py-28 bg-midnight text-paper relative overflow-hidden">
        <Section>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="reveal">
              <Eyebrow dark>Our vision</Eyebrow>
              <h2 className="mt-5 font-display font-extrabold text-[34px] md:text-[44px] leading-[1.1]">
                A web that's faster, kinder, and built by people who care about the craft.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-paper/75">
                We want to be the studio teams call when they're tired of agency theater — slick decks, slow delivery, and work that doesn't move the numbers.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              <Eyebrow dark>Our mission</Eyebrow>
              <h2 className="mt-5 font-display font-extrabold text-[34px] md:text-[44px] leading-[1.1]">
                Make digital work that feels honest, ships on time, and keeps compounding after we're gone.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-paper/75">
                Every engagement ends with a system you own — design files, content guides, code, and dashboards.
              </p>
            </div>
          </div>
        </Section>
      </section>

      <section className="py-24 md:py-28">
        <Section>
          <div className="reveal mb-14 max-w-2xl">
            <Eyebrow>What we believe</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold text-[36px] md:text-[52px] leading-[1.05] text-ink">Four operating principles.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line">
            {values.map(([t, d], i) => (
              <div key={t} className="bg-paper p-8 md:p-10 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="font-mono text-[11px] tracking-[0.22em] text-midnight">0{i + 1}</div>
                <h3 className="mt-4 font-display font-bold text-[24px] text-ink">{t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <section className="py-24 md:py-28 bg-cyan-soft/40">
        <Section>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 reveal">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-5 font-display font-extrabold text-[36px] md:text-[52px] leading-[1.05] text-ink">Senior-led delivery.</h2>
              <p className="mt-5 text-[16px] text-ink-soft leading-relaxed max-w-lg">
                Designers, marketers, and engineers working as one unit — direct communication, no theatre decks,
                and the same people who scope the work shipping it.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5 max-w-md">
                {[['Fast replies', 'Usually same working day'], ['Full stack', 'Marketing + product'], ['Mumbai', 'HQ & timezone'], ['India · US', 'Markets we know']].map(([k, v]) => (
                  <div key={k} className="border-l-2 border-midnight pl-4">
                    <div className="font-display font-extrabold text-[18px] text-ink leading-tight">{k}</div>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-6 reveal" style={{ transitionDelay: '120ms' }}>
              <Banner src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Working session" ratio="4/3" className="shadow-xl" />
            </div>
          </div>
        </Section>
      </section>

      <section className="py-24">
        <Section>
          <div className="reveal rounded-3xl bg-cyan-soft border border-cyan/40 p-10 md:p-16 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <Eyebrow>Work with us</Eyebrow>
              <h2 className="mt-4 font-display font-extrabold text-[32px] md:text-[44px] leading-[1.05] text-midnight-900">
                We'd love to hear what you're building.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <button onClick={() => router.push('/contact')} className="bg-midnight text-paper inline-flex items-center gap-2 px-7 py-4 rounded-full font-sans text-[14px] font-semibold hover:bg-midnight-700 transition-colors">
                Let's Talk <span>→</span>
              </button>
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export { AboutPage };
