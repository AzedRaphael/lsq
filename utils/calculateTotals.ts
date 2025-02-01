import { calculateDaysBetween } from './calendar';

type BookingDetails = {
  checkIn: Date;
  checkOut: Date;
  price: number;
};

export function CalculateTotals({ checkIn, checkOut, price }: BookingDetails) {
  const totalNights = calculateDaysBetween({ checkIn, checkOut });

  const subTotal = totalNights * price;
  const cleaningFee = 21;
  const serviceFee = 40;
  const tax = subTotal * 0.1;
  const orderTotal = subTotal + serviceFee + cleaningFee + tax;
  return { totalNights, subTotal, cleaningFee, serviceFee, orderTotal, tax };
}
