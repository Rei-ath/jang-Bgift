<script lang="ts">
	import { Group, Box3, Vector3 } from "three";
	import { T } from "@threlte/core";
	import { useGltf, useSuspense } from "@threlte/extras";
	export let ref = new Group();

    const suspend = useSuspense()
	const gltf = suspend(useGltf("/models/room.glb", { useDraco: "/" }));

</script>

<T is={ref} dispose={false} {...$$restProps} >
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T
			name="Scene"
            is={gltf.scene}
			on:create={({ ref }) => {
				ref.updateMatrixWorld(true);
				let completeBoundingBox = new Box3().setFromObject(ref);
				let v3 = new Vector3();
				completeBoundingBox.getSize(v3);
				ref.position.set(0, -v3.y / 2, 0);
			}}
		/>
		
	{:catch error}
		<slot name="error" {error} />
	{/await}
	<slot {ref} />
</T>
