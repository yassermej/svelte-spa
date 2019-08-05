<script>
    import { 
        lowestNumber, highestNumber, quizLength,
        numberLimits,
        numberList
    } from '../stores/quiz-store.js';

    console.table($numberList);
    window.responsiveVoice.speak(
          String($numberList[0]),
          "Spanish Latin American Female"
    );
</script>

<style>
.input-form {
    display: inline-block;
    border: 1px inset #ccc;
}

.input-form input {
    border: none;
    padding: 0;
}

.input-form button {
    border: none;
    background: none;
}
</style>

{#if $numberList}
    <form class="input-form" action="">
        <input name="responseNumber" />
            <button><img src="../resources/iconfinder_volume-24_103167.png" alt="Play Audio" /></button>
    </form>
{:else}
    <h1>QUIZ</h1>
    <h3>Error: No number list!</h3>
{/if}
