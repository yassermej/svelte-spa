<script>
    import { lowestNumber, highestNumber, numberLimits, quizLength } from '../stores/quiz-store.js';
    
    // console.log($lowestNumber, $highestNumber);
</script>

{#if $highestNumber}
    <h1>QUIZ</h1>
    <p>Lowest: {$lowestNumber} / Highest: {$highestNumber} / Questions: {$quizLength}</p>
{:else}
    <h1>QUIZ</h1>
{/if}

