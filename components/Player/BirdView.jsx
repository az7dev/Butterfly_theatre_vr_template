import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { angleToRadians } from '../utils/angle';
import { useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
export default function BirdView({ cam }) {
    // const cameraRef = useRef();
    // const [minPosX, setMinPosX] = useState(-10); // Minimum x position
    // const [maxPosX, setMaxPosX] = useState(10); // Maximum x position
    // const [minPosY, setMinPosY] = useState(0); // Minimum y position
    // const [maxPosY, setMaxPosY] = useState(20); // Maximum y position
    // const [minPosZ, setMinPosZ] = useState(-10); // Minimum z position
    // const [maxPosZ, setMaxPosZ] = useState(10); // Maximum z position

    // const HandleCameraMove = () => {
    //     const { camera } = useThree();
    //     const { x, y, z } = camera.position;
    //     // console.log(x, y, z);
    //     // Limit camera position
    //     camera.position.x = Math.max(minPosX, Math.min(maxPosX, x));
    //     camera.position.y = Math.max(minPosY, Math.min(maxPosY, y));
    //     camera.position.z = Math.max(minPosZ, Math.min(maxPosZ, z));

    //     // Update camera matrix and frustum
    //     camera.updateMatrixWorld();
    //     camera.updateProjectionMatrix();
    // };
    return (
        <>
            <PerspectiveCamera fov={35} makeDefault={cam} position={[300, 100, 500]} />

            <OrbitControls
                // ref={cameraRef}
                // onPointerMove={() => HandleCameraMove}
                // mouseButtons={{ LEFT: THREE.MOUSE.ROTATE }}
                // panSpeed={0.25}
                rotateSpeed={0.5}
                minDistance={30}
                maxDistance={250}
                minPolarAngle={angleToRadians(50)}
                maxPolarAngle={angleToRadians(85)}
                zoomSpeed={1}
                enablePan={false}
                enableRotate={true}
                enableDamping={true}
                // minZoom={10}
            />
        </>
    );
}
