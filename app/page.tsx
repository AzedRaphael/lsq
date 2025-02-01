import { Button } from '@/components/ui/button';
import CategoriesList from './components/home/CategoriesList';
import PropertiesContainer from './components/home/PropertiesContainer';
import { Suspense } from 'react';
import { LoadingCards } from './components/card/LoadingCards';

export default function Homepage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  // const category = searchParams?.category || '';
  // const search = searchParams?.search || '';
  return (
    <section suppressHydrationWarning>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </Suspense>
    </section>
  );
}
