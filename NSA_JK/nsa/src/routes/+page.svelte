<script>
	const awfulPeople = [
		'H.H. Holmes',
		'Mike Love',
		'Carlos Mencia',
		'Bernie Madoff',
		'Paul Ryan',
		'Bristol Palin',
		'David Koresh'
	];

    const adverbs = [
        'second',
        'third',
        'fourth',
        'sixteenth',
        'eighth',
        'eleventh'
    ]

    
	// Function to get a random element from the array
	function getRandomPerson() {
		const randomIndex = Math.floor(Math.random() * awfulPeople.length);
		return awfulPeople[randomIndex];
	}

    function getRandomAdverb() {
        const randomIndex = Math.floor(Math.random() * adverbs.length)
        return adverbs[randomIndex]
    }

	// Assign a random person to a variable
	let awfulPerson = getRandomPerson();

    let adverb = getRandomAdverb()

</script>

<div class="standard-dialog center scale-down" style="width:30rem;">
	<h1 class="dialog-text">"NSA/jk is my {adverb} favorite band!"</h1>
	<p class="dialog-text">-{awfulPerson}</p>
</div>

<style>
	.standard-dialog {
		margin: 4rem;
	}
</style>
