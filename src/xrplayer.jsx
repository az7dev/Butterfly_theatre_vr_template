import { useXR, useXREvent } from '@react-three/xr';
import { useEffect, useContext } from 'react';
import { ContextData } from './context/Context';


export default function XRPlayer() {
    const { player } = useXR();
    // const [movement, setMovement] = useContext(ContextData);

    // const { forward, backward, left, right, room } = movement;

    // const playerMovementForward = () => {
    //   setMovement((m) => ({ ...m, forward: true }));
    // };

    // const playerMovementStop = () => {
    //   setMovement((m) => ({ ...m, forward: false }));
    // };

    // player.position.set([-10, 0, 10]);
    // console.log(player);
    useXREvent('selectstart', (e) => {
        player.position.x += 1;
    });

    // useXREvent("selectend", (e) => {
    //   playerMovementStop();
    // });

    useXREvent('squeeze', (e) => {
        player.position.y += 1;
    });

    useEffect(() => {
        player.position.set(-10, 0, 10);
    }, []);

    return <></>;
}
