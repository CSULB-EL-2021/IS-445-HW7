/*
 * Ex 1
 */

const houses = [
    { code: "ST", name: "Stark" },
    { code: "LA", name: "Lannister" },
    { code: "BA", name: "Baratheon" },
    { code: "TA", name: "Targaryen" }
];

// Return an array of characters belonging to a house
const getCharacters = (houseCode) => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; // Empty array
    }
}

const select = document.querySelector('#house')
houses.forEach((house) => {
    const opt = document.createElement('option');
    opt.value = house.code;
    opt.innerHTML = house.name;
    select.appendChild(opt);
})

const charactersList = document.querySelector('#characters')
select.addEventListener('change', (e) => {
    const { value } = e.target
    const characters = getCharacters(value)

    charactersList.innerHTML = ''
    characters.forEach(character => {
        const li = document.createElement('li');
        li.innerText = character
        charactersList.appendChild(li)
    })
})
