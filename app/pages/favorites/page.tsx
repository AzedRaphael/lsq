import EmptyList from '@/app/components/home/EmptyList';
import PropertiesList from '@/app/components/home/PropertiesList';
import { fetchFavorites } from '@/utils/action';

export default async function Favorite() {
  const favorites = await fetchFavorites();
  if (favorites.length === 0) {
    return <EmptyList />;
  }
  return <PropertiesList properties={favorites} />;
}
