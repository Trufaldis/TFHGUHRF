let element = document.querySelector('.block');
let text = document.querySelector('.text');
let click= document.querySelector('.click');

element.addEventListener('click', function() {
element.style.background = "red";
});
element.innerHTMl = '<h1> Большой квадрат </h1>';

function myFunc() {
    const firstUI = document.getElementById("first"), //находим элемент по id
    newElem = document.createElement("li"),
text = document.createTextNode("Я текстовый узел");
newElem.appendChild(text);
firstUI.appendChild(newElem);
}
text.setAttribute("style", "color:purple");

click.addEventListener('click', ()=> {
this.style.backgroundColor = "blue";
console.log(this);
});