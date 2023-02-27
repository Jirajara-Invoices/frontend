// eslint-disable-next-line import/default
import isoCountries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import es from "i18n-iso-countries/langs/es.json";

// Loaded in this way because vitest doesn't support cjs named imports like nuxt default bundler.
// eslint-disable-next-line import/no-named-as-default-member
const { getNames, registerLocale } = isoCountries;

registerLocale(en);
registerLocale(es);

export const useCountries = (lang: string) => {
  return Object.entries(getNames(lang)).map((country) => ({
    text: country[1],
    value: country[0],
  }));
};
