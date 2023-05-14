// get the elements from the DOM
const billAmountInput = document.getElementById('billAmount');
const numberOfPeopleInput = document.getElementById('numberOfPeople');
const tipItems = document.querySelectorAll('.tip-item');
const customTipInput = document.querySelector('.custom-tip');
const tipAmountOutput = document.getElementById('tipAmount');
const totalAmountOutput = document.getElementById('totalAmount');
const resetBtn = document.querySelector('.btn');

// set the default tip percentage
let tipPercentage = 10;

// update the tip percentage when a tip item is clicked
function updateTipPercentage(percent) {
  tipPercentage = percent;
  updateOutput();
}

// update the tip percentage when the custom tip input value changes
function updateCustomTipPercentage(event) {
  tipPercentage = event.target.value;
  updateOutput();
}

// update the number of people when the input value changes
function updateNumberOfPeople(event) {
  updateOutput();
}

// calculate the tip and total amounts and update the output
function updateOutput() {
  const billAmount = parseFloat(billAmountInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);

  if (billAmount && numberOfPeople) {
    const tipAmount = (billAmount * tipPercentage) / 100 / numberOfPeople;
    const totalAmount = (billAmount / numberOfPeople) + tipAmount;
    tipAmountOutput.innerText = '$' + tipAmount.toFixed(2);
    totalAmountOutput.innerText = '$' + totalAmount.toFixed(2);
  }
}

// reset the calculator
function resetCalculator() {
  billAmountInput.value = '';
  numberOfPeopleInput.value = '';
  tipItems.forEach(item => item.classList.remove('active'));
  customTipInput.value = '';
  tipPercentage = 10;
  tipItems[1].classList.add('active');
  tipAmountOutput.innerText = '$0.00';
  totalAmountOutput.innerText = '$0.00';
}

// set the initial state of the calculator
resetCalculator();

// add event listeners to the elements
billAmountInput.addEventListener('input', updateOutput);
numberOfPeopleInput.addEventListener('input', updateOutput);
tipItems.forEach(item => item.addEventListener('click', () => {
  tipItems.forEach(item => item.classList.remove('active'));
  item.classList.add('active');
  tipPercentage = parseInt(item.innerText);
  customTipInput.value = '';
  updateOutput();
}));
resetBtn.addEventListener('click', resetCalculator);

// Div test

function switchVisible() {
    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
            document.getElementById('Div3').style.display = 'block';


        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
            document.getElementById('Div3').style.display = 'none';

        }
    }
}