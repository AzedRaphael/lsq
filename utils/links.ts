type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/pages/favorites ', label: 'favorites' },
  { href: '/pages/bookings ', label: 'bookings' },
  { href: '/pages/reviews ', label: 'reviews' },
  { href: '/pages/rentals/create ', label: 'create rental' },
  { href: '/pages/rentals', label: 'my rentals' },
  { href: '/pages/profile ', label: 'profile' },
];
