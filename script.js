const shutDown = document.getElementById('shut-down')
const hiddenMenu = document.getElementById('hidden-menu')
const closeHiddenMenu = document.querySelectorAll('.close-hidden-menu')

const entireThing = document.getElementById('entire-thing')

function handleClick(e) {
    hiddenMenu.classList.toggle('hide-me')

    console.log('fired handleClick from:', e.target, e.target.value)
}

// Attach the click event listener to the element
// shutDown.addEventListener("click", handleClick);
closeHiddenMenu.forEach(thing => thing.addEventListener('click', handleClick))

// Define the Konami Code sequence as an array of key codes
const konamiCodeSequence = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter' // Add the "Enter" key to the sequence
]

// Variable to keep track of the current position in the code sequence
let konamiCodePosition = 0

// Event listener for keydown events
document.addEventListener('keydown', function (event) {
    // Get the key code of the pressed key
    const key = event.key
    // console.log('fired once!')

    // Check if the pressed key matches the current position in the code sequence
    if (key === konamiCodeSequence[konamiCodePosition]) {
        // Move to the next position in the code sequence
        konamiCodePosition++

        // If the entire sequence has been entered correctly
        if (konamiCodePosition === konamiCodeSequence.length) {
            // Execute the Konami Code action (e.g., trigger a hidden feature)
            alert('Konami Code activated!')
            entireThing.classList.toggle('dark-mode')

            // Reset the code position to start over
            konamiCodePosition = 0
        }
    } else {
        // If the pressed key does not match the current position, reset the position
        konamiCodePosition = 0
    }
})
