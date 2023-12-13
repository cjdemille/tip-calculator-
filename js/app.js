const totalDisplay = document.querySelector('#total-per-person');
const tipDisplay = document.querySelector('#tip-per-person');
const billInput = document.querySelector('#bill');
const customTip = document.querySelector('#custom-tip');
const numPeopleInput = document.querySelector('#num-people');

const tenPercent = document.querySelector('#ten');
const fifteenPercent = document.querySelector('#fifteen');
const twentyPercent = document.querySelector('#twenty');
const twentyFivePercent = document.querySelector('#twenty-five');
const fiftyPercent = document.querySelector('#fifty');

const getTipValue = (ele) => {
    for (i = 0; i < ele.length; i++) {
        if (ele[i].type = "radio") {
            if (ele[i].checked) {
                console.log(ele[i].value)
                return Number(ele[i].value);
            }
        }
    }
}

const calcTip = (tip) => {
    const percentage = tip / 100;
    return Number(billInput.value) * percentage;
}

const runTip = () => {
    const ele = document.getElementsByName('tip');
    const tipVal = getTipValue(ele);
    const tipAmount = calcTip(tipVal);
    tipDisplay.innerHTML = tipAmount;
}
const calculateTipAndTotal = () => {
    const ele = document.getElementsByName('tip');
    const tipVal = getTipValue(ele);
    const tipAmount = calcTip(tipVal);
    const tipPerPerson = tipAmount / Number(numPeopleInput.value);
    const tipPerDisplay = tipPerPerson.toFixed(2);
    tipDisplay.innerHTML = tipPerDisplay
    const totalAmount = tipAmount + Number(billInput.value);
    console.log(totalAmount);
    const personalAmount = totalAmount / Number(numPeopleInput.value)
    const personalDisplay = personalAmount.toFixed(2);
    console.log(personalAmount);
    totalDisplay.innerHTML = personalDisplay;
}

const runUpdate = () => {
    if (Number(billInput.value) > 0 && Number(numPeopleInput.value) > 0) {
        calculateTipAndTotal();
    }
}


billInput.addEventListener('change', runUpdate);

numPeopleInput.addEventListener('change', runUpdate);

tenPercent.addEventListener('change', runUpdate);
fifteenPercent.addEventListener('change', runUpdate);
twentyPercent.addEventListener('change', runUpdate);
twentyFivePercent.addEventListener('change', runUpdate);
fiftyPercent.addEventListener('change', runUpdate);


// To Dos

// reset button
// custom tip input 
// make bill input populate like money 
// validate that bill has two decimal places
// validate that number of people is a whole number
// fine tune styles for mobile
// create desktop layout