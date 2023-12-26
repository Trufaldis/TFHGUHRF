let element = document.querySelector('.block');
let parent = document.querySelector('.spisok');
let p = document.createElement('div');
let paragraph = document.querySelector('.text');
let button = document.querySelector('.button');


button.addEventListener('click', function(){
    this.style.backgroundColor = "blue";
    console.log(this);
});
element.addEventListener('mousemove',function() {
    element.style.backgroundColor = 'blue';
    
});

paragraph.setAttribute("style", "color: red");


function myFunc() {
    const firstUl = document.getElementById( "first" ), // находим элемент по id
      newElem = document.createElement( "li" ), // создаем новый пустой элемент <li>
     text = document.createTextNode( "I\'m just a text" ); // создаем узел с текстовым содержимым
    newElem.appendChild( text ); // добавляем узел с текстовым содержимым созданному элементу <li>
    firstUl.append( newElem ); // добавляем созданный элемент <li> элементу <ul>
  }

