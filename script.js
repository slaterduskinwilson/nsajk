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



// now, the MORTAL KOMBAT blood code:
const kombatCodeSequence = [
   'a',
    'b',
    'a',
    'c',
    'a',
    'b',
    'b'
// this is the blood code from MK1
]

// Variable to keep track of the current position in the code sequence
let kombatCodePosition = 0

// Event listener for keydown events
document.addEventListener('keydown', function (event) {
    // Get the key code of the pressed key
    const key = event.key
    // console.log('fired once!')

    // Check if the pressed key matches the current position in the code sequence
    if (key === kombatCodeSequence[kombatCodePosition]) {
        // Move to the next position in the code sequence
        kombatCodePosition++

        // If the entire sequence has been entered correctly
        if (kombatCodePosition === kombatCodeSequence.length) {
            // Execute the kombat Code action (e.g., trigger a hidden feature)
            alert('kombat Code activated!')
            entireThing.classList.toggle('kombat-mode')

            // Reset the code position to start over
            kombatCodePosition = 0
        }
    } else {
        // If the pressed key does not match the current position, reset the position
        kombatCodePosition = 0
    }
})



// ok now let's handle the CLOSE button

closeButton = document.getElementById('close-this-website')
// I just want to target the very first one of these

closeButton.addEventListener("click", handleCloseThisWebsite)

function handleCloseThisWebsite() {
    // alert('you fired handleCloseThisWebsite!')
    document.body.innerHTML = "<div style='background: black; color: yellow; font-size: 5rem'><h1>Thank you for using NSAJK.com.</h1> <p>You will now be redirected to https://MatthewWilson.website</p></div>"

    setTimeout(function(){

        window.location.replace("https://matthewwilson.website")
    }, 3000)

}

// ok now...

// Function to check the entered password
function checkPassword() {
    // Get the input element by its ID
    const passwordInput = document.getElementById("text_find");

    // Get the entered password value
    const enteredPassword = passwordInput.value;

    // Replace "yourSecretPassword" with the actual password you want to check against
    const correctPassword = "dick";

    // Check if the entered password matches the correct password
    if (enteredPassword === correctPassword) {
        alert("Password is correct. Access granted!");
        // Here, you can perform actions for successful password entry
    } else {
        alert("Incorrect password. Try again.");
        // Here, you can handle the case of an incorrect password
    }

    // Clear the input field
    passwordInput.value = "";
}

// Attach the click event listener to the "Enter" button
const enterButton = document.getElementById("enterButton");
enterButton.addEventListener("click", checkPassword);



// now, here's what happens when you click the resize button at the top of the site:


  // Function to play the audio
  function playAudio() {
    const audio = document.getElementById("myAudio");
    audio.play();
    alert('fired the playAudio function')
  }

  // Attach the click event listener to the "Resize" button
  const resizeButton = document.getElementById("resize-button");
  resizeButton.addEventListener("click", playAudio);

