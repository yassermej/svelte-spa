<script>
	export let appName;

	import Router from 'svelte-spa-router'
	import Start from './routes/Start.svelte'
	import Quiz from './routes/Quiz.svelte'
	import Results from './routes/Results.svelte'
	import NotFound from './routes/NotFound.svelte'
 
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
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<body>
    <Router {routes}/>
	<hr/>
	<h1>Hello {appName}!</h1>
</body>