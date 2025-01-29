import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

export default function TextAreaInput({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) {
  return (
    <div className='mb-2'>
      <Label className='capitalize' htmlFor={name}>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  );
}

const tempDefaultDescription =
  'A modern, spacious apartment featuring contemporary design, ample natural light, fully equipped kitchen, comfortable living spaces, and convenient location.';
