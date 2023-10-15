/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Part1(props) {
    const { nodes, materials } = useGLTF('/startuptn/codissia/envbase.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle021.geometry}
                material={materials['brown path']}
                position={[41.29, 2.05, 71.54]}
                rotation={[0, 0.02, 0]}
                scale={[18.67, 31.25, 24.22]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane025.geometry}
                material={materials.Grass}
                position={[12.44, 1.99, -28.89]}
                scale={[281.94, 892.13, 292.73]}
            />
            <group position={[62.24, 4.61, 0]}>
                <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials['Material.002']} />
                <mesh castShadow receiveShadow geometry={nodes.Plane_1.geometry} material={materials['Material.029']} />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane014.geometry}
                material={materials.concrete}
                position={[-411.34, 2.43, -134.32]}
                scale={[1.47, 1.71, 1.47]}
            />
            <group position={[-61.84, 2.18, 15.31]} rotation={[0, -1.47, 0]} scale={[4.57, 0.15, 2.17]}>
                <mesh castShadow receiveShadow geometry={nodes.Cylinder017_1.geometry} material={materials['Material.023']} />
                <mesh castShadow receiveShadow geometry={nodes.Cylinder017_2.geometry} material={materials.Grass} />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane022.geometry}
                material={materials['Road with Dashed Lane']}
                position={[-411.34, 2.09, -134.32]}
                scale={[1.47, 1.71, 1.47]}
            />
            <group position={[-68.14, 2.18, -41.15]} rotation={[0, -1.47, 0]} scale={[4.57, 0.15, 2.17]}>
                <mesh castShadow receiveShadow geometry={nodes.Cylinder018_1.geometry} material={materials['Material.023']} />
                <mesh castShadow receiveShadow geometry={nodes.Cylinder018_2.geometry} material={materials.Grass} />
            </group>
            <group position={[11.43, 2.17, -28.53]} rotation={[-Math.PI, 0.57, -Math.PI]} scale={[7.85, 15.27, 15.27]}>
                <mesh castShadow receiveShadow geometry={nodes.Circle026.geometry} material={materials['Material.023']} />
                <mesh castShadow receiveShadow geometry={nodes.Circle026_1.geometry} material={materials.Grass} />
                <mesh castShadow receiveShadow geometry={nodes.Circle026_2.geometry} material={materials.Material} />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005.geometry}
                material={materials.concrete}
                position={[-411.34, 2.04, -134.32]}
                scale={[1.47, 1.71, 1.47]}
            />
        </group>
    );
}

// useGLTF.preload('/env.glb');
