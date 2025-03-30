// Get element with class
const icon = document.querySelector('.bg-icon');
const popUp = document.querySelector('.pop-up');
const triangle = document.querySelector('.triangle');

// The pointer is moved onto an element
icon.addEventListener('mouseenter', () => {
    popUp.classList.remove("sr-only");
    triangle.classList.remove("sr-only");
})

// The pointer is moved out of an element
icon.addEventListener('mouseleave', () => {
    popUp.classList.add("sr-only");
    triangle.classList.add("sr-only");
})
