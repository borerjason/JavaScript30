1. 
// Query selector from data attribute
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

// add class to an items class
key.classList.add('playing');

// add eventlisteners to the widow if want to apply to everything
window.addEventListener('keydown', playSound);

// use transitionend to listen for the end of a transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// use transform-orgin to control where the transform pivot takes place
transform - origin: 100%;

// get current time and seconds
const date = new Date();
const seconds = date.getSeconds();

// css variables: declare on some element or root
:root { // this is document
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
// then to use them

img {
  padding: var(--spacing);
}

// How to use custom attributes
  // Simply need to add 'data-<something>' in your html and you have custom attribute.
  // to get the attributes and values you do <element>.dataset which gives you an object that will contain all the data objects for that specific element
  const suffix = this.dataset.sizing; // gets the sizing value for the data-sizing attribute 

// return the root element of the document <html>
Document.documentElement

// set a new value for a property on a css style object 
//style.setProperty(<propertyName>, <value>);
// OR
ele.style.propertyName = value;

// To transorm something on and of the screen you can toggle class names, when they have a class you do one thing, when they don't a base line. 
.panel > *:first-child {
} selects all the first children of nodes with the class panel.
  
// to move something up
transform: translateY(x%);

// change the flex number when certain class is there to update how much space it takes up
// Can have multple transition definitions for when different properties change

/*
11. Always think about what properties, methods, and events exist for different elements. Video has tons of useful information righ on it that you can utilize

Input type = range for slide bar

Use flags (variable set to true or false) to only fire event if mouse is up or down

Access data attributes in the data set property

Use flex-basis to control width of bar

*/
