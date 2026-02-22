<h2>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h2>

- The getElementById() method returns one element that matches the given ID.
- The getElementsByClassName() method returns a live HTMLCollection of all elements that match the specified class name.
- The querySelector() method returns the first element that matches the specified CSS selector.
- The querySelectorAll() method returns a static NodeList of all elements that match the specified CSS selector.

<h2>2. How do you create and insert a new element into the DOM?</h2>

- First, create an element with document.createElement(), then add content using textContent, and finally insert it into the DOM using appendChild() or append().

<h2>3. What is Event Bubbling? And how does it work?</h2>

- Event bubbling is a DOM event propagation mechanism where an event starts at the target element and then propagates upward through its ancestor elements in the DOM tree.

<h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>

- Event Delegation is a design pattern in JavaScript where you attach a single event listener to a parent element to handle events for its child elements, instead of adding separate listeners to each child.

<h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>

- preventDefault() Stops the default browser behavior of an element.
- stopPropagation() Prevents the event from bubbling up to parent elements, stopping any further propagation of the event in the capturing and bubbling phases.
