<script>
	// show/hide state variable for MY HOUSE video
	let showMyHouse = true;
	function handleMyHouseClose() {
		showMyHouse = !showMyHouse;
	}

	// resize variable for MY HOUSE video
	let myHouseIsLarge = false;
	function handleMyHouseExpand() {
		myHouseIsLarge = !myHouseIsLarge;
		console.log('my house large? ', myHouseIsLarge);
	}
</script>

<!-- apply the hidden class if you click the button -->
<div  class:hidden={!showMyHouse}>
	<div class="window" class:enlarged={myHouseIsLarge}>
		<div class="title-bar">
			<button on:click={handleMyHouseClose} aria-label="Close" class="close"></button>
			<!-- click this button to show/hide this window -->
			<h1 class="title">My House</h1>
			<button on:click={handleMyHouseExpand} aria-label="Resize" class="resize"></button>
		</div>
		<div class="separator"></div>

		<div class="window-pane">
			<div style="padding:56.25% 0 0 0;position:relative;">
				<iframe
					src="https://player.vimeo.com/video/748428315?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
					style="position:absolute;top:0;left:0;width:100%;height:100%;"
					title="(Come Up To) My House"
				></iframe>
			</div>
			<script src="https://player.vimeo.com/api/player.js"></script>
		</div>
	</div>
</div>

<style>
	.window {
		max-width: max-content;
	}

	.hidden {
		display: none;
	}

	.enlarged {
		min-width: 70vw;
	}
</style>
