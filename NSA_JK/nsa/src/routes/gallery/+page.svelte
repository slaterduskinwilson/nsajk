<script>
	// import { fly } from 'svelte/transition';

	// State variables for videos
	// let videos = [
	// 	{
	// 		id: 1,
	// 		title: 'My House',
	// 		src: 'https://player.vimeo.com/video/748428315?badge=0&autopause=0&player_id=0&app_id=58479',
	// 		isLarge: false,
	// 		show: true,
	// 		direction: { x: -300, y: -500 }
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Law and Order SVU Theme',
	// 		src: 'https://www.youtube.com/embed/OQpZDAT_6iw?si=GAvZIv90d6aBIvPv',
	// 		isLarge: false,
	// 		show: true,
	// 		direction: { x: 1200, y: 1200 }
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Conversation',
	// 		src: 'https://www.youtube.com/embed/U1lJdEw6ElQ?si=vitJOEFw9NPgGYrO',
	// 		isLarge: false,
	// 		show: true,
	// 		direction: { x: 1000, y: 0 }
	// 	}
	// ];

	// function toggleShow(id) {
	// 	const video = videos.find((v) => v.id === id);
	// 	video.show = !video.show;
	// 	videos = [...videos];
	// }

	// function toggleSize(id) {
	// 	const video = videos.find((v) => v.id === id);
	// 	video.isLarge = !video.isLarge;
	// 	videos = [...videos];
	// }
</script>

<div class="container">
	
			<div
				class="window"
				
				
			>
				<div class="title-bar">
					<button on:click={() => console.log("fucking clicked it on closed")} aria-label="Close" class="close"></button>
					<h1 class="title">Butt Butt Butt</h1>
					<button on:click={console.log('fucking clicked it on resize')} aria-label="Resize" class="resize"></button>
				</div>
				<div class="separator"></div>
				<div class="window-pane">
					<p>fuck yo ass</p>

                    <enhanced:img src="/static/02.png" alt="oh fuck"/>
				</div>
			</div>
		
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		gap: 6rem;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.window {
		max-width: max-content;
		max-height: min-content;
	}

	/* .hidden {
		display: none;
	} */

	.enlarged {
		min-width: 60vw;
	}
</style>
