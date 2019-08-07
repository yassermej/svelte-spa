<script>
    import Router from 'svelte-spa-router';
    import { replace } from 'svelte-spa-router';

    import { 
        lowestNumber, highestNumber, quizLength,
        numberLimits,
        numberList, userResponses, totalCorrect
    } from '../stores/quiz-store.js';

    // console.table(numberLimits);

    function checkMin() {
        if ($lowestNumber >= $highestNumber) {
            $highestNumber = $lowestNumber;
            $lowestNumber = $highestNumber;
        }
    }

    function checkMax() {
        if ($highestNumber < $lowestNumber) {
            $lowestNumber = $highestNumber;
            $highestNumber = $lowestNumber;
        }
    }

    function checkQuizLen() {
        // console.log('checkQuizLen()');
        if ($quizLength > $numberLimits.questions) {
            quizLength.update(n => $numberLimits.questions)
        } else if ($quizLength < 1) {
            quizLength.update(n => 1)
        }
    }

    function startQuiz() {
        // check validity of inputs and set to defaults when values are invalid
        if ($highestNumber > $numberLimits.higher 
            || $highestNumber === undefined) $highestNumber = $numberLimits.higher;
        else if ($highestNumber < $numberLimits.lower) $highestNumber = $numberLimits.lower; 
        if ($lowestNumber > $numberLimits.higher) $lowestNumber = $numberLimits.higher; 
        else if ($lowestNumber < $numberLimits.lower
            || $lowestNumber === undefined) $lowestNumber = $numberLimits.lower; 
        if ($quizLength < 0) $quizLength = 1;
        if ($quizLength > $numberLimits.questions || $quizLength === undefined) $quizLength = $numberLimits.questions;

        // clear lists of random numbers, user responses, 
        // and correct counter (just in case old data lingers)
        $numberList = [];
        $userResponses = [];
        $totalCorrect = 0;

        // generate random numbers inclusive of the lowest 
        // and highest numbers selected by the user
        for (let i = 0; i < $quizLength; i++) {
            let randNumber = Math.floor(Math.random() 
                * ($highestNumber - $lowestNumber + 1) 
                + $lowestNumber);
            $numberList = [...$numberList, randNumber];
        }
        // use svelte-spa-router 'replace' method to navigate to quiz component
        replace("/quiz");
    }
</script>

<style>
    .settings-label {
        font-size: 1em;
        color: red
    }
</style>

<form>
    <label for="setMin" class="settings-label">Lowest number in quiz</label>
    <label name="setMin">
        <input type="number" bind:value={$lowestNumber} on:input={checkMin} min={$numberLimits.lower} max={$numberLimits.higher}>
        <input type="range" bind:value={$lowestNumber} on:input={checkMin} min={$numberLimits.lower} max={$numberLimits.higher}>
    </label>
    <label for="setMax" class="settings-label">Highest number in quiz</label>
    <label name="setMax">
        <input type="number" bind:value={$highestNumber} on:input={checkMax} min={$numberLimits.lower} max={$numberLimits.higher}>
        <input type="range" bind:value={$highestNumber} on:input={checkMax} min={$numberLimits.lower} max={$numberLimits.higher}>
    </label>
    <label for="setLength" class="settings-label">Number of questions</label>
    <label name="setLength">
        <input type="number" bind:value={$quizLength} on:input={checkQuizLen} min=0 max={$numberLimits.questions}>
        <input type="range" bind:value={$quizLength} on:input={checkQuizLen} min=0 max={$numberLimits.questions}>
    </label>
    <button on:click|preventDefault="{startQuiz}">Start Quiz</button>
</form>