<script>
	import Nav from './components/Nav.svelte';
</script>
<div class="window">
    <div class="title-bar">
        <button
            aria-label="Close"
            class="close"
            id="close-this-website"
        ></button>
        <h1 class="title">
            <a href="/">music by NSA(jk)</a>
        </h1>
        <button
            id="resize-button"
            aria-label="Resize"
            class="resize"
        ></button>
    </div>

<Nav></Nav>

<slot></slot>
</div>


<style>
@import '../../static/system.css';

.window {
    min-height: 100vh;
}
</style>
