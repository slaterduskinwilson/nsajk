<script>
	import { fly } from 'svelte/transition';

	// State variables for videos
	let videos = [
		{
			id: 1,
			title: 'My House',
			src: 'https://player.vimeo.com/video/748428315?badge=0&autopause=0&player_id=0&app_id=58479',
			isLarge: false,
			show: true,
			direction: { x: -300, y: -500 }
		},
		{
			id: 2,
			title: 'Law and Order SVU Theme',
			src: 'https://www.youtube.com/embed/OQpZDAT_6iw?si=GAvZIv90d6aBIvPv',
			isLarge: false,
			show: true,
			direction: { x: 1200, y: 1200 }
		}
	];

	function toggleShow(id) {
		const video = videos.find((v) => v.id === id);
		video.show = !video.show;
		videos = [...videos];
	}

	function toggleSize(id) {
		const video = videos.find((v) => v.id === id);
		video.isLarge = !video.isLarge;
		videos = [...videos];
	}
</script>

<div class="container">
	{#each videos as video (video.id)}
		{#if video.show}
			<div
				class="window"
				class:enlarged={video.isLarge}
				transition:fly={{ x: video.direction.x, y: video.direction.y, duration: 600 }}
			>
				<div class="title-bar">
					<button on:click={() => toggleShow(video.id)} aria-label="Close" class="close"></button>
					<h1 class="title">{video.title}</h1>
					<button on:click={() => toggleSize(video.id)} aria-label="Resize" class="resize"></button>
				</div>
				<div class="separator"></div>
				<div class="window-pane">
					<div style="padding:56.25% 0 0 0;position:relative;">
						<iframe
							src={video.src}
							frameborder="0"
							allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
							style="position:absolute;top:0;left:0;width:100%;height:100%;"
							title={video.title}
						></iframe>
					</div>
				</div>
			</div>
		{/if}
	{/each}
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
