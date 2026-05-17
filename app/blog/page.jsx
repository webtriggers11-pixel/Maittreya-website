import { BlogListPage } from '@/components/blog';

export const metadata = {
  title: 'Blog',
  description:
    'Field notes from the studio — essays on design, engineering, SEO, and running a small services business.',
};

export default function Page() {
  return <BlogListPage />;
}
