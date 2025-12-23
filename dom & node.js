// The DOM (Document Object Model) is like a tree structure for your web page. 
// Every element (and bit of text) is a node on that tree. 
// Here’s how it looks in practice:

<body>
    <div>
        <p>Hello World</p>
        <button>Click Me</button>
    </div>
</body>

// <body> is the parent node.

// <div> is a child of <body>.

// <p> and <button> are children of <div>.

// “Hello World” is a text node inside <p>.

// Types of DOM nodes:

// Element nodes: HTML tags like <div>, <p>, etc.

// Text nodes: The text inside those tags.

// Attribute nodes: Stuff like class, id, src, etc.


// We can navigate this tree in JS:
const body = document.body;
console.log(body.children); // HTMLCollection of body’s direct children
console.log(body.firstChild); // could be a text node or an element
console.log(body.firstElementChild); // always an element

// 2. Basic and Advanced Selectors

document.getElementById('myId')

document.getElementsByClassName('myClass')

document.getElementsByTagName('div')

// Advanced selectors (with querySelector):

document.querySelector('.myClass') // First element with class

document.querySelectorAll('div > p.special') // All <p class="special"> directly under a <div>

// CSS selectors work here: #id, .class, tag, [attr=value], div > p, etc.

const allSpecialPs = document.querySelectorAll('div > p.special');

// 3. Changing Styles, Attributes, and Content
// Changing styles:
const box = document.getElementById('box');
box.style.backgroundColor = 'orange';
box.style.fontSize = '24px';

// Changing attributes:
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');

// changing content:
const para = document.querySelector('p');
para.textContent = 'New text!'; // Replaces all text inside <p>
para.innerHTML = '<strong>Bold text!</strong>'; // Allows HTML inside <p>


// 4. Building and Modifying DOM Elements Dynamically
const newDiv = document.createElement('div');
newDiv.className = 'alert';
newDiv.textContent = 'This is a dynamic div!';

// Add it somewhere:
document.body.appendChild(newDiv);

// Add more complex structure:
const ul = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
}
newDiv.appendChild(ul);


// You can also remove or replace elements:
newDiv.remove(); // removes the div from DOM
// or
document.body.replaceChild(anotherDiv, newDiv);
