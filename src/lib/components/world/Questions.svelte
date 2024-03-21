<script lang="ts">
	import {
		cameraCoords,
		strText,
		currentState,
		gameState,
	} from "../../store";

	import { secret } from "$lib/secret";
	// console.log(spotify_code)
	const letter: string = `SOOOO , happyy birthday , u  are 19 now ..ikrrr, 
	but u are still   a child inside..
	u will  face sooo many  bad things and sadd things..
	uwill cryyy.. 
	
	buttt that  wont  last forever ..u will  smile  ,laugh ,
	u  willl have   fun...

	soooo yeah ik u can do  it...
	i wish u the happiest birthday..

	yeahyeah ik ik  this is very cheesy and cringe..prolly the worst present  u ever gooot .
	brooo ists sooo  cheeesyy..u will feel  cringe ....sorry for that..

	broo i had soo much less time ... its not even 1 percent complete..
	i litterly started coding tooday.. for this...
	sooo sorry for the incovinvece.(dunno the spelling)
	this is my letter for u..
	dont ask me any question..

	i want u to have happpy life..
	welll u deserve the whole universe...

	yeah dont worry about me ...
	ik GOD has sooo much better plans for  u,,,
	
	ohhh yeah btw ,/..

	since i never /gave u anythibg ..

	here is smalll gift from my side..
	that u prolly wont need but i dont have anything to give..

	soooohere u go
	${secret}
	`;
	strText.set(`heyyyy jang HAPPPIEST BIRTHDAY' uwu Can u see this ... ummm it was
suppose to be a mushroomhouse.. BUT webgl sucks alot... i will show u a
blender wala ok...taht one has realistic anyways ik it sucks.. btw wanna
come inside???`);
	currentState.set("greetings");
	// $: {
	function doTheThingy(cumin: boolean) {
		if (cumin && $currentState === "greetings") {
			// alert("goood girl");
			cameraCoords.set([-1.75683, -0.822969, 2.92783]);
			strText.set(
				"oooppss just play around  ok ?? use shift + right click got it ??",
			);
			currentState.set("tutorial");
			cumin = false;
		} else if (!cumin && $currentState === "greetings") {
			strText.set("jang dont play with my heart");
		} else if (cumin && $currentState == "tutorial") {
			strText.set(
				"can u seethe interior ik ik it sucks but it doesnt in blender... lets play a game in  this room u have to find a thing ill give u options",
			);
			currentState.set("game");
		}
	}
	function startCountdown(seconds: number) {
		if (seconds <= 0) {
			strText.set(letter);
		} else {
			strText.update((v) => v + ".... " + seconds);
			setTimeout(function () {
				startCountdown(seconds - 1);
			}, 1000); // Wait for 1 second
		}
	}
	// }
	function checkColor(col: string) {
		if (col === "p") {
			currentState.set("done");
			strText.set("wow im proud of u,, my letter incoming in seconds =>");
			startCountdown(5);
		} else {
			strText.update((v) => v + " \ntry again bro  , SKILLL ISSSUUUEEE");
		}
	}
	$: {
		if ($gameState == "gift") {
			strText.set("are u sure?? what colour??");
			currentState.set("gift");
		} else {
			strText.update((v) => v + "\n try again bro  u lame");
		}
	}
</script>

<dialog class="overlay flex z-[2001]" style="display: block;">
	<p class="narrative-text">
		{$strText}
	</p>
	{#if $currentState == "greetings"}
		<button on:click={() => doTheThingy(true)}> yes </button>
		<button on:click={() => doTheThingy(false)}> no </button>
	{:else if $currentState == "tutorial"}
		<button on:click={() => doTheThingy(true)}> ok </button>
		<!-- <button on:click={() => (doTheThingy(false))}> no </button> -->
	{:else if $currentState === "game"}
		<button on:click={() => gameState.set("gift")}> A gift </button>
		<button on:click={() => gameState.set("watch")}> Watch </button>
		<button on:click={() => gameState.set("ball")}> Ball </button>
		<button on:click={() => gameState.set("cmon")}>
			U found nothing
		</button>
	{:else if $currentState === "gift"}
		<button on:click={() => checkColor("b")}> black </button>
		<button on:click={() => checkColor("p")}> pink </button>
		<button on:click={() => checkColor("w")}> white </button>
		<button on:click={() => checkColor("l")}> im lying </button>
	{/if}
</dialog>
