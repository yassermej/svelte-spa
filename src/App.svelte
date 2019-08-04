<script>
	export let appName;

	// routed components must be in the ./routes folder
	import Router from 'svelte-spa-router'
	import { replace } from 'svelte-spa-router'

	import Start from './routes/Start.svelte'
	import Quiz from './routes/Quiz.svelte'
	import Results from './routes/Results.svelte'
	import NotFound from './routes/NotFound.svelte'

	// create 'routes' object to pass to Router component in markup
	const routes = {
		// Exact path
		'/': Start,
	
		// Using named parameters, with last being optional
		'/quiz/:items?': Quiz,
	
		// Wildcard parameter
		'/results': Results,
	
		// Catch-all
		// This is optional, but if present it must be the last
		'*': NotFound,
	}

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
</style>

<body>
    <Router {routes}/>
	<hr/>
	<h1>Hello {appName}! (dev)</h1>
	<hr />
	<form>
		<select bind:value={selected}>
			{#each options as anOption}
				<option value={anOption}>
					{anOption.text}
				</option>
			{/each}
		</select>
	</form>
</body>