import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const countryListEl = document.querySelector('ul.country-list');
const inputCountryEl = countryListEl.previousElementSibling;
const countryInfoEl = countryListEl.nextElementSibling;

const handleSearchCounry = e => {
  fetchCountries(e.target.value.trim())
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length <= 10 && data.length > 1) {
        countryListEl.innerHTML = '';
        countryInfoEl.innerHTML = '';
        data.map(item => {
          markupListCountry(item);
        });
      } else if (data.length === 1) {
        countryInfoEl.innerHTML = '';
        countryListEl.innerHTML = '';
        data.map(item => {
          markupCountry(item);
        });
      }
    })
    .catch(error => {
      if (error.message === '404') {
        Notiflix.Notify.failure('Oops, there is no country with that name.');
      } else {
        console.warn(error);
      }
    });
};

inputCountryEl.addEventListener(
  'input',
  debounce(handleSearchCounry, DEBOUNCE_DELAY)
);

function markupListCountry(item) {
  countryListEl.insertAdjacentHTML(
    'beforeend',
    `<p class="country_name_list">
    <img src="${item.flags.svg}" 
    alt="country" class="country_flag" width="50">
    ${item.name.common}</p>`
  );
}

function markupCountry(item) {
  countryInfoEl.insertAdjacentHTML(
    'afterbegin',
    `<p class="country_name">
    <img src="${item.flags.svg}" alt="country" class="country_flag" width="50">
    ${item.name.common}</p>
    <p class="country_item"><span class="country_title">Capital:</span> 
    ${item.capital[0]}</p>
    <p class="country_item"><span class="country_title">Population:</span> 
    ${item.population}</p>
    <p class="country_item"><span class="country_title">Languages:</span>
    ${Object.values(item.languages).join(', ')}</p>`
  );
}
