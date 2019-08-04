<script>
    import { lowestNumber, highestNumber } from '../stores/stores.js';
    
    // console.log($lowestNumber, $highestNumber);
</script>

{#if $highestNumber}
    <h1>QUIZ</h1>
    <p>Lowest: {$lowestNumber} / Highest: {$highestNumber}</p>
{:else}
    <h1>QUIZ</h1>
{/if}

