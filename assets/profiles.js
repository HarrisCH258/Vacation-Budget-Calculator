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
        const expenses = Math.floor(rent + utilities + car + living);
        console.log("Expenses:", expenses);
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
            expenses.textContent = totalExpenses; 
        } 
    }
});