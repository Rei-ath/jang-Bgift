<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
  import Questions from "./world/Questions.svelte";
</script>

<Questions />
<Canvas>
  <Scene roomVisible={true} />
</Canvas>
