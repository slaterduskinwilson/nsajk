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
	Swank7 was a San Francisco ska band formed when members of NSAjk were in high school. Swank7
	recorded two EPs and one live album before breaking up due to the pressures of college
	applications, teenage girlfriends, and varsity athletics.
</p>

<style>
	/* your styles go here */
</style>
