// src/lib/stores.js
import { writable } from 'svelte/store';

export const urlStore = writable('');

// this is to pass the sideproject url to the corresponding layout page, so that each 
//layout has a link button to a specific url