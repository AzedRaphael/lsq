import { IconButton } from '@/app/components/form/Buttons';
import FormContainer from '@/app/components/form/FormContainer';
import EmptyList from '@/app/components/home/EmptyList';
import Title from '@/app/components/properties/Title';
import ReviewCard from '@/app/components/reviews/ReviewCard';
import { deleteReviewAction, fetchPropertyReviewsByUser } from '@/utils/action';

export default async function Review() {
  const reviews = await fetchPropertyReviewsByUser();

  if (reviews.length === 0) return <EmptyList />;

  return (
    <>
      <Title text='Your Reviews' />
      <section className='grid md:grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.property;
          const reviewInfo = { comment, name, image, rating };

          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};
