// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
import FormContainer from '@/app/components/form/FormContainer';
import FormInput from '@/app/components/form/FormInput';
import SubmitButton from '@/app/components/form/Buttons';
import { createProfileAction } from '@/utils/action';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function CreateProfilePage() {
  const user = await currentUser();

  if (user?.privateMetadata?.hasProfile) redirect('/');
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProfileAction}>
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput type='text' name='firstName' label='first name' />
            <FormInput type='text' name='lastName' label='last name' />
            <FormInput type='text' name='userName' label='user name' />
          </div>
          <SubmitButton text='Create Profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
