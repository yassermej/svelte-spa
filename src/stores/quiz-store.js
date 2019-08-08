import { writable } from 'svelte/store';

const MAX_QUIZ_LENGTH = 20;
const STARTING_QUIZ_LENGTH = 3;
const LOWEST_NUMBER_LIMIT = 0;
const HIGHEST_NUMBER_LIMIT = 999;

export const lowestNumber = writable(LOWEST_NUMBER_LIMIT);
export const highestNumber = writable(HIGHEST_NUMBER_LIMIT);
export const quizLength = writable(STARTING_QUIZ_LENGTH);
export const numberLimits = writable({
    lower: LOWEST_NUMBER_LIMIT,
    higher: HIGHEST_NUMBER_LIMIT,
    questions: MAX_QUIZ_LENGTH
});
export const numberList = writable([]);
export const userResponses = writable([]);
export const totalCorrect = writable(0);
export const audioIconPath = writable('images/iconfinder_volume-24_103167.png');