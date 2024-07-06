<!-- <script context="module">
  
	export async function load({ fetch }) {
        try {
            const response = await fetch('/api/sketches');
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            const images = await response.json();
            console.log('Fetched images in load function:', images);  // Log the fetched images to debug
            return { images };
        } catch (error) {
            console.error('Error in load function:', error);
            return { images: [] };
        }
    }
</script> -->

<script>
	import { fly } from 'svelte/transition';

	let showWindow = true;

	// export let data;

	// export let loading = true;

	// $: if (data) {
	// 	loading = false;
	// 	console.log('Data received in component:', data); // Log the data received in the component
	// }
	const imageModules = import.meta.glob(
		'/src/sketchbook/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	// console.log(Object.entries(imageModules));

</script>

{#if Object.entries(imageModules)}
	{#each Object.entries(imageModules) as [_path, module]}
		<enhanced:img src={(module.default[0]).split('?')[0]} alt="some alt text" />
	{/each}
{/if}

<hr />
<hr />
<hr />
<br /><br /><br /><br />
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
				existence one day just because it happens to be the day that you're at an artist's retreat
				on Crete. Time must be taken to collect many grains of sand that irritate you. It is these
				tiny grains of irritant that will gradually form the pearl that will hopefully get you laid
				or at least some free alcohol or drugs.
			</p>
			<p>
				When they're doing a good job, members of NSA/jk are always taping, and almost always paying
				attention.
			</p>
			<!-- {#if loading}
				<p>Loading...</p>
			{:else if data.images && data.images.length > 0}
				<div class="gallery">
					{#each data.images as image}
						<img src={image} alt="Sketchbook Image" />
					{/each}
				</div>
			{:else}
				<p>No images found.</p>
			{/if} -->
			<hr />
			<hr />
			<hr />
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

	.gallery {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}
	.gallery img {
		max-width: 100%;
		height: auto;
		border: 1px solid #ddd;
		border-radius: 8px;
	}
</style>
