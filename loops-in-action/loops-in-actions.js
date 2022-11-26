//First example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');


function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number') ;
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

//Second example: Highlight link exercise

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

//Third example: Display user data

const dummyUserData = {
    firstName: 'Paran',
    lastName: 'Alcano',
    age: 25,
    live: 'Davao City',
    sex: 'Male',
    status: 'Single',
}

const displayUserDataButtonElement = document.querySelector('')