import FavouriteToggleButton from '@/app/components/card/FavouriteToggleButton';
import PropertyRating from '@/app/components/card/PropertyRating';
import Amenities from '@/app/components/properties/Amenities';
import BookingCalender from '@/app/components/properties/BookingCalender';
import BreadCrumbs from '@/app/components/properties/BreadCrumbs';
import Description from '@/app/components/properties/Description';
import ImageContainer from '@/app/components/properties/ImageContainer';
import PropertyDetails from '@/app/components/properties/PropertyDetails';
import PropertyMap from '@/app/components/properties/PropertyMap';
import ShareButton from '@/app/components/properties/ShareButton';
import UserInfo from '@/app/components/properties/UserInfo';
import PropertyReviews from '@/app/components/reviews/PropertyReviews';
import SubmitReview from '@/app/components/reviews/SubmitReview';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchPropertyDetails, findExistingReview } from '@/utils/action';
import { auth } from '@clerk/nextjs/server';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';

const DynamicMap = dynamic(
  () => import('@/app/components/properties/PropertyMap'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full' />,
  }
);

const DynamicBookingsWrapper = dynamic(
  () => import('@/app/components/booking/BookingWrapper'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full' />,
  }
);

export default async function PropertyDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect('/');

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;

  const { userId } = auth();
  const isNotOwner = property.profile.clerkId !== userId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className='flex justify-between items-center mt-4'>
        <h1 className='text-3xl font-bold capitalize'>{property.tagline}</h1>
        <div className='flex items-center gap-x-4'>
          <ShareButton name={property.name} propertyId={property.id} />
          <FavouriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-xl font-bold '>{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className='mt-4' />
          <Description description={property.description} />
          <Amenities amenities={property.amenities} />
          {/* <PropertyMap countryCode={countryCode} /> */}
          <DynamicMap countryCode={property.country} />
        </div>
        <div className='flex flex-col items-center lg:col-span-4 '>
          {/* calender area */}
          <DynamicBookingsWrapper
            propertyId={property.id}
            price={property.price}
            bookings={property.bookings}
          />
        </div>
      </section>
      {reviewDoesNotExist && <SubmitReview propertyId={property.id} />}
      <PropertyReviews propertyId={property.id} />
    </section>
  );
}
