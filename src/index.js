import './css/styles.css';
import debounce from 'lodash.debounce';
// import fetchCountries from "./fetchCountries";
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
let name = '';

const countryListEl = document.querySelector('ul.country-list');
const inputCountryEl = countryListEl.previousElementSibling;
const countryInfoEl = countryListEl.nextElementSibling;

const handleSearchCounry = e => {
  name = e.target.value;
  // fetchCountries(name);
  console.log('name:', name);
  //   if (official.includes(name)) {
  //   markupListCountry()
  // }
};

inputCountryEl.addEventListener(
  'input',
  debounce(handleSearchCounry, DEBOUNCE_DELAY)
);

// let country = fetchCountries('ukraine');
// console.log("🚀 ~ file: index.js:19 ~ country:", country);

// function markupListCountry() {
//   countryListEl.insertAdjacentElement(
//     'afterbegin',
//     `<p class="country_name_list"><img src="${flag}" alt="country" class="country_flag_list width="100" height="50"">${official}</p>`
//   );
// }

// function markupCountry() {
//   `<p class="country_name"><img src="${flag}" alt="country" class="country_flag width="100" height="50"">${official}</p>

//     <p class="country_capital">Capital: ${capital[0]}</p>
//     <p class="country_population">Population: ${population}</p>
//     <p class="country_languages">Languages: ${Object.values(languages).join(
//       ', '
//     )}</p>`;
// }
