/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo, useContext, createContext } from 'react';
import { useGLTF, Merged } from '@react-three/drei';

const context = createContext();
export function Part3Instances({ children, ...props }) {
    const { nodes } = useGLTF('/startuptn/codissia/envobjects.glb');
    const instances = useMemo(
        () => ({
            Cube: nodes.Cube074_1,
            Cube1: nodes.Cube074_2,
            CTCnew: nodes['CTCnew4_1_(1)004_1'],
            CTCnew1: nodes['CTCnew4_1_(1)004_2'],
            CTCnew2: nodes['CTCnew4_1_(1)004_3'],
            Cube3: nodes.Cube028,
            Cylinder: nodes.Cylinder004_1,
            Cylinder1: nodes.Cylinder004_2,
            Cube5: nodes.Cube122,
            Tree: nodes.tree003
        }),
        [nodes]
    );
    return (
        <Merged meshes={instances} {...props}>
            {(instances) => <context.Provider value={instances} children={children} />}
        </Merged>
    );
}

export default function Part3(props) {
    const { nodes, materials } = useGLTF('/startuptn/codissia/envobjects.glb');

    const instances = useContext(context);
    return (
        <group {...props} dispose={null}>
            <group position={[-136.69, 17.19, 48.13]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-137.99, 17.19, 37.66]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-139.29, 17.19, 27.19]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-140.58, 17.19, 16.73]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-141.88, 17.19, 6.26]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-143.18, 17.19, -4.21]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-144.47, 17.19, -14.68]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-145.77, 17.19, -25.15]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-147.07, 17.19, -35.61]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-148.36, 17.19, -46.08]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-149.66, 17.19, -56.55]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-120.75, 17.19, 46.15]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-122.04, 17.19, 35.68]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-123.34, 17.19, 25.22]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-124.64, 17.19, 14.75]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-125.93, 17.19, 4.28]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-127.23, 17.19, -6.19]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-128.53, 17.19, -16.65]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-129.82, 17.19, -27.12]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-131.12, 17.19, -37.59]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-132.42, 17.19, -48.06]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-133.71, 17.19, -58.52]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-104.08, 17.19, 44.09]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-105.37, 17.19, 33.62]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-106.67, 17.19, 23.15]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-107.97, 17.19, 12.68]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-109.26, 17.19, 2.22]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-110.56, 17.19, -8.25]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-111.85, 17.19, -18.72]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-113.15, 17.19, -29.19]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-114.45, 17.19, -39.65]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-115.74, 17.19, -50.12]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-117.04, 17.19, -60.59]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-89.11, 17.19, 42.23]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-90.41, 17.19, 31.77]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-91.7, 17.19, 21.3]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-93, 17.19, 10.83]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-94.3, 17.19, 0.36]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-95.59, 17.19, -10.1]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-96.89, 17.19, -20.57]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-98.19, 17.19, -31.04]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-99.48, 17.19, -41.51]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-100.78, 17.19, -51.97]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-102.08, 17.19, -62.44]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-91.81, 13.79, 91.21]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-93.11, 13.79, 80.74]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-94.41, 13.79, 70.27]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-76.85, 13.79, 89.35]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-78.14, 13.79, 78.89]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-79.44, 13.79, 68.42]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-111.72, 12.17, -90.79]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-113.02, 12.17, -101.26]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-114.31, 12.17, -111.73]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-96.75, 12.17, -92.64]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-98.05, 12.17, -103.11]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <group position={[-99.35, 12.17, -113.58]} rotation={[0, 0.12, 0]} scale={[2.64, 0.2, 2.64]}>
                <instances.Cube />
                <instances.Cube1 />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube124.geometry}
                material={materials['Material.007']}
                position={[-112.13, 3.65, 53.36]}
                rotation={[0, 0.12, 0]}
                scale={[1.29, 1.69, 1.29]}
            />
            <group position={[-20.21, 1.96, -19.4]} rotation={[Math.PI / 2, 0, 2.64]} scale={4.6}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-21.37, 1.96, -28.32]} rotation={[Math.PI / 2, 0, -1.68]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-18.84, 1.96, -40.05]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-18.44, 1.96, -49.57]} rotation={[Math.PI / 2, 0, 2.41]} scale={5.52}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-50.38, 1.96, -45.61]} rotation={[Math.PI / 2, 0, -2.18]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-46.15, 1.96, -38.54]} rotation={[Math.PI / 2, 0, 1.27]} scale={5.43}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-45.06, 1.96, -30.61]} rotation={[Math.PI / 2, 0, -1.81]} scale={5.67}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-42.05, 1.96, -22.59]} rotation={[Math.PI / 2, 0, 1.19]} scale={4.3}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-42.74, 1.96, -15.77]} rotation={[Math.PI / 2, 0, -2.02]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-40.95, 1.96, 1.69]} rotation={[Math.PI / 2, 0, -0.52]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-42.15, 1.96, 11.73]} rotation={[Math.PI / 2, 0, -2.4]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-42.84, 1.96, 18.67]} rotation={[Math.PI / 2, 0, 0.53]} scale={5.87}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-45.58, 1.96, 27.29]} rotation={[Math.PI / 2, 0, 0.79]} scale={4.11}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-47.82, 1.96, 34.87]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-6.69, 1.96, 44.39]} rotation={[Math.PI / 2, 0, -1.01]} scale={5.16}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-6.99, 1.96, 53.2]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-9.75, 1.96, 65.58]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-9.47, 1.96, 74.47]} rotation={[Math.PI / 2, 0, 1.19]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-2.2, 1.96, 80.1]} rotation={[Math.PI / 2, 0, -1.03]} scale={4.72}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-2.37, 1.96, 89.06]} rotation={[Math.PI / 2, 0, -1.96]} scale={6.39}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-5.48, 1.96, 102]} rotation={[Math.PI / 2, 0, -1.94]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-5.39, 1.96, 110.57]} rotation={[Math.PI / 2, 0, -1.68]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-26.04, 1.96, -60.98]} rotation={[Math.PI / 2, 0, -1.47]} scale={5.17}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-25.9, 1.96, -70.41]} rotation={[Math.PI / 2, 0, 1.71]} scale={4.65}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-22.76, 1.96, -83.78]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-22.55, 1.96, -92.65]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-30.17, 1.96, -100.58]} rotation={[Math.PI / 2, 0, -1.08]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-30.68, 1.96, -108.9]} rotation={[Math.PI / 2, 0, -3.11]} scale={5.53}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-27.88, 1.96, -120.31]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-26.57, 1.96, -130.86]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[66.38, 1.96, -16.71]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-9.84, 1.96, 26.23]} rotation={[Math.PI / 2, 0, 0]} scale={4.92}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-15.46, 1.96, 21.34]} rotation={[Math.PI / 2, 0, -2.06]} scale={5.49}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <group position={[-14.6, 1.96, -2.46]} rotation={[Math.PI / 2, 0, 0.47]} scale={5.09}>
                <instances.CTCnew />
                <instances.CTCnew1 />
                <instances.CTCnew2 />
            </group>
            <instances.Cube3 position={[-54.06, 10.62, 80.61]} rotation={[0, 0.1, 0]} scale={[0.67, 0.67, 1.83]} />
            <instances.Cube3 position={[-75.2, 13.99, -109.32]} rotation={[0, 0.1, 0]} scale={[0.67, 0.67, 1.83]} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube123.geometry}
                material={materials['Material.007']}
                position={[-85.08, 3.65, 50]}
                rotation={[0, 0.12, 0]}
                scale={[1.29, 1.69, 1.29]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text366.geometry}
                material={nodes.Text366.material}
                position={[-52.73, 10.29, 82.15]}
                rotation={[Math.PI / 2, 0, -1.67]}
                scale={0.87}
            />
            <group position={[-17.27, 6.16, 114.97]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-19.61, 6.16, 94.22]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-22.38, 6.16, 68.79]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-24.97, 6.16, 48.18]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-26.81, 6.16, 33.63]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-29.1, 6.16, 14.5]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-31.25, 6.16, -1.98]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-32.6, 6.16, -16.14]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-34.69, 6.16, -32.39]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-36.42, 6.16, -48.89]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-37.34, 6.16, -56.89]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-39.49, 6.16, -75.11]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-41.83, 6.16, -94.44]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-44.54, 6.16, -115.68]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-46.82, 6.16, -136.43]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-18.86, 6.16, -139.72]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-16.63, 6.16, -125.46]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-15.35, 6.16, -112.8]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-13.23, 6.16, -94.82]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-11.2, 6.16, -78.76]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-9.08, 6.16, -61.95]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-5.67, 6.16, -35.89]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-7.96, 6.16, -52.17]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-4.18, 6.16, -21.21]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-1.84, 6.16, -1.21]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[-0.01, 6.16, 13.34]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[2.29, 6.16, 31.11]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[3.92, 6.16, 44.56]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[6.5, 6.16, 64.5]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[9.52, 6.16, 89.32]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <group position={[12.18, 6.16, 110.51]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.15}>
                <instances.Cylinder />
                <instances.Cylinder1 />
            </group>
            <instances.Cube5 position={[-73.04, 3.65, 48.9]} rotation={[0, 0.12, 0]} scale={[1.29, 1.69, 1.03]} />
            <instances.Cube5 position={[-87.26, 3.65, -72.84]} rotation={[0, 0.12, 0]} scale={[1.29, 1.69, 1.03]} />
            <instances.Cube5 position={[-127.39, 3.63, -67.75]} rotation={[0, 0.12, 0]} scale={[1.29, 1.69, 1.03]} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text365.geometry}
                material={nodes.Text365.material}
                position={[-73.94, 13.62, -107.84]}
                rotation={[Math.PI / 2, 0, -1.67]}
                scale={0.87}
            />
            <instances.Tree position={[-10.08, 1.9, 19.06]} rotation={[Math.PI, -0.95, Math.PI]} scale={[0.41, 1.7, 0.41]} />
            <instances.Tree position={[-15.66, 1.9, 13.02]} rotation={[0, -0.55, 0]} scale={[0.49, 2.02, 0.49]} />
            <instances.Tree position={[-17.74, 1.9, 3.68]} rotation={[Math.PI, -0.12, Math.PI]} scale={[0.33, 1.36, 0.33]} />
            <instances.Tree position={[-14.71, 1.9, -22.7]} rotation={[Math.PI, -0.44, Math.PI]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-16.41, 1.9, -33.62]} rotation={[0, 0.75, 0]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[86.74, 1.9, 9.36]} rotation={[Math.PI, -0.03, Math.PI]} scale={[0.31, 1.26, 0.31]} />
            <instances.Tree position={[75.59, 1.9, -49.57]} rotation={[Math.PI, -0.03, Math.PI]} scale={[0.31, 1.26, 0.31]} />
            <instances.Tree position={[-12.88, 1.9, 4.51]} rotation={[0, 0.07, 0]} scale={[0.37, 1.53, 0.37]} />
            <instances.Tree position={[-14.2, 1.9, 29.15]} rotation={[Math.PI, -0.95, Math.PI]} scale={[0.36, 1.48, 0.36]} />
            <instances.Tree position={[-23.74, 1.9, -47.59]} rotation={[0, 0.39, 0]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-22.64, 1.9, -36.6]} rotation={[Math.PI, -0.7, Math.PI]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[-3.77, 1.9, 72.4]} rotation={[Math.PI, -0.44, Math.PI]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-5.47, 1.9, 61.49]} rotation={[0, 0.75, 0]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[-12.79, 1.9, 47.51]} rotation={[0, 0.39, 0]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-11.69, 1.9, 58.5]} rotation={[Math.PI, -0.7, Math.PI]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[-19.84, 1.9, -64.63]} rotation={[Math.PI, -0.44, Math.PI]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-21.54, 1.9, -75.54]} rotation={[0, 0.75, 0]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[-28.86, 1.9, -89.52]} rotation={[0, 0.39, 0]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-27.76, 1.9, -78.53]} rotation={[Math.PI, -0.7, Math.PI]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[-23.97, 1.9, -102.84]} rotation={[Math.PI, -0.44, Math.PI]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-25.67, 1.9, -113.75]} rotation={[0, 0.75, 0]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[-33, 1.9, -127.73]} rotation={[0, 0.39, 0]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-31.9, 1.9, -116.74]} rotation={[Math.PI, -0.7, Math.PI]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[0.8, 1.9, 108.11]} rotation={[Math.PI, -0.44, Math.PI]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-0.9, 1.9, 97.2]} rotation={[0, 0.75, 0]} scale={[0.43, 1.76, 0.43]} />
            <instances.Tree position={[-8.23, 1.9, 83.23]} rotation={[0, 0.39, 0]} scale={[0.41, 1.67, 0.41]} />
            <instances.Tree position={[-7.13, 1.9, 94.22]} rotation={[Math.PI, -0.7, Math.PI]} scale={[0.43, 1.76, 0.43]} />
            <group position={[31.95, 1.67, 8.04]} scale={[0.86, 1, 0.86]}>
                <mesh castShadow receiveShadow geometry={nodes.Cube051.geometry} material={materials['Roof.001']} />
                <mesh castShadow receiveShadow geometry={nodes.Cube051_1.geometry} material={materials['Material.028']} />
                <mesh castShadow receiveShadow geometry={nodes.Cube051_2.geometry} material={nodes.Cube051_2.material} />
            </group>
            <group position={[11.43, 2.14, -173.97]} scale={[0.86, 1, 0.86]}>
                <mesh castShadow receiveShadow geometry={nodes.Cube058.geometry} material={materials['Roof.001']} />
                <mesh castShadow receiveShadow geometry={nodes.Cube058_1.geometry} material={materials['Material.042']} />
                <mesh castShadow receiveShadow geometry={nodes.Cube058_2.geometry} material={nodes.Cube058_2.material} />
            </group>
        </group>
    );
}
// useGLTF.preload('/tree.glb');
