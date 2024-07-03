<script>
	// this is to store the sideproject's url, so i can pass it to the layout for this page
	//and render a link
	import { urlStore } from '$lib/stores';

	// Set the URL value
	const url = 'https://skannieraitt.bandcamp.com';
	urlStore.set(url);
</script>

<div class="square" style="border: 1px solid black;">
	<img src="/02.png" alt="Bonnie Raitt, but ska" style="max-width: 100%;" />
</div>
<p class="alert-text" style="padding-left:2rem;">
	Skannie Raitt is a Bonnie Raitt ska cover band. The project is a piece of speculative nonfiction,
	setting a template for what a 4th wave of ska might sound like if the musicians were familiar with
	and yet not fond of 3rd wave ska. Moreover, Skannie Raitt is an educational piece with two goals:
	informing listeners who are unfamiliar with the music of Bonnie Raitt, and demonstrating a theory
	of music in which jazz is a verb and a lot of music is R&B.
</p>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
