<script>
    import { 
        lowestNumber, highestNumber, quizLength,
        numberLimits,
        numberList
    } from '../stores/quiz-store.js';

    console.table($numberList);
    window.responsiveVoice.speak(
          String($numberList[0]),
          "Spanish Latin American Female"
    );
</script>

<style>
.playSound {
    width: 40px;
    height: 40px;
    border: none;
    /* background-image: url('https://picsum.photos/40'); */
    background-image: url('images/pngkey.com-sound-png-475037.png');
    cursor: pointer;
}
</style>

{#if $numberList}
    <form action="">
        <label for="numberInput">Enter the number you hear</label>
        <button class="playSound" />
        <input type="number" name="numberInput" alt="input the number you hear" />
    </form>
{:else}
    <h1>QUIZ</h1>
    <h3>Error: No number list!</h3>
{/if}
