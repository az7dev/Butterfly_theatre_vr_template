import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d-compat';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { angleToRadians } from '../utils/angle';
import { useRef, useContext, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier';
// import Axe from "./Axe";
import { ContextData } from '../../context/Context';
import { Character } from '../model/Character';

const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotationXVector = new THREE.Vector3();
// const rotationYVector = new THREE.Vector3(0, Math.PI / 2, 0);

export function Player({ props }) {
    const { nodes, materials } = useGLTF('/assets/model/test.glb');

    // // console.log(view);
    const ref = useRef();
    const group = useRef();
    const controlRef = useRef();

    const rapier = useRapier();
    const { camera, scene } = useThree();

    const [movement, setMovement] = useContext(ContextData);
    // useEffect(() => {
    //   if (view === "Auditorium") {
    //     camera.rotation.set(0, 0, 0);
    //   } else if (view === "Canva") {
    //     camera.rotation.set(0, -Math.PI / 3, 0);
    //   }
    // }, [camera]);

    useFrame((state) => {
        // const personValue = ref.current.translation();
        // // console.log(personValue);
        // group.current.position.x = personValue.x - 1;
        // group.current.position.z = personValue.z - 1;
        const { forward, backward, left, right, jump, yrotate, yrotateminus } = movement;
        const velocity = ref.current.linvel();
        camera.position.set(...ref.current.translation());

        //Rotataion
        // const xrotatevalue = xrotate - xrotateminus;
        const yrotatevalue = yrotate - yrotateminus;
        rotationXVector.set(0, yrotatevalue, 0).normalize();
        var rad = 0;
        if (yrotatevalue !== 0) {
            rad = 0.05;
        }
        // rotationXVector.set(1, 0, 0).normalize();
        camera.rotateOnWorldAxis(rotationXVector, rad);
        // camera.setFromAxisAngle(rotationXVector, rad);

        // movement
        frontVector.set(0, 0, backward - forward);
        sideVector.set(left - right, 0, 0);
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);
        ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

        // jumping
        const world = rapier.world.raw();
        const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }));
        const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75;
        if (jump && grounded) ref.current.setLinvel({ x: 0, y: 12, z: 0 });
    });
    return (
        <>
            <RigidBody ref={ref} colliders={false} mass={60} type="dynamic" position={props} enabledRotations={[false, false, false]}>
                <CapsuleCollider args={[0, 0.35]} />
            </RigidBody>
        </>
    );
}
