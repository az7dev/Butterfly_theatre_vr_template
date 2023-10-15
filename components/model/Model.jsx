import React, { useContext, useRef, useState } from 'react';
import { ContextData } from '../../context/Context';
// import gsap from "gsap";

// import { useThree } from "@react-three/fiber";
import { useGLTF, CycleRaycast, SoftShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { Part3Instances } from './new/Part3';
import { Part4Instances } from './new/Part4';
import { RigidBody, InstancedRigidBodies } from '@react-three/rapier';
import { MeshStandardMaterial } from 'three';
import { Part5 } from './new/Part5';

// const NonInteractiveModel = React.lazy(() => import("./NonInteractiveModel"));

const Part1 = React.lazy(() => import('./new/Part1'));
const Part2 = React.lazy(() => import('./new/Part2'));
const Part3 = React.lazy(() => import('./new/Part3'));
const Part4 = React.lazy(() => import('./new/Part4'));
// const Part4 = React.lazy(() => import("./Part4"));
// const Part = React.lazy(() => import("./Part"));

// const Part9 = React.lazy(() => import("./Part9"));

// useGLTF.preload('/assets/model/part1.glb');
// useGLTF.preload('/assets/model/part2.glb');
// useGLTF.preload('/assets/model/part3.glb');
// useGLTF.preload("/assets/model/gate.glb");
// useGLTF.preload("/assets/model/green.glb");
// useGLTF.preload("/assets/model/house.glb");
// useGLTF.preload("/assets/model/rails1.glb");
// useGLTF.preload("/assets/model/interact.glb");

export function InteractiveModel() {
    // const previous = useRef(null);
    // // console.log(previous.current);
    const [movement, setMovement] = useContext(ContextData);
    const { view } = movement;

    // const { scene, camera } = useThree();
    // const { nodes } = useGLTF("/assets/model/interact.glb");
    // // console.log(nodes);

    // useEffect(() => {
    //   const stallObject = scene.getObjectByName(room);
    //   // console.log(stallObject);
    //   if (stallObject !== undefined) {
    //     camera.lookAt(stallObject);

    //     gsap.to(camera.position, {
    //       y: stallObject.position.y,
    //       x: stallObject.position.x,
    //       z: stallObject.position.z,
    //       duration: 3,
    //     });
    //   }
    // }, [room]);
    const { nodes } = useGLTF('/startuptn/codissia/stall.glb');
    // console.log(nodes);
    const instances = [{ key: nodes.B1.name, position: nodes.B1.position, rotation: nodes.B1.rotation, scale: nodes.B1.scale }];
    // console.log(instances);
    // const [animate, setAnimate] = useState([false, '']);
    // useFrame(
    //     (state) =>
    //         animate[0] &&
    //         animate[1].scale.setScalar(hovered ? animate[1].scale + Math.sin(state.clock.elapsedTime * 10) / 50 : animate[1].scale)
    // );
    const stallMaterial = new MeshStandardMaterial({
        color: '#9c0f05',
        opacity: 0.5,
        emissiveIntensity: 0
    });
    const onPointerOverStall = (pointerOver) => {
        pointerOver.stopPropagation();
        // setAnimate([true, pointerOver.object]);
        // console.log(pointerOver.object.material, 'over');
        // if (context[1] !== pointerOver.object.name) {
        pointerOver = pointerOver.object;
        pointerOver.material = stallMaterial;
        pointerOver.scale.set(pointerOver.scale.x * 1.1, pointerOver.scale.y * 2, pointerOver.scale.z * 1.1);
        // }
    };

    const onPointerOutStall = (pointerOut) => {
        // if (context[1] !== pointerOut.object.name) {
        // console.log(pointerOut, 'out');
        // setAnimate([false, '']);
        pointerOut = pointerOut.object;
        pointerOut.scale.set(nodes[pointerOut.name].scale.x, nodes[pointerOut.name].scale.y, nodes[pointerOut.name].scale.z);
        pointerOut.material = nodes[pointerOut.name].material;
        // // console.log(pointerOut, "outend");
        // }
    };

    return (
        <>
            <RigidBody type="fixed" colliders="trimesh">
                <Part1 />
                <Part2 />
            </RigidBody>
            <RigidBody type="fixed" colliders="cuboid">
                <Part5 onPointerOver={onPointerOverStall} onPointerOut={onPointerOutStall} />
            </RigidBody>
            {/* <InstancedRigidBodies type="fixed" colliders="cuboid" instances={instances}>
                <Part4Instances>
                    <Part4 onPointerOver={onPointerOverStall} onPointerOut={onPointerOutStall} />
                </Part4Instances>
            </InstancedRigidBodies> */}
            <Part3Instances>
                <Part3 />
            </Part3Instances>
            <CycleRaycast />
            <SoftShadows />
            {/* {view === "Auditorium" && <NonInteractiveModel />} */}

            {/* </RigidBody> */}
            {/* <Part1 visible={view === "Home"} /> */}
            {/* <Part2 visible={view === "Home"} /> */}
            {/* <Part3 /> */}
        </>
    );
}
