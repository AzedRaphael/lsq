'use client';
import { Input } from '../../../components/ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

export default function NavSearch() {
  const searchParams = useSearchParams();
  // const pathName = usePathname();
  const { replace } = useRouter();

  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );

  // function invoked on key stroke
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    // replace(`${pathName}?${params.toString()}`);
    replace(`/?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);

  return (
    <Input
      type='text'
      placeholder='find a property...'
      className='max-w-xs dark:bg-muted'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}
