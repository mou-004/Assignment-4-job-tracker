1..What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:getElementById is used for select one element by id, getElementsByClassName is used for select elements by class name, querySelector / querySelectorAll is used for matching element.
2..How do you create and insert a new element into the DOM?
ans: const li = document.createElement("li"); li.innerText = "New Item"; document.getElementById("list").appendChild(li);
3..What is Event Bubbling? And how does it work? 
ans:Event Bubbling means when click on someting the event happens on that element and then moves upward to parent elements. its work like when click button then then event run on that element.then its goes to the parent element and at the end full document.
4.What is Event Delegation in JavaScript? Why is it useful?
ans:it means add one event listner to a parent element insted of adding event listeners to many child elements.its useful because it handle events for children using event bubbling.
5.What is the difference between preventDefault() and stopPropagation() methods? 
ans: preventDefault() stop default browser action and stopPropagation() stops the event from bubbling up.
