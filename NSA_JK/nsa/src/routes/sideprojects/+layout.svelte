<script>
	import { urlStore } from '$lib/stores';
	let url;

	// Subscribe to the store to get the URL value
	const unsubscribe = urlStore.subscribe((value) => {
		url = value;
	});

	// Unsubscribe when the component is destroyed
	import { onDestroy } from 'svelte';
	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="alert-box outer-border scale-down" style="width:30rem;">
	<div class="inner-border">
		<div class="alert-contents" style="padding-left: 30px; padding-right:20px;">
			<section class="field-row" style="justify-content: flex-start">
				<slot></slot>
			</section>
			<section class="field-row" style="justify-content: flex-end">
				<button class="btn"><a href="/">fuck off</a></button>
				<button class="btn btn-default"><a href={url} target="_blank">Listen</a></button>
			</section>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	button a {
		text-decoration: none;
	}
	.alert-box {
		margin: 10rem 30rem;
	}
</style>
