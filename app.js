const acButton=document.querySelector(".ac");
const pmButton=document.querySelector(".pm");
const percentButton=document.querySelector(".percent");

const previousElement=document.querySelector(".previous-display");
const currentElement=document.querySelector(".current-display");

const additionButton=document.querySelector(".addition");
const subtractionButton=document.querySelector(".subtraction");
const multiplicationButton=document.querySelector(".multiplication");
const divisionButton=document.querySelector(".division");
const equalsButton=document.querySelector(".equals");

const decimalButton=document.querySelector(".decimal");

const number0=document.querySelector(".number-0");
const number1=document.querySelector(".number-1");
const number2=document.querySelector(".number-2");
const number3=document.querySelector(".number-3");
const number4=document.querySelector(".number-4");
const number5=document.querySelector(".number-5");
const number6=document.querySelector(".number-6");
const number7=document.querySelector(".number-7");
const number8=document.querySelector(".number-8");
const number9=document.querySelector(".number-9");

let previousOperand="";
let currentOperand="";
let operation=undefined;

const numbersArray=[number0,number1,number2,number3,number4,number5,
    number6,number7,number8,number9]

    //functions
    
    function DisplayNumbers(){
        if(operation){
        previousElement.innerHTML=`${previousOperand} ${operation}`
    }else {
        previousElement.innerHTML=previousOperand;
    }

        currentElement.innerHTML=currentOperand;
    }
    function appendNumber(number){
        currentOperand=currentOperand.toString()+ number.toString();
        DisplayNumbers();
    }

    function ChooseOperation(selectedOperation){
        operation=selectedOperation;
        previousOperand=currentOperand;
        currentOperand="";
        DisplayNumbers();
    }

    function Compute(){
       let computation;
       const previous=parseFloat(previousOperand);
       const current=parseFloat(currentOperand);
        switch (operation) {
            case "+":
                computation= previous + current;
                break;

            case "-":
                    computation= previous - current;
            break;

            case "*":
                computation= previous * current;
                break;
        

                case "/":
                    computation= previous / current;
                    break;    
            default:
                break;
        }
    currentOperand=computation;
    previousOperand="";
    operation=undefined;
    DisplayNumbers();
    }
 function Allclear(){
    previousOperand="";
    currentOperand="";
    operation=undefined;
    DisplayNumbers();
 }


//events

additionButton.addEventListener("click", ()=>{
ChooseOperation("+");
})
subtractionButton.addEventListener("click", ()=>{
    ChooseOperation("-");
})
multiplicationButton.addEventListener("click", ()=>{
    ChooseOperation("*");
})
divisionButton.addEventListener("click", ()=>{
    ChooseOperation("/");
})
equalsButton.addEventListener("click", ()=>{
    Compute();
})

acButton.addEventListener("click",()=>{
Allclear();
})
pmButton.addEventListener("click",()=>{
    
})
percentButton.addEventListener("click",()=>{
    
})



for (let i=0; i<numbersArray.length; i++){
    const number=numbersArray[i];
    number.addEventListener("click",()=>{
        appendNumber(i);
        
    })


}