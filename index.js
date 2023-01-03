const randomHeroBtn = document.getElementById("getRandomHero");
const heroDescriptionDiv = document.getElementById("heroDescription");
const searchInputDiv = document.getElementById("searchInput");
const searchBtn = document.getElementById("search");
let superheroId;
var delayInMilliseconds = 1000;

const showLoading = () => {
  heroDescriptionDiv.innerHTML = `
  <div class="flex flex-col items-center justify-evenly h-56">
  <span class="font-mono text-3xl ">LOADING</span>
  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  `;
  setTimeout(function () {
    heroDescriptionDiv.innerHTML = "";
  }, delayInMilliseconds);
};

const showHeroInfo = (json) => {
  let name
  setTimeout(function () {
    heroDescriptionDiv.innerHTML += `
    <div class="flex justify-start items-start space-x-10 ml-5">
        <div class="flex flex-col ">
            <span class="font-sans font-bold pb-5 text-3xl hover:text-yellow-500 hover:-translate-y-1 hover:scale-105  transition ease-in-out duration-300">${json.name}</span>
            <img src="${json.image.url}" alt="heroImage"class="w-60 rounded-xl hover:-translate-y-1 hover:scale-105  transition ease-in-out duration-300"/>
        </div>
        <div class="stats font-mono flex space-x-7 mt-10">
            <ul class="list-disc p-4 space-y-3">
              <span class="text-2xl cursor-pointer underline hover:text-yellow-500">POWERSATS</span>
              <li> 🧠 INTELLIGENCE : ${json.powerstats.intelligence} </li>
              <li> 💪 STRENGTH : ${json.powerstats.strength}</li>
              <li> ⚡ SPEED : ${json.powerstats.speed}</li> 
              <li>🏋️‍♂️ DURABILITY : ${json.powerstats.durability}</li>
              <li>📊 POWER : ${json.powerstats.power}</li>
              <li>⚔️ COMBAT : ${json.powerstats.combat}</li>
            </ul>
            <ul class="list-disc p-4 space-y-3">
            <span class="text-2xl cursor-pointer underline hover:text-yellow-500">BIOGRAPHY</span>
            <li>Full Name: ${Object.values(json.biography)[0]}</li>
            <li>Alter-Egos: ${Object.values(json.biography)[1]}</li>
            <li>Aliases: ${Object.values(json.biography)[2]}</li>
            <li>Place of Birth: ${Object.values(json.biography)[3]}</li>
            <li>First Appearance: ${Object.values(json.biography)[4]}</li>
            <li>Publisher: ${Object.values(json.biography)[5]}</li>
            </ul>
            <ul class="list-disc p-4 space-y-3">
            <span class="text-2xl cursor-pointer underline hover:text-yellow-500">APPEARANCE</span>
              <li>Gender: ${json.appearance.gender}</li>
              <li>Race: ${json.appearance.race}</li>
              <li>Height: ${json.appearance.height}</li>
              <li>Weight: ${json.appearance.weight}</li>
              <li>Eye Color: ${Object.values(json.appearance)[4]}</li>
              <li>Hair Color: ${Object.values(json.appearance)[5]}</li>
              </ul>
          </span> 
        </div>
        </div>
        <hr class="border-gray-700 ml-10">
                `;
  }, delayInMilliseconds);
};

const getSuperHero = () => {
  superheroId = Math.ceil(Math.random() * 731);
  fetch(`https://superheroapi.com/api.php/10223569763528853/${superheroId}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      showLoading();
      showHeroInfo(json);
    });
};

const getSuperHeroSearch = (str) => {
  let name = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(name);
  fetch(`https://superheroapi.com/api.php/10223569763528853/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json) {
        showLoading();
        for (const superHero of json.results) {
          showHeroInfo(superHero);
        }
      }
    });
};

