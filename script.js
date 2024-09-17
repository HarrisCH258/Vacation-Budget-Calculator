document.addEventListener('DOMContentLoaded', function() {
var form = document.querySelector('form');
var userName = document.querySelector('#name');
var income = document.querySelector('#income');
var rent= document.querySelector('#rent');
var utilities = document.querySelector('#utilities');
var car = document.querySelector('#car');
var living = document.querySelector('#living');
var add = document.querySelector('#add');
var error = document.querySelector('error');

//Saves into local storage data
function handleFormSubmit(event) {
    event.preventDefault();
  
    if (!userName.value.trim() || !income.value.trim() || !rent.value.trim() || !utilities.value.trim() || !car.value.trim() || !living.value.trim() || !add.value.trim()) {
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
        window.location.href = 'profiles.html'; 
    }
  
    form.addEventListener('submit', handleFormSubmit);
});
