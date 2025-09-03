import './style.css';

function greetings() {
    const element = document.createElement('p');
    element.innerText = 'Hello world!';
    element.className = 'hello';
    return element;
}

document.body.appendChild(greetings());