<script>
	// this is to store the sideproject's url, so i can pass it to the layout for this page
	//and render a link
	import { urlStore } from '$lib/stores';

	// Set the URL value
	const url = 'https://soundcloud.com/hardmikeandthelemonades/sets/calm-down';
	urlStore.set(url);
</script>

<div class="square" style="border: 1px solid black;">
	<img src="/02.png" alt="Bonnie Raitt, but ska" style="max-width: 100%;" />
</div>
<p class="alert-text" style="padding-left:2rem;">
	Hard Mike and the Lemonades is an improvisational collective that records every time they're in a
	room together. In this way they're kind of like the Stasi, but more irie. Based out of Chapel
	Hill, the band has changed its name several times, and have also been billed as Solo Basura,
	Ice/No Ice, Calm Down, Blues Lawyer, and Miami Face Eater. The collective has at one time or
	another featured Michael Myerson, Chris Haynes, Meredith Sause, Jason Sonnenschein, Bryce Wilson,
	and Rob Chamberlain.
</p>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
