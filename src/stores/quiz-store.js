import { writable } from 'svelte/store';

export const lowestNumber = writable(222);
export const highestNumber = writable(555);
export const quizLength = writable(1);
export const numberLimits = {
    lower: 0,
    higher: 999,
    questions: 30
}
