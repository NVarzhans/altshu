let jokeButton = document.querySelector(".getJoke");
const JOKE_SRC = 'https://api.chucknorris.io/jokes/random'; 

const fetchFunction = () => {
    fetch(JOKE_SRC)
    .then((response) => {
    return response.json();})
    .then((data) => {
     document.querySelector('.jokeField').textContent = data.value;
    })
    .catch((err) => {
     document.querySelector('.jokeField').textContent = "Error. Today is not a joke day";
   })
 };
    
jokeButton.addEventListener('click', () => {
  fetchFunction();
});