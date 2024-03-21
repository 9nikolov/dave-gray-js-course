// Event Listeners
// 1. Changing CSS via querySelector
// 2. Adding even Listener + Removing Event Listener
// 3. Dangers of Using Anonymous Arrow Functions or Anonymous Functions for Event Listeners
// 3.1. event object/function
// 4. Event Propagation:
// - Event Bubbling (Outside-In vs Inside-Out)
// - Stopping Propagation
// - Event Target 
// classList, add, remove, toggle
// event.preventDefault()

// useCapture = true --- (propagation of elements from outside to inside)
// useCapture = false --- (propagation of elements from inside to outside)
// event.stopPropagation() --- stops propagation, makes sure only the item itself is affected
// event.target() --- always refers to the event that was targeted, now add to this the effect of bubbling
// and this could lead to some weird and unexpected results, where we click a text for example
// and its background changes, not because it had this specified in its own event listener,
// but because its parent element had this type of event target, which thanks to bubbling will
// actually apply to the child, thus to fix that we need to use more specific selectors, based
// on element types or classes or even ids or just use stop propagation

const view1 = document.querySelector('#view1');
// 1. changing #view1 css
view1.style.display = "none";

const view2 = document.querySelector('#view2');
// 1. changing #view2 css
view2.style.display = "flex";
const div = document.querySelector('div');
div.style.backgroundColor = "red";
const h2 = document.querySelector('h2');



// Syntax: addEventListener(event, function, useCapture);
const doSomething = () => {
    alert('Doing something!');
}

// 2. adding Event Listener on click of h2
h2.addEventListener("click", doSomething, false);
// 3rd parameter value is false by default, so you can write it like this too
// h2.addEventListener("click", doSomething);

// 2. removing Event Listener on click of h2
h2.removeEventListener("click", doSomething, false);

// 3. Dangers of Using Anonymous Arrow Functions or Anonymous Functions for Event Listeners
// Since we're using an anonymous arrow function as the event listener for the click event on 'h2',
// we won't be able to remove this specific event listener later in the code because there's no reference to it.
// To ensure proper cleanup and removal of event listeners, it's recommended to use named functions instead of anonymous ones.
h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
})