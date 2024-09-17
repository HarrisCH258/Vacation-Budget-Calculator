document.addEventListener('DOMContentLoaded', function() {
var form = document.querySelector('form');
var userName = document.querySelector('#userName');
var income = document.querySelector('#income');
var rent= document.querySelector('#rent');
var utilities = document.querySelector('#utilities');
var car = document.querySelector('#car');
var living = document.querySelector('#living');
var add = document.querySelector('#add');
var error = document.querySelector('#error');

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key, newData) {
  const existingData = localStorage.getItem(key);
  let dataArray = existingData ? JSON.parse(existingData) : [];

  dataArray.push(newData);

  localStorage.setItem(key, JSON.stringify(dataArray));
}
//Saves into local storage data
function handleFormSubmit(event) {
    event.preventDefault();
  
    if (!userName.value.trim() || !income.value.trim() || !rent.value.trim() || !utilities.value.trim() || !car.value.trim() || !living.value.trim()) {
      error.textContent = 'Please complete the form';
      return;
    }
  
    const user = {
        name: userName.value.trim(),
        income: income.value.trim(),
        rent: rent.value.trim(),
        utilities: utilities.value.trim(),
        car: car.value.trim(),
        living: living.value.trim(),
    };

    let userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
        userInfo.push(user);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        redirectpage(`profiles.HTML`); 
}
  
    form.addEventListener('submit', handleFormSubmit);
});
