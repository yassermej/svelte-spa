<script>
    import { lowestNumber, highestNumber, numberLimits, quizLength } from '../stores/quiz-store.js';
        
    console.table(numberLimits);

    function checkMin() {
        if ($lowestNumber >= $highestNumber) {
            console.log('checkMin()');
            // let temp = $highestNumber;
            highestNumber.update(n => $lowestNumber);
            lowestNumber.update(n => $highestNumber);
        }
    }
    
    function checkMax() {
        if ($highestNumber < $lowestNumber) {
            console.log('checkMax()');
            // let temp = $highestNumber;
            lowestNumber.update(n => $highestNumber);
            highestNumber.update(n => $lowestNumber);
        }
    }

    function checkQuizLen() {
        console.log('checkQuizLen()');
        if ($quizLength > numberLimits.questions) {
            quizLength.update(n => numberLimits.questions)
        } else if ($quizLength < 1) {
            quizLength.update(n => 1)
        }
    }
</script>

<h1>START</h1>
<form>
    <label>
        <input type=number bind:value={$lowestNumber} on:input={checkMin} min={numberLimits.lower} max={numberLimits.higher}>
        <input type=range bind:value={$lowestNumber} on:input={checkMin} min={numberLimits.lower} max={numberLimits.higher}>
    </label>
    <label>
        <input type=number bind:value={$highestNumber} on:input={checkMax} min={numberLimits.lower} max={numberLimits.higher}>
        <input type=range bind:value={$highestNumber} on:input={checkMax} min={numberLimits.lower} max={numberLimits.higher}>
    </label>
    <label>
        <input type=number bind:value={$quizLength} on:input={checkQuizLen} min=0 max={numberLimits.questions}>
        <input type=range bind:value={$quizLength} on:input={checkQuizLen} min=0 max={numberLimits.questions}>
    </label>
</form>