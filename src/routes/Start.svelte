<script>
    import Router from 'svelte-spa-router';
    import { replace } from 'svelte-spa-router';

    import { 
        lowestNumber, highestNumber, quizLength,
        numberLimits,
        numberList
    } from '../stores/quiz-store.js';

    // console.table(numberLimits);

    function checkMin() {
        if ($lowestNumber >= $highestNumber) {
            // console.log('checkMin()');
            // highestNumber.update(n => $lowestNumber);
            // lowestNumber.update(n => $highestNumber);
            $highestNumber = $lowestNumber;
            $lowestNumber = $highestNumber;
        }
    }
    
    function checkMax() {
        if ($highestNumber < $lowestNumber) {
            // console.log('checkMax()');
            // lowestNumber.update(n => $highestNumber);
            // highestNumber.update(n => $lowestNumber);
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
        if ($highestNumber > $numberLimits.higher 
            || $highestNumber === undefined) $highestNumber = $numberLimits.higher; 
        if ($highestNumber < $numberLimits.lower) $highestNumber = $numberLimits.lower; 
        if ($lowestNumber > $numberLimits.higher) $lowestNumber = $numberLimits.higher; 
        if ($lowestNumber < $numberLimits.lower
            || $lowestNumber === undefined) $lowestNumber = $numberLimits.lower; 
        if ($quizLength < 0) $quizLength = 1;
        if ($quizLength > $numberLimits.questions || $quizLength === undefined) $quizLength = $numberLimits.questions;

        $numberList = [];
        for (let i = 0; i < $quizLength; i++) {
            let randNumber = Math.floor(Math.random() * ($highestNumber - $lowestNumber + 1) + $lowestNumber);
            $numberList = [...$numberList, randNumber];
        }
        // console.table($numberList);
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
        <input type=number bind:value={$lowestNumber} on:input={checkMin} min={$numberLimits.lower} max={$numberLimits.higher}>
        <input type=range bind:value={$lowestNumber} on:input={checkMin} min={$numberLimits.lower} max={$numberLimits.higher}>
    </label>
    <label for="setMax" class="settings-label">Highest number in quiz</label>
    <label name="setMax">
        <input type=number bind:value={$highestNumber} on:input={checkMax} min={$numberLimits.lower} max={$numberLimits.higher}>
        <input type=range bind:value={$highestNumber} on:input={checkMax} min={$numberLimits.lower} max={$numberLimits.higher}>
    </label>
    <label for="setLength" class="settings-label">Number of questions</label>
    <label name="setLength">
        <input type=number bind:value={$quizLength} on:input={checkQuizLen} min=0 max={$numberLimits.questions}>
        <input type=range bind:value={$quizLength} on:input={checkQuizLen} min=0 max={$numberLimits.questions}>
    </label>
    <button on:click|preventDefault="{startQuiz}">Start Quiz</button>
</form>