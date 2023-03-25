export const fetchCountries = name => {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,population,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log('🚀~ data:', data);

      const {
        name: { official },
        flags: { svg: flag },
        capital,
        population,
        languages,
      } = data[0];
      console.log(official);
      console.log(flag);
      console.log(capital[0]);
      console.log(population);
      console.log(Object.values(languages).join(', '));
      return data;
    })
    .catch(console.warn);
};

fetchCountries('ukraine');
