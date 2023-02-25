//get values from the UI or user inputted numbers 
//starts or controller function
function getValues(){
    //get values from the page 
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //call generate numbers function
    let numbers = generateNumbers(startValue, endValue);

    //call displayNumbers
}

//generate numbers from start and ending values 
//logic function(s)
function generateNumbers(sValue, eValue){

    let numbers = [];

    //we want to get all numbers from start to end 
    //for loop ==> start/when it ends/going up or down
    for (let i = sValue; i <= eValue; i++) {        
        // loop will execute intil i = eValue
        numbers.push(i);
    }
    return numbers;
}

//display the output and mark even numbers BOLD
//display functions 
function displayNumbers(){

}