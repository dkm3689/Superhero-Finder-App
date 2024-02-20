// const searchButton = document.getElementById("search-button");
// const inputBar = document.getElementById("input-bar");
// const searchResults = document.getElementById("search-results");
// const errorMessage = document.getElementById("error-message");
// const heroDetails = document.getElementById("hero-details");
// const favouritesMenu = document.getElementById("favourites-menu");
// const favouritesRow = document.getElementById("favourites-row");
// const favouritesButton = document.getElementById("favourites-button");
// const favouritesSet = new Set();

// // import { md5 } from "crypto-js";
// // const md5 = require("crypto-js/md5");

// const md5 = require("crypto-js/md5");

// console.log(md5("text to hash").toString());

// const publicKey = "ed62d5adbade00ecab8a29380ea234db";
// const privateKey = "082c98aea1e7c87b9ec65aed40af8f014db9e202";
// const apiBaseUrl = "https://gateway.marvel.com/v1/public";

// console.log(`${apiBaseUrl}/thor`);

// function createURL() {
//   const ts = Date.now();

//   const params = new URLSearchParams({
//     ts: ts.toString(),
//     apikey: publicKey,
//     hash: md5(ts + privateKey + publicKey),
//   });

//   const endPoint = `${apiBaseURL}/characters?`;
//   const URL = endPoint + params.toString();

//   return URL;
// }

// const URL = createURL();
// console.log(`URL: ${URL}`);

// const favouritesEmptyMessage = document.getElementById(
//   "favourites-empty-message"
// );

// favouritesButton.addEventListener("click", () => {
//   errorMessage.style.display = "none";
//   heroDetails.style.display = "none";
//   favouritesMenu.style.display = "flex";

//   if (favouritesSet.size === 0) {
//     favouritesEmptyMessage.style.display = "block";
//   } else {
//     favouritesEmptyMessage.style.display = "none";
//   }
// });

// searchButton.addEventListener("click", () => {
//   console.log("search");
//   errorMessage.innerHTML = "";

//   favouritesMenu.style.display = "none";
//   heroDetails.style.display = "none";
//   inputBar.style.borderBottomLeftRadius = "0px";
//   inputBar.style.borderBottomRightRadius = "0px";

//   const searchValue = inputBar.value.trim();

//   if (searchValue === "") {
//     errorMessage.style.display = "flex";
//     errorMessage.innerHTML = "Please Type Something to search!";
//     clearSearchResults();
//     return;
//   }

//   fetch(URL)
//     .then((response) => {
//       response.json();
//       console.log(response.json());
//     })
//     // .then((data) => {
//     //   clearSearchResults();

//     //   if (data.character) {
//     //     searchResults.style.display = "block";

//     //     data.characters.forEach((character) => {
//     //       // creating div element for each superHero
//     //       const heroCard = document.createElement("div");
//     //       heroCard.style.textAlign = "center";
//     //       searchResults.appendChild(heroCard);
//     //       heroCard.classList.add("hero-card");

//     //       const heroImage = document.createElement("img");
//     //       heroImage.src = character.strCharacterThumb;
//     //       heroCard.appendChild(heroImage);
//     //       heroImage.classList.add("hero-image");

//     //       const heroName = document.createElement("h3");
//     //       heroName.textContent = character.strCharacter;
//     //       heroCard.appendChild(heroName);
//     //       heroName.classList.add("hero-name");

//     //       heroCard.addEventListener("click", (event) => {
//     //         if (event.target != addToFavourites) {
//     //           heroDetails.textContent = "";
//     //           heroDetails.style.display = "flex";
//     //           searchResults.style.display = "none";
//     //           heroCard.style.display = "none";

//     //           const heroDetailsName = document.createElement("h1");
//     //           heroDetailsName.style.fontSize = "40px";
//     //           heroDetailsName.textContent = character.strCharacter;
//     //           heroDetailsName.classList.add("hero-name");
//     //           heroDetails.appendChild(heroDetailsName);

//     //           const heroDetailsImage = document.createElement("img");
//     //           heroDetailsImage.src = character.strCharacterThumb;
//     //           heroDetailsImage.classList.add("hero-image");
//     //           heroDetailsImage.style.height = "200px";
//     //           heroDetailsImage.style.borderRadius = "50%";
//     //           heroDetails.appendChild(heroDetailsImage);

//     //           const heroDetailsAbout = document.createElement("div");
//     //           heroDetailsAbout.textContent = character.strDetails;
//     //           heroDetails.appendChild(heroDetailsAbout);
//     //           heroDetailsAbout.classList.add("hero-about");
//     //         }
//     //       });

//     //       const addToFavourites = document.createElement("button");
//     //       addToFavourites.textContent = "Add to Favourites";
//     //       heroCard.appendChild(addToFavourites);
//     //       addToFavourites.classList.add("add-to-favourites");

//     //       if (favouritesSet.has(cahracter.strCharacter)) {
//     //         addToFavourites.textContent = "Added to Favourites";
//     //         addToFavourites.classList.add("added-to-favourites");
//     //       }

//     //       addToFavourites.addEventListener("click", (event) => {
//     //         event.stopPropagation(); // Stop the event from propagating to the heroCard click event

//     //         if (!favouritesSet.has(character.strCharacter)) {
//     //           addToFavourites.classList.add("added-to-favourites"); // Add a class to the button
//     //           addToFavourites.textContent = "Added To Favourites";
//     //           favouritesSet.add(character.strCharacter); // Add the meal to the set

//     //           addToFavourites.style.backgroundColor = "green";
//     //           const heroFavouritesCard = document.createElement("div");
//     //           favouritesMenu.style.display = "none";
//     //           heroFavouritesCard.classList.add("favourites-card");
//     //           favouritesRow.appendChild(heroFavouritesCard);

//     //           const clonedHeroName = heroName.cloneNode(true);
//     //           const clonedHeroImage = heroImage.cloneNode(true);

//     //           heroFavouritesCard.appendChild(clonedHeroName);
//     //           heroFavouritesCard.appendChild(clonedHeroImage);

//     //           const removeButton = document.createElement("button");
//     //           removeButton.innerHTML = "Remove";
//     //           removeButton.classList.add("remove-button");
//     //           heroFavouritesCard.appendChild(removeButton);
//     //           heroImage.style.width = "80px";

//     //           removeButton.addEventListener("click", () => {
//     //             // event.stopPropagation(); // Stop the event from propagating to the removeButton click event

//     //             removeButton.innerHTML = "Removed";

//     //             addToFavourites.style.backgroundColor = "white";
//     //             addToFavourites.textContent = "Add to Favourites";
//     //             favouritesSet.delete(character.strCharacter); // Remove the character from the set

//     //             if (favouritesSet.size === 0) {
//     //               console.log("error set to block");
//     //               favouritesEmptyMessage.style.display = "block";
//     //             }

//     //             heroFavouritesCard.remove();
//     //           });
//     //         }
//     //       });

//     //       favouritesButton.addEventListener("click", () => {
//     //         if (favouritesSet.size === 0) {
//     //           favouritesEmptyMessage.style.display = "block";
//     //         } else {
//     //           favouritesEmptyMessage.style.display = "none";
//     //         }

//     //         heroDetails.style.display = "none";
//     //         favouritesMenu.style.display = "flex";
//     //       });

//     //       document.addEventListener("click", (event) => {
//     //         if (
//     //           event.target != searchButton &&
//     //           event.target != searchResults &&
//     //           event.target != inputBar &&
//     //           event.target != heroCard
//     //         ) {
//     //           searchResults.style.display = "none";
//     //           inputBar.style.borderBottomLeftRadius = "10px";
//     //           inputBar.style.borderBottomRightRadius = "10px";
//     //           errorMessage.style.display = "none";
//     //         }
//     //       });
//     //     });
//     //   } else {
//     //     errorMessage.style.display = "flex";
//     //     errorMessage.innerHTML = "Oops, No Results Found! Please try again...";
//     //     searchResults.style.display = "none";
//     //   }
//     // });
// });

// function clearSearchResults() {
//   searchResults.innerHTML = "";
// }

const searchButton = document.getElementById("search-button");
const inputBar = document.getElementById("input-bar");
const searchResults = document.getElementById("search-results");
const errorMessage = document.getElementById("error-message");
const heroDetails = document.getElementById("hero-details");
const favouritesMenu = document.getElementById("favourites-menu");
const favouritesRow = document.getElementById("favourites-row");
const favouritesButton = document.getElementById("favourites-button");
const favouritesSet = new Set();

// console.log("test1");

const favouritesEmptyMessage = document.getElementById(
  "favourites-empty-message"
);

favouritesButton.addEventListener("click", () => {
  errorMessage.style.display = "none";
  heroDetails.style.display = "none";
  favouritesMenu.style.display = "flex";

  if (favouritesSet.size === 0) {
    favouritesEmptyMessage.style.display = "block";
  } else {
    favouritesEmptyMessage.style.display = "none";
  }
});

searchButton.addEventListener("click", () => {
  console.log("Searching...");
  errorMessage.innerHTML = "";

  favouritesMenu.style.display = "none";
  heroDetails.style.display = "none";
  inputBar.style.borderBottomLeftRadius = "0px";
  inputBar.style.borderBottomRightRadius = "0px";

  const searchValue = inputBar.value.trim();

  if (searchValue === "") {
    errorMessage.style.display = "flex";
    errorMessage.innerHTML = "Please Type Something to search!";
    clearSearchResults();
    return;
  }

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      clearSearchResults();

      if (data.meals) {
        searchResults.style.display = "block";

        data.meals.forEach((meal) => {
          // creating div element for each superHero
          const heroCard = document.createElement("div");
          heroCard.style.textAlign = "center";
          searchResults.appendChild(heroCard);
          heroCard.classList.add("hero-card");

          const heroImage = document.createElement("img");
          heroImage.src = meal.strMealThumb;
          heroCard.appendChild(heroImage);
          heroImage.classList.add("hero-image");

          const heroName = document.createElement("h3");
          heroName.textContent = meal.strMeal;
          heroCard.appendChild(heroName);
          heroName.classList.add("hero-name");

          heroCard.addEventListener("click", (event) => {
            if (event.target != addToFavourites) {
              heroDetails.textContent = "";
              heroDetails.style.display = "flex";
              searchResults.style.display = "none";
              heroCard.style.display = "none";

              const heroDetailsName = document.createElement("h1");
              heroDetailsName.style.fontSize = "40px";
              heroDetailsName.textContent = meal.strMeal;
              heroDetailsName.classList.add("hero-name");
              heroDetails.appendChild(heroDetailsName);

              const heroDetailsImage = document.createElement("img");
              heroDetailsImage.src = meal.strMealThumb;
              heroDetailsImage.classList.add("hero-image");
              heroDetailsImage.style.height = "200px";
              heroDetailsImage.style.borderRadius = "50%";
              heroDetails.appendChild(heroDetailsImage);

              const heroDetailsAbout = document.createElement("div");
              heroDetailsAbout.textContent = meal.strInstructions;
              heroDetails.appendChild(heroDetailsAbout);
              heroDetailsAbout.classList.add("hero-about");
            }
          });

          const addToFavourites = document.createElement("button");
          addToFavourites.textContent = "Add to Favourites";
          heroCard.appendChild(addToFavourites);
          addToFavourites.classList.add("add-to-favourites");

          if (favouritesSet.has(meal.strMeal)) {
            addToFavourites.textContent = "Added to Favourites";
            addToFavourites.classList.add("added-to-favourites");
          }

          addToFavourites.addEventListener("click", (event) => {
            event.stopPropagation(); // Stop the event from propagating to the heroCard click event

            if (!favouritesSet.has(meal.strMeal)) {
              addToFavourites.classList.add("added-to-favourites"); // Add a class to the button
              addToFavourites.textContent = "Added To Favourites";
              favouritesSet.add(meal.strMeal); // Add the meal to the set

              addToFavourites.style.backgroundColor = "green";
              const heroFavouritesCard = document.createElement("div");
              favouritesMenu.style.display = "none";
              heroFavouritesCard.classList.add("favourites-card");
              favouritesRow.appendChild(heroFavouritesCard);

              const clonedHeroName = heroName.cloneNode(true);
              const clonedHeroImage = heroImage.cloneNode(true);

              heroFavouritesCard.appendChild(clonedHeroName);
              heroFavouritesCard.appendChild(clonedHeroImage);

              const removeButton = document.createElement("button");
              removeButton.innerHTML = "Remove";
              removeButton.classList.add("remove-button");
              heroFavouritesCard.appendChild(removeButton);
              heroImage.style.width = "80px";

              removeButton.addEventListener("click", () => {
                // event.stopPropagation(); // Stop the event from propagating to the removeButton click event

                removeButton.innerHTML = "Removed";

                addToFavourites.style.backgroundColor = "white";
                addToFavourites.textContent = "Add to Favourites";
                favouritesSet.delete(meal.strMeal); // Remove the meal from the set

                if (favouritesSet.size === 0) {
                  console.log("error set to block");
                  favouritesEmptyMessage.style.display = "block";
                }

                heroFavouritesCard.remove();
              });
            }
          });

          favouritesButton.addEventListener("click", () => {
            if (favouritesSet.size === 0) {
              favouritesEmptyMessage.style.display = "block";
            } else {
              favouritesEmptyMessage.style.display = "none";
            }

            heroDetails.style.display = "none";
            favouritesMenu.style.display = "flex";
          });

          document.addEventListener("click", (event) => {
            if (
              event.target != searchButton &&
              event.target != searchResults &&
              event.target != inputBar &&
              event.target != heroCard
            ) {
              searchResults.style.display = "none";
              inputBar.style.borderBottomLeftRadius = "10px";
              inputBar.style.borderBottomRightRadius = "10px";
              errorMessage.style.display = "none";
            }
          });
        });
      } else {
        errorMessage.style.display = "flex";
        errorMessage.innerHTML = "Oops, No Results Found! Please try again...";
        searchResults.style.display = "none";
      }
    });
});

function clearSearchResults() {
  searchResults.innerHTML = "";
}
