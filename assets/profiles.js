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

    getVacationCostAndTime(); 

   // function getVacationCostAndTime(cost, amount) {
    //    const vacationInfo = JSON.parse(localStorage.getItem('vacationInfo'));
   //     const impossible = document.querySelector('#impossible');
    //    const monthly = document.querySelector('#monthly-cost');
    //    const division = vacationInfo.cost / vacationInfo.amount;
    //    const success = savings - division;
//
     //   if (division > savings) {
    //        impossible.textContent = 'You cannot afford this vacation';
     //       return;
      //  } else if (division < savings) {
      //      monthly.textContent = `You can afford this vacation! You only need to put aside ${success} a month to afford this vacation!`;
    //        return;
     //   }
   // }
   function getVacationCostAndTime(cost, amount) {
    const vacationInfo = JSON.parse(localStorage.getItem('vacationInfo'));
    if (!vacationInfo) {
        impossible.textContent = 'No vacation info found.';
        return;
    }

    if (amount <= 0) {
        impossible.textContent = 'Amount must be greater than zero.';
        return;
    }

    const division = cost / amount;
    const success = savings - division;

    if (division > savings) {
        impossible.textContent = 'You cannot afford this vacation';
    } else {
        monthly.textContent = `You can afford this vacation! You only need to put aside ${success} a month to afford this vacation!`;
    }
}
        
    
}