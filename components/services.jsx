'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useReveal, Section, Eyebrow, Banner, SERVICES } from '@/components/shared';

function ServicesPage() {
  const router = useRouter();
  useReveal();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="pt-[140px] pb-20 md:pt-[170px] md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #FDFEFE 0%, #E5F8FF 100%)' }}></div>
        <Section>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8 reveal">
              <Eyebrow>Services</Eyebrow>
              <h1 className="mt-5 font-display font-extrabold text-[44px] md:text-[76px] leading-[1.02] text-ink">
                Eight services.<br/>
                <span className="text-midnight">One studio.</span>
              </h1>
            </div>
            <div className="md:col-span-4 reveal">
              <p className="text-[16px] leading-relaxed text-ink-soft">
                From SEO and content to ads and video — our services work together as a system,
                so every channel reinforces the others.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {/* DETAILED BREAKDOWNS */}
      <section className="py-24 bg-cyan-soft/40">
        <Section>
          <div className="reveal mb-14 max-w-2xl">
            <Eyebrow>What's inside</Eyebrow>
            <h2 className="mt-5 font-display font-extrabold text-[36px] md:text-[48px] leading-[1.05] text-ink">A closer look at each service.</h2>
          </div>

          <div className="space-y-20">
            {SERVICES.map((s, i) => (
              <div key={s.id} id={s.id} className={`reveal grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? 'md:[&>:first-child]:order-2' : ''}`} style={{ scrollMarginTop: 100 }}>
                <div className="md:col-span-5">
                  <Banner src={s.img} alt={s.title} ratio="4/3" />
                </div>
                <div className="md:col-span-7">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-midnight">0{i + 1} / 0{SERVICES.length}</div>
                  <h3 className="mt-3 font-display font-extrabold text-[30px] md:text-[38px] leading-tight text-ink">{s.title}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-soft max-w-xl">{s.desc}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 max-w-md">
                    {s.tags.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-[13px] text-ink">
                        <span className="w-5 h-5 rounded-full bg-midnight grid place-items-center shrink-0">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="m2 5 2 2 4-5" stroke="#AAEEFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => router.push('/contact')} className="mt-7 bg-midnight text-paper inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-[13px] font-semibold hover:bg-midnight-700 transition-colors">
                    Discuss this service <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Section>
          <div className="reveal rounded-3xl bg-midnight text-paper p-10 md:p-16 grid md:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="absolute -top-32 -right-20 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(170,238,255,0.18), transparent)' }}></div>
            <div className="md:col-span-8 relative">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-cyan">
                <span className="w-6 h-px bg-cyan"></span> Ready to start
              </div>
              <h2 className="mt-4 font-display font-extrabold text-[34px] md:text-[48px] leading-[1.05]">
                Not sure which service you need?
              </h2>
              <p className="mt-4 text-[15px] text-paper/75 max-w-lg">Tell us your goal — we'll recommend the right mix.</p>
            </div>
            <div className="md:col-span-4 md:text-right relative">
              <button onClick={() => router.push('/contact')} className="bg-cyan text-midnight inline-flex items-center gap-2 px-7 py-4 rounded-full font-sans text-[14px] font-semibold hover:bg-paper transition-colors">
                Let's Talk <span>→</span>
              </button>
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export { ServicesPage };
