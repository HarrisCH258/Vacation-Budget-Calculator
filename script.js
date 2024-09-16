
const form = document.querySelector('form');
const rent= document.querySelector('#rent');
const utilities = document.querySelector('#utilities');
const car = document.querySelector('#car');
const living = document.querySelector('#living');
const add = document.querySelector('#add');
const submit = document.querySelector('#submit');

//Saves local storage data
function saveData() {
    localStorage.setItem('data', JSON.stringify(data));
}