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

        if (totalSavings < 0) {
            const savingsMessage = document.getElementById('negative');
            savingsMessage.textContent = 'You are spending more than you are making. Please adjust your expenses on the homepage.';
            return;
        }
    }
    //activates the handleVacaFormSubmit function for some reason
    var form = document.querySelector('form');
    form.addEventListener('submit', handleVacaFormSubmit);
});

//Vacation form submission and local storage functionality
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

    if (isNaN(cost.value.trim()) || isNaN(amount.value.trim())) {
        error.textContent = 'Please enter a number';
        return;
    }

    error.textContent = '';

    const vacationInfoString = JSON.stringify({
        vaca: vaca.value.trim(),
        cost: cost.value.trim(),
        amount: amount.value.trim(),
    });

    localStorage.setItem('vacationInfo', vacationInfoString);

    const userData = localStorage.getItem('userInfo');
    let savings = 0;
    if (userData) {
        const user = JSON.parse(userData);
        savings = Number(user.income) - getExpenses(
            Number(user.rent) || 0,
            Number(user.utilities) || 0,
            Number(user.car) || 0,
            Number(user.living) || 0
        );
    }

    getVacationCostAndTime(Number(cost.value.trim()), Number(amount.value.trim()), savings); 

    function getVacationCostAndTime(cost, amount, savings) {
       const vacationInfo = JSON.parse(localStorage.getItem('vacationInfo'));
       const unfounded = document.querySelector('#unfounded');
       const impossible = document.querySelector('#impossible');
       const failure = document.querySelector('#failure');
       const monthly = document.querySelector('#monthly-cost');

       unfounded.textContent = '';
       impossible.textContent = '';
       failure.textContent = '';
       monthly.textContent = '';

    if (!vacationInfo) {
        unfounded.textContent = 'No vacation info found.';
        console.log('No vacation info found.');
        return;
    }

    if (amount <= 0) {
        impossible.textContent = 'Amount must be greater than zero.';
        console.log('Amount must be greater than zero.');
        return;
    }

    const division = cost / amount;
    console.log('Division:', division);

    if (division > savings) {
        failure.textContent = 'You cannot afford this vacation with your current savings or timeline.';
        console.log('You cannot afford this vacation with your current savings or timeline.');
        return;
    } else {
        monthly.textContent = `You can afford this vacation to ${vaca.value}! You only need to put aside $${division} for ${amount} months to afford this vacation!`;
        console.log(`You can afford this vacation to ${vaca.value}! You only need to put aside $${division} for ${amount} months to afford this vacation!`);
        return;
    }
}
}
