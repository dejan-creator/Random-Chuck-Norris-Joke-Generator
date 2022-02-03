

const button = document.querySelector(".button"); 
console.log(button);
// create element button
const quote = document.querySelector(".quote"); 
// create element the paragraph

const getJoke = async () => {    

// const HTMLElement = document.querySelector(".quote")

const response = await fetch ("https://api.chucknorris.io/jokes/random")

const responseData = await response.json();

// const for creating  HTMLElement
quote.innerHTML = `<img src="${responseData.icon_url}" alt="ChuckNoris">

${responseData.value}`

};
button.addEventListener('click', getJoke);
//adding the functionality to the button