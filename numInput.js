import { drCost } from "./forms.js";
import { saucCost } from "./forms.js";
import { ingCost } from "./forms.js";
import { drSum } from "./forms.js";
import { drAll } from "./forms.js";
import { drYvela } from "./forms.js";
import { total } from "./forms.js";
import { drShej } from "./forms.js";


export let drName;
export let drObj = []

const customNum = document.querySelectorAll('.custom-num');

    customNum.forEach(num => {
const numInput = num.querySelector('.num-input');
const arrUp = num.querySelector('.arr-up');
const arrDown = num.querySelector('.arr-down');
numInput.style.color = numInput.dataset.color;
arrUp.addEventListener('click', () => {
    numInput.stepUp();
    checkMaxMin();

    drName = numInput.dataset.name;
    drYvela[drName] = Number(numInput.value);
    console.log(drYvela);
    drShej();
    total();
});

arrDown.addEventListener('click', ()=> {
    numInput.stepDown();
    checkMaxMin();

    drName = numInput.dataset.name;
    drYvela[drName] = Number(numInput.value);
    console.log(drYvela);
    drShej();
    total();
});
numInput.addEventListener('input', checkMaxMin, total());

function checkMaxMin() {
    const numInputValue = parseInt(numInput.value);
    const numInputMax = parseInt(numInput.max);
    const numInputMin = parseInt(numInput.min);

    if(numInputValue === numInputMax) {
        num.style.paddingTop = "0.8em";
        num.style.height = "5em";
        arrUp.style.display = "none";
        num.style.paddingBottom = "0";
        arrDown.style.display = "none";
        num.style.paddingBottom = "0";
        arrDown.style.display = "block";
        } else if (numInputValue === numInputMin) {
            num.style.paddingBottom = "0.8em";
            num.style.height = "5em";
            arrDown.style.display = "none";
            num.style.paddingTop = "0";
            arrUp.style.display = "block";
        } else { 
            num.style.padding = "0";
            num.style.height = "7em";
            arrUp.style.display = "block"
            arrDown.style.display = "block";
        }
    } 
});