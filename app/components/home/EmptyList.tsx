import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EmptyList({
  heading = 'No items in the list',
  message = 'Keep exploring our properties.',
  btnText = 'back home',
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) {
  return (
    <div className='mt-4'>
      <h2 className='text-xl font-bold'>{heading}</h2>
      <p className='text-lg'>{message}</p>
      <Button className='mt-4 capitalize' size='lg' asChild>
        <Link href='/'>{btnText}</Link>
      </Button>
    </div>
  );
}
