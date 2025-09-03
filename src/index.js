import './style.css';

export function greetings() {
    const element = document.createElement('p');
    element.innerText = 'Hello world!';
    element.className = 'hello';
    document.body.appendChild(element);
}

greetings();