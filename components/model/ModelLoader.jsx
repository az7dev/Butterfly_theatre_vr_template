// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import React from 'react';
import { useGLTF } from '@react-three/drei';

// export default function ModelLoader({ url }) {
//   // console.log(url);
//   const gltf = useLoader(GLTFLoader, url, (loader) => {
//     const dracoLoader = new DRACOLoader();
//     dracoLoader.setDecoderPath(
//       "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"
//     );
//     loader.setDRACOLoader(dracoLoader);
//   });
//   return (
//     <React.Suspense fallback={null}>
//       <primitive object={gltf.scene} />
//     </React.Suspense>
//   );
// }

export default function ModelLoader({ url }) {
    const { nodes } = useGLTF(url);
    // // console.log(nodes.Scene.children);
    return (
        <React.Suspense fallback={null}>
            <primitive object={nodes.Scene} />
        </React.Suspense>

        // <group>
        //   {nodes.Scene.children.map((node) => (
        //     <primitive key={node.name} object={node} />
        //   ))}
        // </group>
    );
}
