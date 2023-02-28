//get values from the UI or user inputted numbers 
//starts or controller function
function getValues(){
    //get values from the page 
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //we need to validate our integers 
    //coverting string to numbers(int)
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generate numbers function
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers ==> PUTS ITEMS ON SCREEN
        displayNumbers(numbers);

    } else {
        alert("You must enter integers");
    }

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
function displayNumbers(numbers){

    let templateRows = "";
    //LOOP OVER NUMBERS AND DISPLAY THEM TO TABLE
    for (let i = 0; i < numbers.length; i++) {

        let className = "even";

        let number = numbers[i];

        if (number % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    // looped over and writing them to the page 
    document.getElementById("results").innerHTML = templateRows;
}

