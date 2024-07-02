<script>
	import { fly } from 'svelte/transition';

	let showWindow = true;
</script>

{#if showWindow}
	<div class="window sketchbook" transition:fly={{ x: -100, y: 800, duration: 600 }}>
		<div class="title-bar">
			<button aria-label="Close" class="close" on:click={() => (showWindow = false)}></button>
			<h1 class="title">Sketchbook</h1>
			<!-- <button aria-label="Resize" class="resize"></button> -->
		</div>
		<div class="separator"></div>

		<div class="window-pane">
			<h4>This section showcases the raw materials used to build NSA jk.</h4>
			<p>
				Music, particularly the obsessively multitracked kind, doesn't usually queaph itself into
				existence one day just because you happen to be at an artist's retreat on Crete that day.
				Time must be taken to collect many grains of sand that irritate you. It is these tiny grains
				of irritant that will gradually form the pearl that will hopefully get you laid or at least
				some free alcohol or drugs.
			</p>
			<p>
				When they're doing a good job, members of NSA/jk are always taping, and almost always paying
				attention. There are hundreds of iPhone voice memo recordings that paint as complete a
				picture as you can of a person trying not to just the fucking fucking aaaaaaaaaaaa. And
				sometimes even succeeding.
			</p>

            <a href="">Click here to visit NSAjk.org, home of the archival recordings of NSA jk.</a>
		</div>
	</div>
{/if}

<!-- markup (zero or more items) goes here -->

<style>
	.sketchbook {
		max-width: 60%;
		margin: 8rem;
	}
</style>
