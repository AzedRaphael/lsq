import FormInput from '@/app/components/form/FormInput';
import FormContainer from '@/app/components/form/FormContainer';
import { createPropertyAction } from '@/utils/action';
import SubmitButton from '@/app/components/form/Buttons';
import PriceInput from '@/app/components/form/PriceInput';
import CategoriesInput from '@/app/components/form/CategoriesInput';
import TextAreaInput from '@/app/components/form/TextAreaInput';
import CountriesInput from '@/app/components/form/CountriesInput';
import ImageInput from '@/app/components/form/ImageInput';
import CounterInput from '@/app/components/form/CounterInput';
import AmenitiesInput from '@/app/components/form/AmenitiesInput';

export default function CreatePropertyPage() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        create property
      </h1>
      <div className='border p-8 rounded'>
        <h3 className='text-lg mb-4 font-medium'>General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit)'
              defaultValue='Bungalow in Lekki'
            />

            <FormInput
              name='tagline'
              type='text'
              label='Tagline (30 limit)'
              defaultValue='Your dream apartment is here'
            />
            {/* price */}
            <PriceInput />
            {/* categories */}
            <CategoriesInput />
          </div>
          {/* description */}
          <TextAreaInput
            name='description'
            labelText='Description (10 - 1000 words)'
          />
          <div className='grid sm:grid-cols-2 gap-8 mt-4'>
            <CountriesInput />
            <ImageInput />
          </div>
          <h3 className='text-lg mt-8 mb-4 font-medium'>
            Accomodation Details
          </h3>
          <CounterInput detail='guests' />
          <CounterInput detail='bedrooms' />
          <CounterInput detail='beds' />
          <CounterInput detail='baths' />

          <h3 className='text-lg mt-10 mb-6 font-medium'>Amenities</h3>
          <AmenitiesInput />

          <SubmitButton text='Create rentals' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}
