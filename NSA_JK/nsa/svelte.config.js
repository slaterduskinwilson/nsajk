import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// https://stormcloudy.com/post/disable-svelte-a11y-warnings
	 // START COPY & PASTE HERE
	 onwarn: (warning, handler) => {
		// TODO: ignoring warnings. Fix before pushing to PROD
 
		// add warning codes you see in console to ignoreWarn to disable them
		// e.g. "ally" or "a11y-no-abstract-role" will ignore all or specific rules respectively
 
		const ignoreWarn = ["a11y","ARIA", "Unused CSS selector"] // add exclusions here
		ignoreWarn.some((el) => warning.code.includes(el)) ? null : handler(warning)
 
		// the above line finds part of the warning code and if in the ignoreWarn array will do nothing. 
		// handler(warning) allows all other warning through so you don't miss important ones.
 
	   },       /*   <= make sure to include the comma so the rest of the file works */
	// END COPY & PASTE HERE
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		
		
	}
};

export default config;
