import { Button } from '@/components/ui/button';
// import Image from 'next/image';
import Link from 'next/link';
// import logo from '@/app/images/logo.png';
// import { LuTent } from 'react-icons/lu';
import { HiOutlineHomeModern } from 'react-icons/hi2';

export default function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <HiOutlineHomeModern className='w-10 h-10' />
      </Link>
    </Button>
  );
}
