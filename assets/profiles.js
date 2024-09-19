//Main feature starts at the webpage loading in
document.addEventListener('DOMContentLoaded', () => {
    const userData = localStorage.getItem('userInfo');
    if (userData) {
        const user = JSON.parse(userData);
        const income = document.getElementById('income');
        const name = document.getElementById('name');
        
        console.log("User income:", user.income);
        console.log("User name:", user.name);
        
        if (user.income !== undefined) {
            income.textContent = user.income.toString();
        } else {
            console.log("Income is undefined.");
        }
        if (user.name !== undefined) {
            name.textContent = user.name;
        } else {
            console.log("Name is undefined.");
        }
    }

    function getExpenses(rent, utilities, car, living) {
        const expenses = rent + utilities + car + living;
        console.log("Expenses:", expenses);
        return expenses;
    }
    
    function getSavings(income, expenses) {
        const savings = income - expenses;
        console.log("Savings:", savings);
        return savings;
    }
    
    if (userData) {
        const user = JSON.parse(userData);
        
        const totalExpenses = getExpenses(
            Number(user.rent) || 0,
            Number(user.utilities) || 0,
            Number(user.car) || 0,
            Number(user.living) || 0
        );
    
        const expensesElement = document.getElementById('expenses'); 
        if (expensesElement) {
            expensesElement.textContent = totalExpenses.toFixed(2).toString(); 
        } 
    
        const totalSavings = getSavings(
            Number(user.income) || 0,
            totalExpenses 
        );
    
        const savingsElement = document.getElementById('savings'); 
        if (savingsElement) {
            savingsElement.textContent = totalSavings.toFixed(2).toString(); 
        }
    }
    //activates the handleVacaFormSubmit function for some reason
    var form = document.querySelector('form');
    form.addEventListener('submit', handleVacaFormSubmit);
});

// Vacation form submission and local storage functionality

function handleVacaFormSubmit(event) {
    event.preventDefault();
    console.log('vaca form submitted');
    const cost = document.querySelector('#cost');
    const vaca = document.querySelector('#vacation');
    const error = document.querySelector('#error');
    const amount = document.querySelector('#amount');

    if (!cost.value.trim() || !vaca.value.trim() || !amount.value.trim()) {
        error.textContent = 'Please complete the form';
        return;
    }

    error.textContent = '';

    const vacationInfoString = JSON.stringify({
        vaca: vaca.value.trim(),
        cost: cost.value.trim(),
        amount: amount.value.trim(),
    });

    localStorage.setItem('vacationInfo', vacationInfoString);

    function getVacationCost(cost) {
        const time = document.querySelector('#time');
        const monthly = document.querySelector('#monthly-cost');
        console.log("Vacation cost:", cost);

    }
        
    
}