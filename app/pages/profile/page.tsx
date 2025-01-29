import FormContainer from '@/app/components/form/FormContainer';
import FormInput from '@/app/components/form/FormInput';
import SubmitButton from '@/app/components/form/Buttons';
import {
  createProfileAction,
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from '@/utils/action';
import ImageInputContainer from '@/app/components/form/ImageInputContainer';

export default async function Profile() {
  const profile = await fetchProfile();
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>User Profile</h1>
      <div className='border p-8 rounded-md'>
        {/* image container here */}
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.userName}
          action={updateProfileImageAction}
          text='Update Profile Image'
        />
        <FormContainer action={createProfileAction}>
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput
              type='text'
              name='firstName'
              label='first name'
              defaultValue={profile.firstName}
            />
            <FormInput
              type='text'
              name='lastName'
              label='last name'
              defaultValue={profile.lastName}
            />
            <FormInput
              type='text'
              name='userName'
              label='user name'
              defaultValue={profile.userName}
            />
          </div>
          <SubmitButton text='Update Profile' size='lg' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
