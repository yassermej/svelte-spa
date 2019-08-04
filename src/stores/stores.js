import { writable } from 'svelte/store';

import Start from '../routes/Start.svelte'
import Quiz from '../routes/Quiz.svelte'
import Results from '../routes/Results.svelte'
import NotFound from '../routes/NotFound.svelte'

export const lowestNumber = writable(222);
export const highestNumber = writable(555);
export const quizLength = writable(1);
export const numberLimits = {
    lower: 0,
    higher: 999,
    questions: 30
}

// create 'routes' object to pass to Router component in markup
export const routes = writable({
    // Exact path
    '/': Start,

    // Using named parameters, with last being optional
    '/quiz/:items?': Quiz,

    // Wildcard parameter
    '/results': Results,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
});
