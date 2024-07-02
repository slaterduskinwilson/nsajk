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
<p class="alert-text" style="padding-left:2rem;">Hard Mike and the Lemonades is an improvisational collective that records every time they're in a room together. The band has changed their name several times.</p>

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
