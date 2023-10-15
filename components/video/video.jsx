import React, { Suspense } from 'react';
import { useVideoTexture, useTexture } from '@react-three/drei';

export default function Video({ props }) {
    //   // console.log(props);
    const VideoTextureProps = {
        unsuspend: 'canplay',
        muted: false,
        loop: true,
        start: true,
        crossOrigin: 'Anonymous'
    };
    function VideoMaterial({ url }) {
        const texture = useVideoTexture(url, VideoTextureProps);
        return <meshBasicMaterial map={texture} toneMapped={false} />;
    }

    function FallbackMaterial({ url }) {
        const texture = useTexture(url);
        return <meshBasicMaterial map={texture} toneMapped={false} />;
    }
    return (
        <>
            {props ? (
                <mesh position={[0, 0.8, -2.25]}>
                    <planeGeometry args={[3.25, 1.5]} />
                    <Suspense fallback={<FallbackMaterial url="/assets/naturals.png" />}>
                        <VideoMaterial url="/assets/Naturals.mp4" />
                    </Suspense>
                </mesh>
            ) : null}
        </>
    );
}
