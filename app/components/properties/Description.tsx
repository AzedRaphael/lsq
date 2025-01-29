'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Title from './Title';

export default function Description({ description }: { description: string }) {
  const [isFullDescriptionShown, setFullDescriptionShown] = useState(false);

  const wordCount = description.split(' ');
  const isLongDescription = wordCount.length > 100;
  const toggleDescription = () => {
    setFullDescriptionShown(!isFullDescriptionShown);
  };
  const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? wordCount.splice(0, 100).join(' ') + '...'
      : description;
  return (
    <article className='mt-4'>
      <Title text='Description' />
      <p className='text-muted-foreground font-light leading-loose'>
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button variant='link' className='pl-0' onClick={toggleDescription}>
          {isFullDescriptionShown ? 'Show less' : 'Show more'}
        </Button>
      )}
    </article>
  );
}
