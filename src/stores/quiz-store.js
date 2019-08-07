import { writable } from 'svelte/store';

export const lowestNumber = writable(0);
export const highestNumber = writable(999);
export const quizLength = writable(15);
export const numberLimits = writable({
    lower: 0,
    higher: 999,
    questions: 20
});
export const numberList = writable([]);
export const userResponses = writable([]);
export const totalCorrect = writable(0);