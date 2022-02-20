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
let temporaryOperand="";

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
        if(number==="." && currentOperand.includes(".")) return;
        if(number===0 && currentOperand==="0") return;
        if(currentOperand.length>7) return;

        
        currentOperand=currentOperand.toString()+ number.toString();
        DisplayNumbers();
    }

    function ChooseOperation(selectedOperation){
        if(temporaryOperand){
            previousOperand=temporaryOperand.toString();
            currentOperand="";
            temporaryOperand="";
            operation=selectedOperation;
            DisplayNumbers;
            return;
        }
        operation=selectedOperation;
        previousOperand=currentOperand;
        acButton.innerHTML="AC";
        currentOperand="";
        DisplayNumbers();
    }

    function Compute(){
       let computation;
       const previous=parseFloat(previousOperand);
       const current=parseFloat(currentOperand);
       if(!operation) return;
       if(isNaN(previous)) || isNaN(current) return;
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

        if (isNaN(computation)) return;

    currentOperand=computation;
    previousOperand="";
    operation=undefined;
    acButton.innerHTML="C";
    DisplayNumbers();
    temporaryOperand=currentOperand;
    currentOperand="";
    }
 function Allclear(){
     if(!previousOperand){
         currentOperand=currentOperand.slice(0,currentOperand.length -1)
     }else{
        previousOperand="";
        currentOperand="";
        operation=undefined;
        acButton.innerHTML="C";
     }
   
    DisplayNumbers();
 }

 function PlusMinus(){
     currentOperand=currentOperand*-1;
     DisplayNumbers();
 }

 function Percent(){
     currentOperand=currentOperand/100;
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
    PlusMinus();
})
percentButton.addEventListener("click",()=>{
    Percent();
})



for (let i=0; i<numbersArray.length; i++){
    const number=numbersArray[i];
    number.addEventListener("click",()=>{
        appendNumber(i);
        temporaryOperand="";
    })

}

decimalButton.addEventListener("click",()=>{
    appendNumber(".");
})