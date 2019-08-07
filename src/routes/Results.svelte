<script>
    import { replace } from 'svelte-spa-router';
    import ResultsRightWrong from '../ResultsRightWrong.svelte';

    import {
        numberList, userResponses, totalCorrect
    } from '../stores/quiz-store.js';

    $: longListFlag = ($numberList.length > 10);

    // pre-filled lists for debugging
    // $numberList = [12, 221, 15, 750, 911, 454, 312, 12, 682, 555,
    //     777, 18, 882, 3, 367, 801, 177, 666, 937, 200]
    // $userResponses = [11, 221, 14, 715, 911, 454, 312, 12, 682, 555,
    //     777, 18, 882, 3, 366, 801, 177, 676, 937, 200]
    // $numberList = [12, 221, 15, 750, 911, 454, 312, 12, 682, 555, 777]
    // $userResponses = [11, 221, 14, 715, 911, 454, 312, 12, 682, 555, 777]

    let quizResults = {
        theNumber: $numberList,
        theResponses: $userResponses
    }
    // console.table(quizResults);
</script>

<style>
    ul {
        list-style: none;
        margin:0;
        padding:0;
    }
    ul > li {
        display: inline-block;
        width: 100%;
    }
    div {
        -webkit-column-count:2;
        -moz-column-count:2;
        -ms-column-count:2;
        -o-column-count:2;
        column-count:2;
        -webkit-column-gap:15px;
        -moz-column-gap:15px;
        -ms-column-gap:15px;
        -o-column-gap:15px;
        column-gap:15px;
        columns:2;
    }
</style>

<h1>RESULTS</h1>
{#if longListFlag}
    <!-- place list within div for two-column layout -->
    <!-- because list is longer than hardcoded value above -->
    <div>
        <ul>
        {#each $numberList as aNumber, i}
            <li>
                <!-- The number: {aNumber}; your response: {$userResponses[i]} -->
                <ResultsRightWrong aQuizNumber={aNumber} aQuizResponse={$userResponses[i]} />
            </li>
        {/each}
        </ul>
    </div>
{:else}
    <!-- output list without div for one-column layout -->
    <!-- because list is shorter or equal to hardcoded value above -->
    {#each $numberList as aNumber, i}
        <ul>
            <li>
                <ResultsRightWrong aQuizNumber={aNumber} aQuizResponse={$userResponses[i]} />
            </li>
        </ul>
    {/each}
{/if}