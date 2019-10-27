	<script>
	// all variables are maintained in a functionally relevant store
	import { lowestNumber, highestNumber, quizLength } from './stores/quiz-store.js';
	import { routes } from './stores/route-store.js';

	// routed components must be in the ./routes folder
	import Router from 'svelte-spa-router';
	// 'replace' function allows programatic setting of routes
	import { replace } from 'svelte-spa-router';

// // options and selected are development/debugging code
// 	let options = [
// 		{ id: '', text: `Start` },
// 		{ id: 'quiz', text: `Quiz` },
// 		{ id: 'results', text: `Results` },
// 		{ id: 'WRONG', text: `Bad Path` }
// 	];

	let selected = { id: '', text: `Start` };

	$: {
		replace(`/${selected.id}`);
	}
</script>

<style>
	h2 {
		color: white;
		background-color: #00f;
		margin: 0px;
		padding-left: 10px;
	}
	.footer-container {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		grid-template-areas:
			"externalCred githubLink";
		width: 700px;
		}
	.externalCred {
		grid-area: externalCred;
	}
	.githubLink {
		grid-area: githubLink;
	}
</style>

<body>
	<!-- The form and select tag are development/testing code -->
	<!-- <form>
		<select bind:value={selected}>
			{#each options as anOption}
				<option value={anOption}>
					{anOption.text}
				</option>
			{/each}
		</select>
	</form> -->
	<div style="width: 700px;">
		<h2>Práctica: Los números en español</h2>
		<Router routes={$routes}/>
		<hr/>
	</div>

    <div class='footer-container'>
		<div class="externalCred">
			<div style="width:300px;vertical-align:top;font-family: Arial;font-size:9pt;line-height: normal">
				<a rel="license" href="//responsivevoice.org/" target="_blank"><img alt="ResponsiveVoice Text To Speech image" title="ResponsiveVoice Text To Speech" src="https://responsivevoice.org/wp-content/uploads/2014/08/120x31.png" style="float:left;padding-right:2px" /></a><span xmlns:dct="https://purl.org/dc/terms/" property="dct:title"><a href="//responsivevoice.org/" target="_blank" title="ResponsiveVoice Text To Speech">ResponsiveVoice</a></span> used under <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" alt="Creative Commons License and Link" title="Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License">Non-Commercial License</a>
			</div>
		<div style="clear:both;">&nbsp;</div>
	</div>
	<div class="githubLink">
		<a href="https://github.com/mundek/svelte-sla-spa" target="_blank">svelte-sla-numbers on github <i class="github icon"></i></a>
	</div>
</body>