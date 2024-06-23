<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error">
	<h1>Goddamn it. An error occurred!</h1>
	<h2>And it's not our fault! I swear to god it isn't!</h2>
	<p>Here's the error message: <em>{$page.status}: {$page.error.message}</em></p>
    <p>We recommend ignoring this error message and <a href="https://ko-fi.com/matthewwilson69">donating money directly to the developer.</a></p>
</div>

<style>
	.error {
		margin: 10rem;
	}
</style>
