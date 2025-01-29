'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SubmitButton from '../form/Buttons';
import { createReviewAction } from '@/utils/action';
import TextAreaInput from '../form/TextAreaInput';
import RatingInput from '../form/Rating';
import FormContainer from '../form/FormContainer';

export default function SubmitReview({ propertyId }: { propertyId: string }) {
  const [isReviewFormVisible, setReviewformVisible] = useState(false);

  return (
    <div className='mt-8'>
      <Button onClick={() => setReviewformVisible((prev) => !prev)}>
        Leave a review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='propertyId' value={propertyId} />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              labelText='Your thoughts on this property'
              defaultValue='Amazing place!!!'
            />
            <SubmitButton text='submit' className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}
