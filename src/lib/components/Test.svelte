<script lang="ts">
  import { T, useFrame } from "@threlte/core";
  import { ContactShadows, interactivity } from "@threlte/extras";
  import { spring } from "svelte/motion";

  interactivity();
  const scale = spring(1);
  let rotation = 0;
  useFrame((state, delta) => {
    rotation += delta;
  });
</script>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />
<!-- 
<Float
  floatIntensity={1}
  floatingRange={[0, 1]}
> -->
<T.Mesh
  position.y={1.2}
  position.z={-0.75}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
>
  <T.BoxGeometry />
  <T.MeshStandardMaterial color="#0059BA" />
</T.Mesh>
<!-- </Float> -->

<!-- <Float
  floatIntensity={1}
  floatingRange={[0, 1]}
> -->
<T.Mesh position={[1.2, 1.5, 0.75]} rotation.x={5} rotation.y={rotation}>
  <T.TorusKnotGeometry args={[0.5, 0.15, 100, 12, 2, 3]} />
  <T.MeshStandardMaterial color="#F85122" />
</T.Mesh>
<!-- </Float> -->

<!-- <Float
  floatIntensity={1}
  floatingRange={[0, 1]}
> -->
<T.Mesh position={[-1.4, 1.5, 0.75]} rotation={[-5, 128, 10]} castShadow>
  <T.MeshStandardMaterial color="hotpink" />
  <T.IcosahedronGeometry />
</T.Mesh>
<!-- </Float> -->

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
  <T.CircleGeometry args={[4, 40]} />
  <T.MeshStandardMaterial color="white" />
</T.Mesh>
