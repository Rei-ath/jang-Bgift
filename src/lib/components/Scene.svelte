<script lang="ts">
  import { useThrelte } from "@threlte/core";
  import Camera from "./Camera.svelte";
  import Lights from "./Lights.svelte";
  import Room from "./world/Room.svelte";
  export let roomVisible:boolean;
  const { camera } = useThrelte();
  $: {
    console.log("Camera ", $camera.position);
  }
</script>

<Camera />
<Lights />
{#if roomVisible}
{#await Room}
  <p>LET IT LOADDDD JANG</p>
{:then Room} 
  <Room />
{/await}

{/if}