{#if params.items}
    <h1>QUIZ :: {params.items}</h1>
{:else}
    <h1>QUIZ</h1>
{/if}
<a href="#/">#/start</a>
<a href="#/quiz">#/quiz</a>
<a href="#/results">#/results</a>
<a href="#/spaceballs">#/spaceballs</a>

<script>
    export let params = {}
</script>