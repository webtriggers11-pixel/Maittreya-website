'use client';

import { useReveal, Section, Eyebrow, LeadForm } from '@/components/shared';

function ContactPage() {
  useReveal();

  return (
    <div>
      <section className="pt-[140px] pb-12 md:pt-[170px] md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(800px 380px at 100% 0%, #E5F8FF 0%, transparent 60%)' }}></div>
        <Section>
          <div className="max-w-3xl reveal">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 font-display font-extrabold text-[44px] md:text-[72px] leading-[1.02] text-ink">
              Tell us what<br/>
              <span className="text-midnight">you're building.</span>
            </h1>
            <p className="mt-7 text-[17px] leading-relaxed text-ink-soft max-w-xl">
              We reply within a working day — often with sharper questions before booking a call.
            </p>
          </div>
        </Section>
      </section>

      <section className="pb-32">
        <Section>
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
            <div className="md:col-span-7 reveal">
              <div className="rounded-3xl border border-line bg-paper p-7 md:p-10">
                <LeadForm />
              </div>
            </div>

            <aside className="md:col-span-5 space-y-6">
              <div className="reveal rounded-2xl border border-line bg-paper p-7">
                <Eyebrow>Direct lines</Eyebrow>
                <ul className="mt-5 space-y-4 text-[14px]">
                  <li>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">Email</div>
                    <a href="mailto:hello@maittreya.in" className="text-midnight font-medium hover:text-midnight-700">hello@maittreya.in</a>
                  </li>
                  <li>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">Phone</div>
                    <a href="tel:+919920412345" className="text-midnight font-medium hover:text-midnight-700">+91 99204 12345</a>
                  </li>
                  <li>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">Studio</div>
                    <div className="text-ink">BKC, Mumbai 400051</div>
                  </li>
                </ul>
              </div>

              <div className="reveal rounded-2xl bg-midnight text-paper p-7" style={{ transitionDelay: '80ms' }}>
                <Eyebrow dark>Studio</Eyebrow>
                <p className="mt-5 text-[14px] leading-relaxed text-paper/80">
                  Based in Mumbai, we work with early-stage teams across India.
                </p>
              </div>

              <div className="reveal rounded-2xl border border-line bg-cyan-soft p-7" style={{ transitionDelay: '160ms' }}>
                <div className="font-display font-bold text-[16px] text-midnight-900">Reply within 1 working day</div>
                <p className="mt-2 text-[13px] text-midnight-900/75 leading-relaxed">
                  We read every inquiry. If we're not the right fit, we'll say so and recommend someone who is.
                </p>
              </div>
            </aside>
          </div>
        </Section>
      </section>
    </div>
  );
}

export { ContactPage };
