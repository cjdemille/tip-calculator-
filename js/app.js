// FORM ELEMENTS
const bill = document.querySelector('#bill');
const numPeople = document.querySelector('#num-people');
const tipSelectors = document.querySelectorAll('.form__input--tip');
const defaultTip = document.querySelector('#form__input--tip-15');
const numPeopleError = document.querySelector('.form__input-label--error')
// DISPLAY ELEMENTS
const tipDisplay = document.querySelector('#display__amount--tip');
const totalDisplay = document.querySelector('#display__amount--total')
const resetBtn = document.querySelector('#reset-button');

// NUMBER FORMATTER
const formatter = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD' }
)
const reset = () => {
    bill.value = formatter.format(0); 
    defaultTip.checked = true;
    numPeople.value = 0; 
    tipDisplay.innerText = formatter.format(0);
    totalDisplay.innerText = formatter.format(0);
}
const billInputFromRight = (e) => {
    let input = e.target.value.replace(/\D/g, '') //REMOVE NON DIGITS
    input = input.padStart(3, '0');
    let numValue = parseInt(input, 10) / 100;
    let formattedValue = numValue.toFixed(2);
    e.target.value = formattedValue;
}
const calculateTotal = () => {
    const billNum = Number(bill.value); 
    const numPeopleNum = Number(numPeople.value);
    const totalPerPerson = billNum / numPeopleNum; 


    totalDisplay.innerText = formatter.format(totalPerPerson);
}
const getTipPercentage = () => {
    for (i = 0; i < tipSelectors.length; i++) {
        if (tipSelectors[i].type = "radio") {
            if (tipSelectors[i].checked) {
                percentage = Number(tipSelectors[i].value)/100;
                return percentage;
            }
        }
    }
}

const calcTip = () => {
    const tipPercentage = getTipPercentage(); 
    const tip = Number(bill.value) * tipPercentage;
    const tipPerPerson = tip / Number(numPeople.value); 
    tipDisplay.innerText = formatter.format(tipPerPerson);
}

const calcTotal = () => {
    const tipPercentage = getTipPercentage(); 
    const tipFactor = 1 + tipPercentage; 
    const total = Number(bill.value) * tipFactor; 
    const totalPerPerson = total / Number(numPeople.value);
    totalDisplay.innerText = formatter.format(totalPerPerson);
}

const calcTipAndTotal = () =>{
    if(Number(bill.value) > 0 && Number(numPeople.value) > 0 ){
        numPeopleError.classList.add('hidden');
        calcTip(); 
        calcTotal(); 
    }else if(Number(numPeople.value) <= 0){
        numPeopleError.classList.toggle('hidden');
    }
}

// EVENT LISTENERS
resetBtn.addEventListener('click', reset);
bill.addEventListener('input', billInputFromRight);
bill.addEventListener('input', calcTipAndTotal);
numPeople.addEventListener('input', calcTipAndTotal);
tipSelectors.forEach((tipInput) => tipInput.addEventListener('change', calcTipAndTotal))