<script>
    import { onMount } from 'svelte';
    import { replace } from 'svelte-spa-router';

    import { 
        quizLength,
        numberLimits,
        audioIconPath,
        longWords,
        numberList, userResponses, totalCorrect
    } from '../stores/quiz-store.js';

    let currentResponse = "";
    let questionCounter = 0;
    let percentageCorrect = 0;

    $: if (questionCounter > 0) {
        percentageCorrect = (Number.parseInt(($totalCorrect / questionCounter) * 100));
        } else {
        percentageCorrect = '0';
        }

    // $numberList[0] = 911; // Responsive voice literally says "nueve uno uno" for the number '911'!

    onMount(() => {
        // get things started by saying the first number when component mounts
        sayCurrentNumber();
    });

    function sayCurrentNumber() {
        if(parseInt($numberList[questionCounter]) >= 0) {
            // Responsive voice literally says "nueve uno uno" for the number '911'!
            let aNumber = $numberList[questionCounter];
            if($longWords[aNumber]) {
                window.responsiveVoice.speak(
                    $longWords[aNumber],
                    "Spanish Latin American Female");
            } else {
                window.responsiveVoice.speak(
                    String(aNumber),
                    "Spanish Latin American Female");
            }
        }
    }

    function validateInput() {
        if(Number.isInteger(currentResponse) && (currentResponse >= $numberLimits.lower) && (currentResponse <= $numberLimits.higher)) {
            return true;
        } else {
            return false;
        }
    }

    function submitAnswer(event) {
        if (!validateInput()) { return false; }

        if(event.key === 'Enter' || event.type === "submit") {
            if(parseInt(currentResponse) === parseInt($numberList[questionCounter])) {
                $totalCorrect++;
            }
            $userResponses[questionCounter] = parseInt(currentResponse);
            console.log($numberList.length, questionCounter);
            questionCounter++;
            currentResponse = '';

            if($numberList.length > questionCounter) {
                sayCurrentNumber();
            } else {
                presentResults();
            }
        }
    }

    function presentResults() {
        // use function imported from svelte-spa-router
        // to navigate to the results component path
        replace("/results");
    }
</script>

<style>
    .playSound, .submitButton, .endQuiz {
        border-radius: 3px;
        border: 1px solid #00E;
        display: inline-block;
        cursor: pointer;
        color: #ff0000;
        padding: auto;
    }

    .numberInput {
        border-radius: 3px;
        border: 1px solid #00E;
        display: inline-block;
        padding: auto;
    }
</style>

{#if $numberList}
    <form on:submit|preventDefault="{submitAnswer}">
        <label for="numberInput">Enter the number you hear</label>
        <button class="playSound"
            type="button" 
            on:click="{sayCurrentNumber}">
            <img src={$audioIconPath} 
                alt="play sound" 
                width="20px" height="20px" 
            />
        </button>
        <input type="number" 
            class="numberInput"
            name="numberInput"
            bind:value="{currentResponse}"
            on:keyup={submitAnswer}
            min={$numberLimits.lower} max={$numberLimits.higher}
            alt="input the number you hear"
            placeholder="#?"
            autofocus
        />
        <button class="submitButton"
            type="submit"
            on:submit="{submitAnswer}">
            Check
        </button>
                <button class="endQuiz"
            type="button"
            on:click="{presentResults}">
            End
        </button>

    </form>
{:else}
    <h1>QUIZ</h1>
    <h3>Error: No number list!</h3>
{/if}
<p>{$totalCorrect} correct ({percentageCorrect}%)</p>
<p>{$numberList.length - questionCounter} of {$numberList.length} remaining</p>
