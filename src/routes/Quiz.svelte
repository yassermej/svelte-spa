<script>
    let currentResponse = "";

    sayCurrentNumber();

    import { 
        lowestNumber, highestNumber, quizLength,
        numberLimits,
        numberList, userResponses
    } from '../stores/quiz-store.js';

    let questionCounter = 0;

    // console.table($numberList);

    function sayCurrentNumber() {
        if(parseInt($numberList[questionCounter])) {
            window.responsiveVoice.speak(
            String($numberList[questionCounter]),
            "Spanish Latin American Female"
            );
        }
    }

    function monitorInput(event) {
        // console.table(event);
        // console.table(event.target.value);
        if(event.key === 'Enter') {
            console.log(event.target.value);
        }
    }
</script>

<style>
.playSound {
	border-radius: 3px;
	border: 1px solid #00E;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
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
    <form onsubmit="event.preventDefault()">
        <label for="numberInput">Enter the number you hear</label>
        <button class="playSound"
            type="button" 
            on:click="{sayCurrentNumber}"
        >
            <img src='images/iconfinder_volume-24_103167.png' 
                alt="play sound" 
                width="20px" height="20px" 
            />
        </button>
        <input type="number" 
            class="numberInput"
            name="numberInput"
            bind:value={currentResponse}
            on:keyup={monitorInput}
            min={$numberLimits.lower} max={$numberLimits.higher}
            alt="input the number you hear"
            placeholder="#?"
            autofocus
        />
    </form>
{:else}
    <h1>QUIZ</h1>
    <h3>Error: No number list!</h3>
{/if}