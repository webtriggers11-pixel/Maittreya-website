import { useReveal, Section, Eyebrow } from './shared.jsx';

function PrivacyPage() {
  useReveal();

  return (
    <div>
      <section className="pt-[140px] pb-12 md:pt-[170px] md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #FDFEFE 0%, #E5F8FF 100%)' }}></div>
        <Section>
          <div className="max-w-3xl reveal">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-5 font-display font-extrabold text-[40px] md:text-[56px] leading-[1.05] text-ink">
              Privacy policy
            </h1>
            <p className="mt-6 text-[15px] text-ink-soft leading-relaxed">
              This page is a placeholder. Replace with your final policy before launch (data you collect, cookies, third parties,
              India DPDP Act / GDPR where applicable, and contact for privacy requests).
            </p>
          </div>
        </Section>
      </section>

      <section className="pb-24">
        <Section>
          <div className="max-w-3xl reveal space-y-6 text-[15px] leading-relaxed text-ink-soft">
            <p>
              <strong className="text-ink">Information we may collect:</strong> name, email, phone, and message content when you use our contact
              or lead forms; basic analytics if you enable them later.
            </p>
            <p>
              <strong className="text-ink">How we use it:</strong> to respond to inquiries and improve our services. We do not sell your personal data.
            </p>
            <p>
              <strong className="text-ink">Retention:</strong> only as long as needed for the purpose collected, unless law requires longer retention.
            </p>
            <p className="text-[14px] pt-4 border-t border-line">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}.
            </p>
          </div>
        </Section>
      </section>
    </div>
  );
}

export { PrivacyPage };
