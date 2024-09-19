var form = document.querySelector('form');
var userName = document.querySelector('#userName'); 
var income = document.querySelector('#income');
var rent = document.querySelector('#rent');
var utilities = document.querySelector('#utilities');
var car = document.querySelector('#car');
var living = document.querySelector('#living');
var error = document.querySelector('#error');

// Saves info into local storage data to be used in the profiles page
function handleFormSubmit(event) {
    event.preventDefault();
    console.log('form submitted');
    if (!userName.value.trim() || !income.value.trim() || !rent.value.trim() || !utilities.value.trim() || !car.value.trim() || !living.value.trim()) {
        error.textContent = 'Please complete the form';
        return;
    }

    error.textContent = '';

    const userInfoString = JSON.stringify({
        name: userName.value.trim(),
        income: income.value.trim(),
        rent: rent.value.trim(),
        utilities: utilities.value.trim(),
        car: car.value.trim(),
        living: living.value.trim(),
    });
    
    localStorage.setItem('userInfo', userInfoString);
        
    window.location.href = 'profiles.HTML';
}
  
form.addEventListener('submit', handleFormSubmit);