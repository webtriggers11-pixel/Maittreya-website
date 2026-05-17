'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useReveal, Section, Eyebrow, Banner } from '@/components/shared';
import { BLOG_POSTS } from '@/data/blogPosts';

function BlogListPage() {
  const router = useRouter();
  useReveal();
  const [activeCat, setActiveCat] = useState('All');

  const cats = ['All', 'SEO', 'Social', 'Design', 'Marketing', 'Studio', 'Engineering'];
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);
  const filtered = rest.filter((p) => activeCat === 'All' || p.category === activeCat);

  return (
    <div>
      <section className="pt-[140px] pb-12 md:pt-[170px] md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(700px 350px at 20% 0%, #E5F8FF 0%, transparent 60%)' }}></div>
        <Section>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8 reveal">
              <Eyebrow>Journal</Eyebrow>
              <h1 className="mt-5 font-display font-extrabold text-[44px] md:text-[76px] leading-[1.02] text-ink">
                Field notes from<br/>
                <span className="text-midnight">the studio.</span>
              </h1>
            </div>
            <div className="md:col-span-4 reveal">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Short essays on design, engineering, SEO, and running a small services business.
              </p>
            </div>
          </div>
        </Section>
      </section>

      {featured && (
        <section className="pb-16">
          <Section>
            <button onClick={() => router.push(`/blog/${featured.slug}`)} className="reveal block w-full text-left card-hover rounded-3xl border border-line bg-paper overflow-hidden grid md:grid-cols-12">
              <div className="md:col-span-7"><Banner src={featured.img} alt={featured.title} ratio="16/10" /></div>
              <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-midnight">
                  <span className="px-2 py-1 rounded-full bg-cyan-soft">{featured.category}</span>
                  <span className="text-ink-soft">{featured.date}</span>
                  <span className="text-ink-soft">•</span>
                  <span className="text-ink-soft">{featured.read}</span>
                </div>
                <h2 className="mt-5 font-display font-bold text-[28px] md:text-[36px] leading-[1.1] text-ink">{featured.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{featured.excerpt}</p>
                <div className="mt-7 inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-midnight">Read article <span>→</span></div>
              </div>
            </button>
          </Section>
        </section>
      )}

      <section className="pb-8">
        <Section>
          <div className="reveal flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setActiveCat(c)}
                className={`px-4 py-2 rounded-full text-[12px] font-mono uppercase tracking-[0.16em] transition-all ${activeCat === c ? 'bg-midnight text-paper' : 'bg-paper border border-line text-ink-soft hover:border-midnight hover:text-midnight'}`}>
                {c}
              </button>
            ))}
          </div>
        </Section>
      </section>

      <section className="pb-32">
        <Section>
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <button key={p.slug} onClick={() => router.push(`/blog/${p.slug}`)}
                className="reveal text-left card-hover rounded-2xl border border-line bg-paper overflow-hidden flex flex-col"
                style={{ transitionDelay: `${i * 50}ms` }}>
                <Banner src={p.img} alt={p.title} ratio="16/10" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                    <span className="text-midnight">{p.category}</span>
                    <span>•</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-4 font-display font-bold text-[20px] text-ink leading-snug">{p.title}</h3>
                  <p className="mt-3 text-[14px] text-ink-soft leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="mt-5 pt-5 border-t border-line flex items-center justify-between text-[12px] text-ink-soft">
                    <span>{p.author}</span><span>{p.read}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && <div className="py-20 text-center text-ink-soft">No articles in this category yet.</div>}
        </Section>
      </section>
    </div>
  );
}

function BlogDetail({ post }) {
  const router = useRouter();
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, [post.slug]);

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <section className="pt-[130px] pb-10 md:pt-[160px] md:pb-14">
        <Section>
          <button onClick={() => router.push('/blog')} className="font-sans text-[13px] font-medium text-midnight inline-flex items-center gap-1.5 hover:gap-2 transition-all reveal">
            <span>←</span> Back to journal
          </button>
          <div className="max-w-3xl mt-8 reveal">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-midnight">
              <span className="px-2 py-1 rounded-full bg-cyan-soft">{post.category}</span>
              <span className="text-ink-soft">{post.date}</span>
              <span className="text-ink-soft">•</span>
              <span className="text-ink-soft">{post.read} read</span>
            </div>
            <h1 className="mt-6 font-display font-extrabold text-[36px] md:text-[60px] leading-[1.05] text-ink">{post.title}</h1>
            <p className="mt-6 text-[18px] leading-relaxed text-ink-soft">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-soft grid place-items-center font-display font-bold text-midnight text-[14px]">{post.author.split(' ').map((n) => n[0]).join('')}</div>
              <div className="text-[13px]">
                <div className="font-medium text-ink">{post.author}</div>
                <div className="text-ink-soft">Maittreya Studio</div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <section className="pb-16"><Section><div className="reveal"><Banner src={post.img} alt={post.title} ratio="21/9" /></div></Section></section>

      <section className="pb-24">
        <div className="max-w-[720px] mx-auto px-6 md:px-0">
          <div className="reveal text-[17px] leading-[1.75] text-ink-soft space-y-6">
            <p className="text-[20px] leading-[1.6] text-ink font-medium">
              The shortest version: most teams over-track and under-act. We've spent the last six months auditing client setups, and the same handful of mistakes show up almost every time.
            </p>
            <p>In this piece I want to walk through the actual framework we use on day one of a new engagement — what we measure, what we ignore, and the smallest dashboard that makes a real decision possible.</p>
            <h2 className="font-display font-bold text-[28px] text-ink mt-10 mb-2">Start with the question, not the metric</h2>
            <p>Before opening any analytics tool, write down the three questions leadership is actually trying to answer. If your dashboard doesn't answer one of them in under five seconds, it's the wrong dashboard.</p>
            <blockquote className="border-l-2 border-midnight pl-6 my-8 italic font-display text-[22px] text-ink leading-[1.4]">"We don't need more data. We need fewer numbers, watched more closely."</blockquote>
            <h2 className="font-display font-bold text-[28px] text-ink mt-10 mb-2">The four-metric floor</h2>
            <p>Every site we ship leaves with the same baseline: one acquisition metric, one engagement metric, one conversion metric, and one health check.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Qualified sessions (not raw visits)</li>
              <li>Activation rate (the one action that predicts retention)</li>
              <li>Lead-to-meeting conversion</li>
              <li>Core Web Vitals — INP and LCP only</li>
            </ul>
            <h2 className="font-display font-bold text-[28px] text-ink mt-10 mb-2">What we've stopped tracking</h2>
            <p>Bounce rate. Average session duration. Pageviews per session. None of these correlate well enough with revenue to justify the dashboard real estate.</p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-cyan-soft/40 py-20">
        <Section>
          <div className="reveal mb-10">
            <Eyebrow>Keep reading</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-[28px] md:text-[36px] text-ink">More from the journal</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <button key={p.slug} onClick={() => router.push(`/blog/${p.slug}`)} className="reveal text-left card-hover rounded-2xl border border-line bg-paper overflow-hidden">
                <Banner src={p.img} alt={p.title} ratio="16/10" />
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-midnight">{p.category}</div>
                  <h3 className="mt-3 font-display font-bold text-[18px] text-ink leading-snug">{p.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </Section>
      </section>
    </article>
  );
}

export { BlogListPage, BlogDetail };
