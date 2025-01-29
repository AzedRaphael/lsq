import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function RatingInput({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) {
  const numbers = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    return value.toString();
  }).reverse();
  return (
    <div className='mb-2 max-w-xs'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
        <Select defaultValue={numbers[0]} name={name} required>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {numbers.map((number) => {
              return (
                <SelectItem key={number} value={number}>
                  {number}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </Label>
    </div>
  );
}
