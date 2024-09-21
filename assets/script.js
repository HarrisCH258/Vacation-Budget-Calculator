var form = document.querySelector('form');
var userName = document.querySelector('#userName'); 
var income = document.querySelector('#income');
var rent = document.querySelector('#rent');
var utilities = document.querySelector('#utilities');
var car = document.querySelector('#car');
var living = document.querySelector('#living');
var error = document.querySelector('#error');

const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    error.textContent = '';

    if (!userName.value.trim() || !income.value.trim() || !rent.value.trim() || !utilities.value.trim() || !car.value.trim() || !living.value.trim()) {
        error.textContent = 'Please complete the form';
        return;
    }
    
    if (isNaN(income.value.trim()) || isNaN(rent.value.trim()) || isNaN(utilities.value.trim()) || isNaN(car.value.trim()) || isNaN(living.value.trim())) {
        error.textContent = 'Please enter a number';
        return;
    }

    confirmationModal.show();
});

document.getElementById('confirmButton').addEventListener('click', function() {
    console.log('Information confirmed!');

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

    confirmationModal.hide();
});