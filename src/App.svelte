<script>
	// all variables are maintained in a functionally relevant store
	import { lowestNumber, highestNumber, quizLength } from './stores/quiz-store.js';
	import { routes } from './stores/route-store.js';

	// routed components must be in the ./routes folder
	import Router from 'svelte-spa-router';
	// 'replace' function allows programatic setting of routes
	import { replace } from 'svelte-spa-router';

	let options = [
		{ id: '', text: `Start` },
		{ id: 'quiz', text: `Quiz` },
		{ id: 'results', text: `Results` },
		{ id: 'WRONG', text: `Bad Path` }
	];

	let selected = { id: '', text: `Start` };

	$: {
		replace(`/${selected.id}`);
		// console.table(selected.id);
	}
</script>

<style>
	select {
		font-size: 16px;
		color: #22F;
	}

	h2 {
        color: #00f;
    }
</style>

<body>
	<form>
		<select bind:value={selected}>
			{#each options as anOption}
				<option value={anOption}>
					{anOption.text}
				</option>
			{/each}
		</select>
	</form>
	<h2>Práctica: Los números en español</h2>
	<Router routes={$routes}/>
	<hr/>
</body>