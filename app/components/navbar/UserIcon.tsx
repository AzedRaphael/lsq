import { fetchProfileImage } from '@/utils/action';
import { LuUser } from 'react-icons/lu';

export default async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt='profile image'
        className='w-6 h-6 rounded-full object-cover'
      />
    );
  }
  return <LuUser className='w-6 h-6 bg-primary rounded-full' />;
}
