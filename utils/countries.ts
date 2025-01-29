import { isAuthSessionMissingError } from '@supabase/supabase-js';
import countries from 'world-countries';

export const formattedCountries = countries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    flag: item.flag,
    location: item.latlng,
    region: item.region,
  };
});

// setup a helper function that finds country by code
export const findCountryByCode = (code: string) => {
  return formattedCountries.find((item) => item.code === code);
};
