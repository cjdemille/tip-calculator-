

const totalDisplay = document.querySelector('#total-per-person');
const tipDisplay = document.querySelector('#tip-per-person');
const billInput = document.querySelector('#bill');
const customTip = document.querySelector('#custom-tip');
customTip.setAttribute("placeholder", "hi!")
const numPeopleInput = document.querySelector('#num-people');
const numPeopleErrorMsg = document.querySelector('.num-people-error-msg')
const billErrorMsg = document.querySelector('.bill-error-msg');
const tipSelectors = document.body.querySelectorAll('.tip-input')


const resetBtn = document.querySelector('#reset');


const formatter = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD' }
)


const reset = () => {
    totalDisplay.innerHTML = formatter.format(0);
    tipDisplay.innerHTML = formatter.format(0);
    billInput.value = formatter.format(0);
    numPeopleInput.value = 0;
    twentyPercent.checked = true;
}
const billError = () => {
    var t = billInput.value;

}

const reverseString = (str) => {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;

}
const billErrorDisplay = () => {
    var t = billInput.value;
    const reversed = reverseString(t);

    if (reversed.indexOf(".") > 2) {
        // billInput.value = t.slice(0, t.indexOf(".") + 3);
        billErrorMsg.classList.remove('hidden');
    } else {
        billErrorMsg.classList.add('hidden');
    }
}
const validateBillInput = () => {
    var t = billInput.value;
    billInput.value = t.indexOf(".") >= 2 ? t.slice(0, t.indexOf(".") + 3) : t
    billErrorMsg.classList.add('hidden');
}


const validateNumPeopleIsInt = () => {
    if (!Number.isInteger(Number(numPeopleInput.value))) {
        numPeopleInput.classList.add('people-error');
        numPeopleErrorMsg.classList.remove('hidden')
    } else {
        numPeopleInput.classList.remove('people-error');
        numPeopleErrorMsg.classList.add('hidden')
    }
}

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

// You need to break this into multiple functions
const calculateTipAndTotal = () => {

    const ele = document.getElementsByName('tip');
    const tipVal = getTipValue(ele);
    const tipAmount = calcTip(tipVal);
    const tipPerPerson = tipAmount / Number(numPeopleInput.value);
    const tipPerDisplay = formatter.format(tipPerPerson);
    tipDisplay.innerHTML = tipPerDisplay
    const totalAmount = tipAmount + Number(billInput.value);
    console.log(totalAmount);
    const personalAmount = totalAmount / Number(numPeopleInput.value)
    const personalDisplay = formatter.format(personalAmount);
    console.log(personalAmount);
    totalDisplay.innerHTML = personalDisplay;


}

const runUpdate = () => {
    if (Number(billInput.value) > 0 && Number(numPeopleInput.value) > 0) {
        validateBillInput();
        calculateTipAndTotal();
    }
}

billInput.addEventListener('input', () => {
    billErrorDisplay();
    runUpdate();
}
);
billInput.addEventListener('change', () => {
    validateBillInput();
    runUpdate();
}
);

numPeopleInput.addEventListener('input', () => {
    validateNumPeopleIsInt();
    runUpdate();
});
tipSelectors.forEach((tipInput) => tipInput.addEventListener('change', runUpdate))

customTip.addEventListener('input', () => {
    console.log(Number(customTip.value));
})
resetBtn.addEventListener('click', reset);

// To Dos

// custom tip input 
// make bill input populate like money 
// refactor JS
// fine tune styles for mobile
// create desktop layout;