function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}
  
function storeLocalStorage(key, newData) {
    const existingData = localStorage.getItem(key);
    let dataArray = existingData ? JSON.parse(existingData) : [];
  
    dataArray.push(newData);
  
    localStorage.setItem(key, JSON.stringify(dataArray));
}

function displayNoProfileMessage(containerSelector) {
    var container = document.querySelector(containerSelector);
    
    container.innerHTML = '';

    var messageElement = document.createElement('p');
    messageElement.textContent = "No profiles found. Please create a profile on the home page.";

    container.appendChild(messageElement);
}

function calculateNetIncome() {
    let totalExpenses = mathfloor(rent.value + utilities.value + car.value + living.value);
    
    let netIncome = mathfloor(income.value - totalExpenses);
    
    return netIncome;
}
console.log(netIncome);