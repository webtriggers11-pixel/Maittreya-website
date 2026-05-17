import { notFound } from 'next/navigation';
import { BlogDetail } from '@/components/blog';
import { BLOG_POSTS } from '@/data/blogPosts';

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.img }],
      type: 'article',
    },
  };
}

export default function Page({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return <BlogDetail post={post} />;
}
