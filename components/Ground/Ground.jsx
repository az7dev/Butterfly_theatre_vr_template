import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

export function Ground(props) {
    const texture = useTexture('/assets/grass.png');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return (
        <RigidBody {...props} type="fixed" colliders={false}>
            <mesh receiveShadow position={[0, -0.5, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[1000, 1000]} />
                <meshStandardMaterial map={texture} map-repeat={[240, 240]} color="green" />
            </mesh>
            <CuboidCollider args={[100, 0.5, 100]} position={[0, -0.5, 0]} />
        </RigidBody>
    );
}
