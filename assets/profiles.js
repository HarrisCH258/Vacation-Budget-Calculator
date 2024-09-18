function calculateNetIncome() {
    let totalExpenses = mathfloor(rent.value + utilities.value + car.value + living.value);
    
    let netIncome = mathfloor(income.value - totalExpenses);
    
    return netIncome;
}
console.log(netIncome);