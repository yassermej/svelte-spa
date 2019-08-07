<script>
    export let aQuizNumber;
    export let aQuizResponse;

    let wrongAnswer = false;

    $: if (aQuizNumber !== aQuizResponse) {
        wrongAnswer = true;
    }
</script>

<style>
    .isWrong {
        color: red;
    }
</style>

<span>aQN: {aQuizNumber}</span> - <span class={wrongAnswer ? 'isWrong' : ''} >aQR: {aQuizResponse}</span>
