import { cocktails } from "./data.js";

console.log("cocktails", cocktails);

//select the rigth container 
const mainContainer = document.querySelector("#main-container");
const aboutContainer = document.querySelector("#about-container");
const cocktailContainer = document.querySelector("#cocktail-container");

// Navigation Links
const aboutLink = document.querySelector(".about");
const homeLink = document.querySelector(".home");
const logoLink = document.querySelector(".logo");
const backLink = document.querySelector(".link-back");

//create content of MAIN-CONTAINER
// create a search-bar
const searchWrapper = document.createElement("div");
searchWrapper.classList.add("search-wrapper");

const label = document.createElement("label");
label.setAttribute("id","search-label");
label.setAttribute("for","search-bar");
label.innerText = "Search Your Favourite Cocktail";

const input = document.createElement("input");
input.setAttribute("id","search-bar");
input.setAttribute("type","text");

searchWrapper.appendChild(label);
searchWrapper.appendChild(input);

mainContainer.appendChild(searchWrapper);


// create the word Cocktails
const mainWord = document.createElement("h2");
mainWord.classList.add("main-word");
mainWord.innerText = "Cocktails";

mainContainer.appendChild(mainWord);


// create a Flex or Grid element to make Responsive cocktail-cards
const gridParent = document.createElement("div");
gridParent.classList.add("grid-parent");

mainContainer.appendChild(gridParent);


// create cocktail-cards
cocktails.forEach((cocktail)=>{
    // for Each cocktail create a DIV wrapper element
    const createdDiv1 = document.createElement("div");
    createdDiv1.classList.add("cocktail-card");
    
    // inside DIV wrapper element create first DIV that will have an image
    const createdDiv2 = document.createElement("div");
    createdDiv2.classList.add("card-top");
    
    const createdImg = document.createElement("img");
    createdImg.classList.add("card-img");
    createdImg.setAttribute("src",`${cocktail.strDrinkThumb}`);
    createdImg.setAttribute("alt",`${cocktail.strDrink}`);
    
    createdDiv2.appendChild(createdImg);
    
    // inside DIV wrapper element create second DIV that will have information about a cocktail and a link pointing towards detailed info
    const createdDiv3 = document.createElement("div");
    createdDiv3.classList.add("card-bottom");
    
    const createdDiv4 = document.createElement("div");
    createdDiv4.classList.add("card-info");
    
    const createdH3 = document.createElement("h3");
    createdH3.classList.add("drink-name");
    createdH3.innerText = `${cocktail.strDrink}`;
    createdDiv4.appendChild(createdH3);
    
    const createdH6 = document.createElement("h6");
    createdH6.classList.add("glass");
    createdH6.innerText = `${cocktail.strGlass}`;
    createdDiv4.appendChild(createdH6);
    
    const createdP = document.createElement("p");
    createdP.classList.add("drink-type");
    createdP.innerText = `${cocktail.strAlcoholic}`;
    createdDiv4.appendChild(createdP);
    
    const createdAnchor = document.createElement("a");
    createdAnchor.classList.add("link-btn");
    createdAnchor.innerText = `Details`;
    
    // creating Event Listener for every Details
    createdAnchor.addEventListener("click", ()=>{
        mainContainer.style.display = "none";
        aboutContainer.style.display = "none";
        cocktailContainer.style.display = "block";

        // create content of COCKTAIL-CONTAINER
        const cocktailExactName = document.querySelector("#cocktail-exact-name");
        cocktailExactName.innerText = `${cocktail.strDrink}`;
        
        const cocktailImg = document.querySelector(".cocktail-img");
        cocktailImg.src = `${cocktail.strDrinkThumb}`;
        
        document.querySelector("#name").innerText = `${cocktail.strDrink}`;
        document.querySelector("#category").innerText = `${cocktail.strCategory}`;
        document.querySelector("#info").innerText = `${cocktail.strAlcoholic}`;
        document.querySelector("#glass").innerText = `${cocktail.strGlass}`;
        document.querySelector("#instructions").innerText = `${cocktail.strInstructions}`;
        if(cocktail.strIngredient6 !== undefined){
            document.querySelector("#ingredients").innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3} ${cocktail.strIngredient4} ${cocktail.strIngredient5} ${cocktail.strIngredient6}`;
        }else if(cocktail.strIngredient5 !== undefined){
            document.querySelector("#ingredients").innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3} ${cocktail.strIngredient4} ${cocktail.strIngredient5}`;
        }else if(cocktail.strIngredient4 !== undefined){
            document.querySelector("#ingredients").innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3} ${cocktail.strIngredient4}`;
        }else if(cocktail.strIngredient3 !== undefined){
            document.querySelector("#ingredients").innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3}`;
        }else if(cocktail.strIngredient2 !== undefined){
            document.querySelector("#ingredients").innerText = `${cocktail.strIngredient1} ${cocktail.strIngredient2}`;
        }else if(cocktail.strIngredient1 !== undefined){
            document.querySelector("#ingredients").innerText = `${cocktail.strIngredient1}`;
        }
    })
    // add codes for each coktail info
    
    createdDiv3.appendChild(createdDiv4);
    createdDiv3.appendChild(createdAnchor);
    
    // append first and second DIV elements inside DIV wrapper element
    createdDiv1.appendChild(createdDiv2);
    createdDiv1.appendChild(createdDiv3);
    gridParent.appendChild(createdDiv1);
})

// Event Listeners
aboutLink.addEventListener("click",()=>{
    mainContainer.style.display = "none";
    aboutContainer.style.display = "block";
    cocktailContainer.style.display = "none";
})

homeLink.addEventListener("click",()=>{
    mainContainer.style.display = "block";
    aboutContainer.style.display = "none";
    cocktailContainer.style.display = "none";
})

logoLink.addEventListener("click",()=>{
    mainContainer.style.display = "block";
    aboutContainer.style.display = "none";
    cocktailContainer.style.display = "none";
})

backLink.addEventListener("click", ()=>{
    mainContainer.style.display = "block";
    aboutContainer.style.display = "none";
    cocktailContainer.style.display = "none";
})

// Input and Search
input.addEventListener('keyup', ()=>{

    let allDrinkNames = document.querySelectorAll(".drink-name");
    let allCocktails = document.querySelectorAll(".cocktail-card");

    let number = 0;
    const warning = document.querySelector(".warning");
    for(let i=0;i<allDrinkNames.length;i++){
        if((allDrinkNames[i].innerText).toLowerCase().includes(input.value.toLowerCase())){
            allCocktails[i].style.display = "block"
            number += 1;
        }else{
            allCocktails[i].style.display = "none"
            number -= 1;
        }
    }
    if(number === -(allCocktails.length)){
        warning.style.display = "block";
    }else{
        warning.style.display = "none";
    }
})



