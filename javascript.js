
const body = document.querySelector('#body');


const pRedText = document.createElement('p');
pRedText.setAttribute('style', 'color:red');
pRedText.textContent = 'Hey I’m red!';
body.appendChild(pRedText);


const h3Blue = document.createElement('h3');
h3Blue.setAttribute('style', 'color:blue');
h3Blue.textContent = 'I’m a blue h3!';
body.appendChild(h3Blue);


const divBlackPink = document.createElement('div');
divBlackPink.setAttribute(
    'style', 'border-style:solid; border-color:black; background-color: pink');

const h1BlackPink = document.createElement('h1');
h1BlackPink.textContent = 'I\'m in a div';
h3Blue.h1BlackPink = 'I’m in a div';


const newPara = document.createElement('p');
newPara.textContent = 'ME TOO!';

divBlackPink.appendChild(h1BlackPink);
divBlackPink.appendChild(newPara);
body.appendChild(divBlackPink);


const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World - Method 2');


const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('Hello World - Method 3');
});


/**
 * displays a text alert with a hardcoded string
 */
function alertFunction() {
  alert('YAY! YOU DID IT!');
}

const btnToClick1 = document.querySelector('#btnToClick1');
btnToClick1.onclick = alertFunction;


const btnToClick2 = document.querySelector('#btnToClick2');
btnToClick2.addEventListener('click', alertFunction);


const paramButton = document.querySelector('#paramButton');
paramButton.addEventListener('click', function(e) {
  console.log(e);
});

const paramButton2 = document.querySelector('#paramButton2');
paramButton2.addEventListener('click', function(e) {
  e.target.style.background = 'blue';
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
