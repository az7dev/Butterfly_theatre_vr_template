import { useEffect, useContext } from 'react';
import { ContextData } from '../../context/Context';

/*****************
 * Player Controls
 ****************/
export default function UsePlayerControls() {
    const keys = {
        KeyW: 'forward',
        KeyS: 'backward',
        KeyA: 'left',
        KeyD: 'right',
        Space: 'jump'
    };
    const moveFieldByKey = (key) => keys[key];
    //   var mouseX = 0;
    //   var mouseY = 0;

    const [movement, setMovement] = useContext(ContextData);

    useEffect(() => {
        const handleKeyDown = (e) => {
            setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
        };
        const handleKeyUp = (e) => {
            setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        // document.addEventListener("mousemove", handleMouse, false);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            // document.removeEventListener("mousemove", handleMouse, false);
        };
    }, []);

    return null;
}
