const randomHeroBtn = document.getElementById("getRandomHero");
const heroDescriptionDiv = document.getElementById("heroDescription");
const searchInputDiv = document.getElementById("searchInput");
const searchBtn = document.getElementById("search");
let superheroId;
var delayInMilliseconds = 3000;

const showHeroInfo = (json) => {
  heroDescriptionDiv.innerHTML = `
        <div class="flex flex-col items-center justify-evenly h-56">
            <span class="font-mono text-3xl ">LOADING</span>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        `;
  setTimeout(function () {
    heroDescriptionDiv.innerHTML = `
        <div class="flex flex-col items-center">
            <span class="font-sans font-bold pb-5 text-3xl">${json.name}</span>
            <img src="${json.image.url}" alt="heroImage" width="200" class="rounded-xl"/>
        </div>
        <div class="stats font-mono flex flex-col space-y-7 mt-10">
            <span> 🧠 INTELLIGENCE : ${json.powerstats.intelligence} </span>
            <span> 💪 STRENGTH : ${json.powerstats.strength}</span>
            <span> ⚡ SPEED : ${json.powerstats.speed}</span>
            <span>🏋️‍♂️ DURABILITY : ${json.powerstats.durability}</span>
            <span>📊 POWER : ${json.powerstats.power}</span>
            <span>⚔️ COMBAT : ${json.powerstats.combat}</span>
        </div>
                `;
  }, delayInMilliseconds);
};
const getSuperHero = () => {
  superheroId = Math.ceil(Math.random() * 731);
  fetch(`https://superheroapi.com/api.php/10223569763528853/${superheroId}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const getSuperHeroSearch = (name) => {
    
  fetch(`https://superheroapi.com/api.php/10223569763528853/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
      const superHero = json.results[0];
      showHeroInfo(superHero);
    });
};

searchBtn.onclick = () => {
    getSuperHeroSearch(searchInputDiv.value);
}
randomHeroBtn.onclick = () => {
  getSuperHero();
};
