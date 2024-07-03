<script>
	import { fly } from 'svelte/transition';

	let showWindow = true;
</script>

{#if showWindow}
	<div class="window soundtrack" transition:fly={{ x: 1000, y: -800, duration: 600 }}>
		<div class="title-bar">
			<button aria-label="Close" class="close" on:click={() => (showWindow = false)}></button>
			<h1 class="title">SVU the RPG: The Soundtrack</h1>
			<!-- <button aria-label="Resize" class="resize"></button> -->
		</div>
		<div class="separator"></div>

		<div class="window-pane">
			<h4>SVU: THE RPG</h4>
			<h5>Original soundtrack by NSA jk</h5>
			<p>
				Law and Order SVU is a copaganda rape/murder fetish TV show that is somehow still on the air after
				20-someodd years.
			</p>
            <p>
                SVU: THE RPG is an acclaimed video game with an original soundtrack by NSA/jk.
            </p>
            <p>This soundtrack is built from samples taken directly from the show.</p>
            <p>Do not fucking rat on NSA jk for making this music.</p>

            <hr>
            <h6>INSTRUCTIONS FOR DOWNLOAD:</h6>
            <ol>
                <li>
                    On this website, go to File -> Donate Money Without Buying Any Music
                </li>
                <li>You will be taken to a Ko-Fi donation page</li>
                <li>Donate an amount of money</li>
                <li>With your donation, write a message explaining that you're interested in the SVU RPG soundtrack</li>
                <li>You will receive further instructions</li>
            </ol>
            
		</div>
	</div>
{/if}

<!-- markup (zero or more items) goes here -->

<style>
	.soundtrack {
		max-width: 60%;
		margin: 2rem;
	}
</style>
