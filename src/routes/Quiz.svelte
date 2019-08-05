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

{#if $numberList}
    <h1>QUIZ</h1>
    
{:else}
    <h1>QUIZ</h1>
    <h3>Error: No number list!</h3>
{/if}
