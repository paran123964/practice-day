//First example: Sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

//Second example: Highlight link exercise

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

//Third example: Display user data

const dummyUserData = {
  firstName: "John Frances",
  middleName: "Gonzaga",
  lastName: "Alcano",
  age: 25,
  live: "Davao City",
  Work: "Technician",
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = '';

  for (const propertyName in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText =
      propertyName.toUpperCase() + ": " + dummyUserData[propertyName];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

//forth example : Statistics - Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumbered = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRollTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRollTargetNumber) {
        const rolledNumber = rollDice();
        //if (rolledNumber == enteredNumbered) {
        //    hasRollTargetNumber = true;
        //}
        //numberOfRolls = numberOfRolls + 1;
        numberOfRolls++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        hasRollTargetNumber = rolledNumber == enteredNumbered;

        const outputTotalRollsElement = document.getElementById('output-total-rolls');
        const outputTargetNumberElement = document.getElementById('output-target-number');

        outputTargetNumberElement.textContent = enteredNumbered;
        outputTargetNumberElement.textContent = numberOfRolls;
    }
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
