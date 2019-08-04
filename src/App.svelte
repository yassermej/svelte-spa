<script>
	// all variables are maintained in a single store
	import { lowestNumber, highestNumber, quizLength, routes } from './stores/stores.js';

	// routed components must be in the ./routes folder
	import Router from 'svelte-spa-router'
	// 'replace' function allows programatic setting of routes
	import { replace } from 'svelte-spa-router'

	let options = [
		{ id: '', text: `Start` },
		{ id: 'quiz', text: `Quiz` },
		{ id: 'quiz/20', text: `Quiz 20	` },
		{ id: 'results', text: `Results` },
		{ id: 'WRONG', text: `Bad Path` }
	];

	let selected = { id: '', text: `Start` };

	$: {
		replace(`/${selected.id}`);
		console.table(selected.id);
	}
</script>

<style>
	h1 {
		color: purple;
	}

	select {
		font-size: 16px;
		color: #22F;
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
	<hr />
	<Router routes={$routes}/>
	<hr/>
</body>