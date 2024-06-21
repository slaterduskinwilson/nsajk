<script lang="ts">
	import Nav from './components/Nav.svelte';
	import { fly } from 'svelte/transition';

	export let data;

	//   https://joyofcode.xyz/sveltekit-page-transitions
</script>

<div class="window front-page">
	<div class="title-bar">
		<button aria-label="Close" class="close" id="close-this-website"></button>
		<h1 class="title">
			<a href="/">music by NSA(jk)</a>
		</h1>
		<button id="resize-button" aria-label="Resize" class="resize"></button>
	</div>

	<Nav></Nav>

	{#key data.url}
		<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
			<slot />
		</div>
	{/key}
</div>

<style>
	@import '../../static/system.css';

	.window.front-page {
		min-height: 100vh;
	}
</style>
