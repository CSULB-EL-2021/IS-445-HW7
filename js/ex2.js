/*
 * Ex 2
 */

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const input = document.querySelector('#country')
const suggestions = document.querySelector('#suggestions')
input.addEventListener('input', (e) => {
  const { value } = e.target

  suggestions.innerHTML = ''
  if (value.length <= 0) return

  const regex = new RegExp(`^${value.toUpperCase()}`, 'g')
  countryList
    .filter((country) => country.toUpperCase().match(regex))
    .forEach((country) => {
      const div = document.createElement('div')
      div.classList.add('suggestion')
      div.innerText = country
      suggestions.appendChild(div)
    })
})
