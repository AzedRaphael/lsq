import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import { FaHeart } from 'react-icons/fa';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteId, toggleFavoriteAction } from '@/utils/action';
import FavouriteToggleForm from './FavouriteToggleForm';

export default async function FavouriteToggleButton({
  propertyId,
}: {
  propertyId: string;
}) {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ propertyId });
  return (
    <FavouriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />
  );
}
