const totalDisplay = document.querySelector('#total-per-person');
const tipDisplay = document.querySelector('#tip-per-person');
const billInput = document.querySelector('#bill');
const customTip = document.querySelector('#custom-tip');
const numPeopleInput = document.querySelector('#num-people');

const tenPercent = document.querySelector('#ten');

const billAmount = billInput.value;
const numPeople = numPeopleInput.value;

const calcTotal = (total , numPeople) => {
    totalDisplay.innerHTML = Number(total) / Number(numPeople);
}


// totalDisplay.innerHTML = "32.79";
// tipDisplay.innerHTML = '4.27';

billInput.addEventListener('change', () =>{
    if(Number(billInput.value) > 0 && Number(numPeopleInput.value) > 0 ){
        calcTotal(billInput.value, numPeopleInput.value);
    }
})

numPeopleInput.addEventListener('change', () =>{
    if(Number(billInput.value) > 0 && Number(numPeopleInput.value) > 0 ){
        calcTotal(billInput.value, numPeopleInput.value);
    }
})

const getTipValue = (ele) =>{
    for(i = 0; i < ele.length; i++){
        if (ele[i].type="radio"){
          if(ele[i].checked){
            return Number(ele[i].value);
          }
        }
      }
}

const calcTip = (tip) => {
    const percentage = tip/100; 
    return Number(billInput.value) * percentage;
}

const runTip = () => {
    const ele = document.getElementsByTagName('input');
    const tipVal = getTipValue(ele);
    const tipAmount = calcTip(tipVal);
    tipDisplay.innerHTML = tipAmount;
}


tenPercent.addEventListener('change', runTip);

