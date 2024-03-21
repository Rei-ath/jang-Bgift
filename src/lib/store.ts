import { writable } from 'svelte/store';
export const cameraCoords = writable<number[]>([0, 0, 0]);
export const strText = writable<string>(``);
export const count = writable<number>(0);
export const currentState = writable<string>('');
export const gameState = writable<string>('')