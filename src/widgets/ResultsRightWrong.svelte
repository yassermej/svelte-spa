<script>
    import { onMount } from 'svelte';
    import { audioIconPath } from '../stores/quiz-store.js';

    export let aQuizNumber = 999;
    export let aQuizResponse = 909;

    onMount (() => {
        window.responsiveVoice.cancel();
    });

    function playNumber(event) {
        // console.table(event.target);
        let aNumber = event.target.value;
        if(parseInt(aNumber)) {
            if(parseInt(aNumber) === 911) {
                window.responsiveVoice.speak(
                    String("novecientos once"),
                    "Spanish Latin American Female");
            } else {
                window.responsiveVoice.speak(
                    String(aNumber),
                    "Spanish Latin American Female");
            }
        }
    }
</script>

<style>
    .isWrong {
        color: red;
    }
    .isRight {
        color: green;
    }
    button {
        border-radius: 3px;
        border: 1px solid #00E;
        display: inline-block;
        cursor: pointer;
        color: #ff0000;
        padding: auto;
        font-size: 14px;
        font-style: bold;
        text-align: left;
        width: 6em;
    }
</style>

{#if (aQuizNumber === aQuizResponse)}
    <button class="isRight"
            type="button"
            value={aQuizNumber}
            on:click="{playNumber}">
            <img src={$audioIconPath}
                alt="play sound" 
                width="14px" height="14px" 
            />
        {aQuizNumber}
    </button>
{:else}
    <button class="isRight"
            type="button"
            value={aQuizNumber}
            on:click="{playNumber}">
            <img src={$audioIconPath} 
                alt="play sound" 
                width="14px" height="14px" 
            />
        {aQuizNumber}
    </button>
    <button class="isWrong"
            type="button" 
            value={aQuizResponse}
            on:click="{playNumber}">
            <img src={$audioIconPath}
                alt="play sound" 
                width="14px" height="14px" 
            />
        {aQuizResponse}&midast;
    </button>
{/if}