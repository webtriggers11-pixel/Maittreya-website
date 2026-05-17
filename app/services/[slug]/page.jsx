import { notFound } from 'next/navigation';
import { SERVICES_PAGE_DATA } from '@/data/services-pages';
import { ServicePageTemplate } from '@/components/service-page';

export async function generateStaticParams() {
  return Object.keys(SERVICES_PAGE_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const data = SERVICES_PAGE_DATA[params.slug];
  if (!data) return {};
  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}

export default function ServicePage({ params }) {
  const data = SERVICES_PAGE_DATA[params.slug];
  if (!data) notFound();
  return <ServicePageTemplate data={data} />;
}
