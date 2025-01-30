'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Comments({ comment }: { comment: string }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  const longComment = comment.length > 130;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 50)}...` : comment;
  return (
    <div>
      <p className='text-sm'>{displayComment}</p>
      {longComment && (
        <Button
          variant='link'
          className='pl-0 text-muted-foreground'
          onClick={toggleExpanded}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      )}
    </div>
  );
}
