import { useGLTF } from '@react-three/drei';
import axeUrl from '../../assets/axe.glb';

export default function Axe(props) {
    const { nodes, materials } = useGLTF(axeUrl);
    return (
        <group dispose={null} {...props}>
            <group rotation={[0, Math.PI / 1.8, -0.3]} scale={0.5}>
                <mesh geometry={nodes.Mesh_1001_1.geometry} material={materials.material_2} />
                <mesh geometry={nodes.Mesh_1001_2.geometry} material={materials.material_3} />
            </group>
        </group>
    );
}

useGLTF.preload(axeUrl);
