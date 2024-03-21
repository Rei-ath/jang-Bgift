<script lang="ts">
    import { T, extend } from "@threlte/core";
    import { OrbitControls } from "@threlte/extras";
    extend({
        OrbitControls,
    });
    import { cameraCoords } from "../store";
    cameraCoords.set([-20, 100, -1])
    console.log($cameraCoords)
</script>

<T.PerspectiveCamera 
    makeDefault 
    position={$cameraCoords} 
    fov={40}>
    <OrbitControls
        enableZoom={true}
        enableDamping
        autoRotateSpeed={0.5}
        target.y={6}
        enablePan={true}
    />
</T.PerspectiveCamera>
