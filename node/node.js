let content = document.getElementById('content');
let h3 = document.createElement('h3');
h3.textContent = 'Roosa Rautio';

/* content.appendChild(h3);
content.appendChild(hr); */

content.append(h3);

let ul = document.querySelector('ul');
let li = document.querySelector('li');
li.textContent = 'sunnuntai';
ul.appendChild(li);

let turha = document.querySelector('ul li:first-child');

turha.remove();

let items = document.querySelectorAll('ul:first-child li')

for (item of items) {
    let text = item.textContent;
    item.textContent = '';

    let b = document.createElement('b');
    b.textContent = text;
    item.appendChild(b);


    let h = document.querySelector('h1');
    h.ClassList.add('colorful');
    h.ClassList.add('testi');
    h.ClassList.remove('colorful');
    }

function changeColor() {
    let elems = document.querySelectorAll('ul:first-child li');

    for (elem of elems) {
        elem.ClassList.toggle('colored');
    }
}