//Main feature starts at the webpage loading in
document.addEventListener('DOMContentLoaded', () => {
    const userData = localStorage.getItem('userInfo');
    if (userData) {
        const user = JSON.parse(userData);
        const income = document.getElementById('income');
        
        console.log("User income:", user.income);
        
        if (user.income !== undefined) {
            income.textContent = user.income.toString();
        } else {
            console.log("Income is undefined.");
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
});

function handleVacaFormSubmit(event) {
    event.preventDefault();
    console.log('vaca form submitted');
    const cost = document.querySelector('cost');
   
    if (!cost.value.trim()) {
        error.textContent = 'Please complete the form';
        return;
    }

    error.textContent = '';

    
}
