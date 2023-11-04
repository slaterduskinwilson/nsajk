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

            showKonamiGif()

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

            //fire the spider audio function:
            playSpiderman()

            //and show the kombat gif
            showKombatGif()
        }
    } else {
        // If the pressed key does not match the current position, reset the position
        kombatCodePosition = 0
    }
})

// ok now let's handle the CLOSE button

closeButton = document.getElementById('close-this-website')
// I just want to target the very first one of these

closeButton.addEventListener('click', handleCloseThisWebsite)

function handleCloseThisWebsite() {
    // alert('you fired handleCloseThisWebsite!')
    document.body.innerHTML =
        "<div style='background: black; color: yellow; font-size: 5rem'><h1>Thank you for using NSAJK.com.</h1> <p>You will now be redirected to https://MatthewWilson.website</p></div>"

    setTimeout(function () {
        window.location.replace('https://matthewwilson.website')
    }, 3000)
}

// ok now...

// Function to check the entered password
function checkPassword() {
    // Get the input element by its ID
    const passwordInput = document.getElementById('text_find')

    // Get the entered password value
    const enteredPassword = passwordInput.value

    // Replace "yourSecretPassword" with the actual password you want to check against
    const correctPassword = 'dick'

    // Check if the entered password matches the correct password
    if (enteredPassword === correctPassword) {
        alert('Password is correct. Access granted!')
        // Here, you can perform actions for successful password entry
    } else {
        alert('Incorrect password. Try again.')
        // Here, you can handle the case of an incorrect password
    }

    // Clear the input field
    passwordInput.value = ''
}

// Attach the click event listener to the "Enter" button
const enterButton = document.getElementById('enterButton')
enterButton.addEventListener('click', checkPassword)

// now, here's what happens when you click the resize button at the top of the site:

// Function to play the Spiders Furi song
function playSpiders() {
    const audio = document.getElementById('spiders-furi')
    audio.play()
    alert('please enjoy Japanese rock band The Spiders.')
}

// Attach the click event listener to the "Resize" button
const resizeButton = document.getElementById('resize-button')
resizeButton.addEventListener('click', playSpiders)

//to play the Spiderman Themes:
function playSpiderman() {
    const audio = document.getElementById('spiderman-themes')
    audio.play()
    alert('Mortal Kombat Blood Code entered successfully!')
}

function showKombatGif() {
    const gif = document.getElementById('mortal-kombat')
    gif.classList.toggle('hide-me')
}

function showKonamiGif() {
    const gif = document.getElementById('konami')
    gif.classList.toggle('hide-me')
}



// play video.html

function playVideo() {
    const video = document.querySelector('.play-video')
    video.play()
}

const tv = document.querySelector('.tv-frame')
tv.addEventListener('click', playVideo)


// zooming the view: THIS IS AN INSANE IDEA. DONT DO IT WITH THE VIDEO, BUT MAYBE SOMEPLACE ELSE

// const video = document.getElementById('video');
// const tvFrame = document.getElementById('tv');

// // Set initial scale and direction
// let scale = 1;
// let zoomDirection = 1;

// // Function to zoom in or out
// function zoom() {
//     // Adjust the scale by a small amount
//     scale += 0.01 * zoomDirection;

//     // Apply the scale to the video container
//     video.style.transform = `scale(${scale})`;
//     tvFrame.style.transform = `scale(${scale})`;

//     // Reverse direction when scale reaches limits
//     if (scale >= 1.2 || scale <= 0.8) {
//         zoomDirection *= -1;
//     }
// }

// Call the zoom function periodically (adjust the interval as needed)
// setInterval(zoom, 1000);
