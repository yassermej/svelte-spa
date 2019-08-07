<script>
    import { onMount } from 'svelte';

    import { 
        quizLength,
        numberLimits,
        numberList, userResponses, totalCorrect
    } from '../stores/quiz-store.js';

    let currentResponse = "";
    let questionCounter = 0;
    let percentageCorrect = 0;

    $: percentageCorrect = (Number.parseInt(($totalCorrect / questionCounter) * 100));

    onMount(() => {
        sayCurrentNumber();
    })

    function sayCurrentNumber() {
        if(parseInt($numberList[questionCounter])) {
            window.responsiveVoice.speak(
            String($numberList[questionCounter]),
            "Spanish Latin American Female"
            );
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
        // console.table(event);

        if (!validateInput()) { return false; }

        if(event.key === 'Enter' || event.type === "submit") {
            if(currentResponse === parseInt($numberList[questionCounter])) {
                // console.log('match!');
                $totalCorrect++;
            }
            $userResponses[questionCounter] = parseInt($numberList[questionCounter]);
            questionCounter++;
            currentResponse = '';
            sayCurrentNumber();
        }
    }

</script>

<style>
    .playSound, .submitButton {
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
            <img src='images/iconfinder_volume-24_103167.png' 
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
    </form>
{:else}
    <h1>QUIZ</h1>
    <h3>Error: No number list!</h3>
{/if}
{#if questionCounter > 0}
    <p>{$totalCorrect} correct ({percentageCorrect}%)</p>
    <p>{$numberList.length - questionCounter} of {$numberList.length} remaining</p>
{/if}