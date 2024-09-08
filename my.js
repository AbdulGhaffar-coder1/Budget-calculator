//Total Buget
function calculate (){
const totalbudget =  Number(document.getElementById("total").value);
//groceries expenses
const groceries = Number(document.getElementById("groceries").value);
//Rent
const rent = Number(document.getElementById("rent").value);
//Health
const health = Number(document.getElementById("health").value);


 const expense =  groceries + rent + health;
 const remainingBudget=  totalbudget - expense;
 
    document.getElementById("remainingBudget").innerHTML = remainingBudget
 

}
document.getElementById("btn").addEventListener("click", calculate);
