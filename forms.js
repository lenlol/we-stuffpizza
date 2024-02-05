import { drName } from "./numInput.js";
import { drObj } from "./numInput.js";

const pizzaBase = document.querySelector(".the-pizza");
const mushroom = document.querySelector("#mushroom")
const olive = document.querySelector("#olive")
const onion = document.querySelector("#onion")
const pepperoni = document.querySelector("#pepperoni")
const tomato = document.querySelector("#tomato")
const basil = document.querySelector("#basil")
const broccoli = document.querySelector("#broccoli")
const cheese = document.querySelector("#cheese")
const pepper = document.querySelector("#pepper")
const ham = document.querySelector("#ham")
const ingCheckbox = document.querySelectorAll(".ing-checkbox")
const saucCheckbox = document.querySelectorAll(".sauc-checkbox")
const drCheckbox = document.querySelectorAll(".dr-checkbox")
const numInput = document.querySelectorAll(".num-input")
const stuff = document.querySelector(".stuffed-crust-check")
const pay = document.querySelector(".pick-input-cash")
const city = document.querySelector(".select-city")
const address = document.querySelector(".address-input-js")
const orderFinal = document.querySelector('.order-now-js')
const popUpDone = document.querySelector(".pop-up-wrap-done")


const ingredients = [mushroom,olive,onion,pepperoni,tomato,basil,broccoli,cheese,pepper,ham];
let ingSum = [];
let saucSum = [];
export let drSum = [];
export let drAll = []
export let ingCost = 0;
export let drCost = 0;
export let saucCost = 0;
export let drYvela = {
    pepsi: 0,
    cola: 0,
    fanta: 0,
    schweppes: 0,
};

let everything = {
    ingredients: ingSum,
    sauces: saucSum,
    drinks: drYvela,
    stuffed: 'no',
    payment: 'unknown',
    location: {
        city: 'unknown',
        address: 'unknown'
    }
}

function loc(){
    everything.location.city = city.options[city.selectedIndex].value;
    everything.location.address = address.value
}


export function total(){
    const priceSpan = document.querySelector(".price-span")
    priceSpan.textContent = 10 + saucCost + ingCost + drCost;
};


ingCheckbox.forEach(checkbox => {
    let img = document.createElement("img");
    checkbox.addEventListener('click', check);
    const value = checkbox.value;
    function check(){
        if (checkbox.checked == true){
            img.src = `images/on/${value}-on.png`;
            img.classList.add(`${value}-class`);
            pizzaBase.appendChild(img);
            ingSum.push(`${value}`);
        } else if (checkbox.checked == false) {
            pizzaBase.removeChild(img);
            ingSum = ingSum.filter(function(e) { return e !== `${value}` })
        }
        
        ingCost = ingSum.length * 1;
        total()
    } 
});


saucCheckbox.forEach(checkbox => {
    let img = document.createElement("img");
    checkbox.addEventListener('click', check);
    const value = checkbox.value;
    
    function check(){
        if (checkbox.checked == true){
            img.src = `images/on/${value}-on.png`;
            img.classList.add(`${value}-class`);
            pizzaBase.appendChild(img);
            saucSum.push(`${value}`);

        } else if (checkbox.checked == false) {
            pizzaBase.removeChild(img);
            saucSum = saucSum.filter(function(e) { return e !== `${value}` })

        }
        
        saucCost = saucSum.length * 2;

        total()
    }
});

export function drShej() {
    drCost = (drYvela[`pepsi`] * 4) +(drYvela[`cola`] * 4) +(drYvela[`fanta`] * 4) +(drYvela[`schweppes`] * 4)
}

drCheckbox.forEach(checkbox => {
    checkbox.addEventListener('click', check);

    const value = checkbox.value;
    
    
    const bar = document.querySelector(`.${value}-barrier`)
    const adding = bar.classList; 


    function check(){
        if (checkbox.checked == true) {
            adding.add("barrier-gone");
            let numValue = document.querySelector(`.${value}`).value;
            drYvela[`${value}`] = Number(numValue)

        }
            else if (checkbox.checked == false) {
            adding.remove("barrier-gone");
            drYvela[`${value}`] = 0

        }

        drShej()


        total()

    };
});



stuff.addEventListener('click', () => {
    if (stuff.checked == true) {
        everything['stuffed'] = 'yes';
    } else if (stuff.checked == false) {
        everything['stuffed'] = 'no';
    }
})


pay.addEventListener('click', () => {
    if (pay.checked == true) {
        everything['payment'] = 'cash';
    } else if (pay.checked == false) {
        everything['payment'] = 'unknown';
    }
})


orderFinal.addEventListener('click', () => {
    loc()

    popUpDone.classList.remove('pop-up-wrap-done-gone')
})