import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CalculateTotals } from '@/utils/calculateTotals';
import { formatCurrency } from '@/utils/formats';
import { useProperty } from '@/utils/store';

export default function BookingForm() {
  const { range, price } = useProperty((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  const { totalNights, subTotal, cleaningFee, serviceFee, orderTotal, tax } =
    CalculateTotals({ checkIn, checkOut, price });
  return (
    <Card className='p-8 mb-4'>
      <CardTitle className='mb-8'>Summary</CardTitle>
      <FormRow label={`${price} X ${totalNights}`} amount={subTotal} />
      <FormRow label='Cleaning Fee' amount={cleaningFee} />
      <FormRow label='Service Fee' amount={serviceFee} />
      <FormRow label='Tax' amount={tax} />
      <Separator className='mt-4' />
      <CardTitle className='mt-8'>
        <FormRow label='BookingTotal' amount={orderTotal} />
      </CardTitle>
    </Card>
  );
}

function FormRow({ label, amount }: { label: string; amount: number }) {
  return (
    <p className='flex justify-between text-sm mb-2'>
      <span>{label}</span>
      <span>{formatCurrency(amount)}</span>
    </p>
  );
}
