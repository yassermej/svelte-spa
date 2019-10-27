<script>
    import { replace } from 'svelte-spa-router';
    import ResultsRightWrong from '../widgets/ResultsRightWrong.svelte';

    import {
        numberList, userResponses, totalCorrect
    } from '../stores/quiz-store.js';
    // console.log($numberList);

    $: columnCount = Math.ceil(Number.parseInt($userResponses.length) / 10);

    // pre-filled lists for debugging
    // $numberList = [12, 221, 15, 750, 911, 454, 312, 12, 682, 555,
    //     911, 454, 312, 12, 682, 555, 882, 3, 367, 801, 177,
    //     777, 18, 882, 3, 367, 801, 177, 666, 937]
    // $userResponses = [11, 221, 14, 715, 911, 454, 312, 12, 682, 555,
    //     911, 454, 312, 12, 682, 555,882, 3, 367, 801, 177,
    //     777, 18, 882, 3, 366, 801, 177, 676, 937]
    // $numberList = [12, 221, 15, 750, 911, 454, 312, 12, 682, 555, 777]
    // $userResponses = [11, 221, 14, 715, 911, 454, 312, 12, 682, 555, 777]

    function restartQuiz() {
        replace("/");
    }
</script>

<style>
    h3 {
        padding-left: 10px;
        padding-bottom: 10px;
        margin: 0;
        padding-block: 0;
        color: white;
        background-color: #777;
    }
    ul {
        list-style: none;
        margin:0;
        padding:0;
    }
    ul > li {
    display: inline-block;
    width: 100%;
    }
    li {
        display: inline-block;
        width: 100%;
    }
    div {
        column-gap: 15px;
    }
    .restartButton {
        margin-left: auto;
        display: block;
    }
</style>

<h3>RESULTS: {Number.parseInt(($totalCorrect/$userResponses.length) * 100)}% correct 
    <span style="color: #d8d8d8;">({$totalCorrect} of {$userResponses.length})</span>
</h3>
<div style="column-count: {columnCount}; columns: {columnCount};">
    <ul>
    {#each $userResponses as aResponse, i}
        <li><ResultsRightWrong
                aQuizNumber={$numberList[i]} 
                aQuizResponse={aResponse} 
            /></li>
    {/each}
    </ul>
</div>
<button class="restartButton"
    type="button"
    on:click="{restartQuiz}">Restart</button>
