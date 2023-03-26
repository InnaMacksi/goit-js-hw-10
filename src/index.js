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
        clearMarkup();
        data.map(item => {
          markupListCountry(item);
        });
      } else if (data.length === 1) {
        clearMarkup();
        data.map(item => {
          markupCountry(item);
        });
      }
    })
    .catch(error => {
      if (error.message === '404') {
                clearMarkup();

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

function markupListCountry({name: { common },
        flags: { svg }}) {
  countryListEl.insertAdjacentHTML(
    'beforeend',
    `<p class="country_name_list">
    <img src="${svg}" 
    alt="country" class="country_flag" width="50">
    ${common}</p>`
  );
}

function markupCountry({name: { common },
        flags: { svg },
        capital,
        population,
        languages}
) {
  countryInfoEl.insertAdjacentHTML(
    'afterbegin',
    `<p class="country_name">
    <img src="${svg}" alt="country" class="country_flag" width="50">
    ${common}</p>
    <p class="country_item"><span class="country_title">Capital:</span> 
    ${capital[0]}</p>
    <p class="country_item"><span class="country_title">Population:</span> 
    ${population}</p>
    <p class="country_item"><span class="country_title">Languages:</span>
    ${Object.values(languages).join(', ')}</p>`
  );
}

function clearMarkup() {
        countryListEl.innerHTML = '';
        countryInfoEl.innerHTML = '';
}