import { sveltekit } from '@sveltejs/kit/vite';
//  https://kit.svelte.dev/docs/images
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [enhancedImages(),
	sveltekit()]
});
