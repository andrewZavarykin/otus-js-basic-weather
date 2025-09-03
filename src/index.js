function greetings() {
    const element = document.createElement('p');
    element.innerText = 'Hello world!';
    return element;
}

document.body.appendChild(greetings());