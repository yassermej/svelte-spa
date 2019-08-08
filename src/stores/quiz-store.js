import { readable, writable } from 'svelte/store';

const MAX_QUIZ_LENGTH = 20;
const STARTING_QUIZ_LENGTH = 15;
const LOWEST_NUMBER_LIMIT = 0;
const HIGHEST_NUMBER_LIMIT = 999;

export const lowestNumber = writable(LOWEST_NUMBER_LIMIT);
export const highestNumber = writable(HIGHEST_NUMBER_LIMIT);
export const quizLength = writable(STARTING_QUIZ_LENGTH);
export const numberLimits = readable({
    lower: LOWEST_NUMBER_LIMIT,
    higher: HIGHEST_NUMBER_LIMIT,
    questions: MAX_QUIZ_LENGTH
});
export const numberList = writable([]);
export const userResponses = writable([]);
export const totalCorrect = writable(0);
export const audioIconPath = readable('images/iconfinder_volume-24_103167.png');
// export const audioIconPath = readable('images/iconfinder_Audio_2190991.png');

// language-specific array: Responsive Voice literally says, 
// for example, "nueve uno uno" for the number '911'!
export const longWords = readable({
    911: 'novecientos once',
    999: 'novecientos noventa y nueve'
});