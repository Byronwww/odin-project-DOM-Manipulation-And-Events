
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
