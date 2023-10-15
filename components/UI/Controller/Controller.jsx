import React, { useContext, useState, useEffect } from 'react';
import { Joystick } from 'react-joystick-component';
import { ContextData } from '../../../context/Context';
import './Controller.css';

export default function Controller() {
    const [dir, setDir] = useState('');
    // const [rot, setRot] = useState("");

    // const keys = {
    //   FORWARD: "jump",
    //   BACKWARD: "jump",
    //   LEFT: "yrotate",
    //   RIGHT: "yrotateminus",
    // };
    // const value = {
    //   forward: false,
    //   backward: false,
    //   left: false,
    //   right: false,
    //   jump: false,
    //   xrotate: false,
    //   xrotateminus: false,
    //   yrotate: false,
    //   yrotateminus: false,
    //   view: "Auditorium",
    //   cam: false,
    //   room: "Home",
    // };

    const [movement, setMovement] = useContext(ContextData);
    // const moveFieldByKey = (key) => keys[key];
    useEffect(() => {
        if (dir === 'FORWARD') {
            // const temp = ;
            // // console.log(dir);
            setMovement((m) => ({
                ...m,
                forward: true,
                backward: false,
                left: false,
                right: false
            }));
        } else if (dir === 'BACKWARD') {
            // const temp = ;
            // // console.log(dir);
            setMovement((m) => ({
                ...m,
                forward: false,
                backward: true,
                left: false,
                right: false
            }));
        } else if (dir === 'LEFT') {
            // const temp = ;
            // // console.log(dir);
            setMovement((m) => ({
                ...m,
                forward: false,
                backward: false,
                left: true,
                right: false
            }));
        } else if (dir === 'RIGHT') {
            // const temp = ;
            // // console.log(dir);
            setMovement((m) => ({
                ...m,
                forward: false,
                backward: false,
                left: false,
                right: true
            }));
        } else {
            setMovement((m) => ({
                ...m,
                forward: false,
                backward: false,
                left: false,
                right: false
            }));
        }
    }, [dir]);

    // useEffect(() => {
    //   if (rot !== "stop" && "stop1") {
    //     value[moveFieldByKey(rot)] = true;
    //     setMovement(value);
    //   } else if (rot === "stop1") {
    //     setMovement(value);
    //   } else {
    //     setMovement(value);
    //   }
    // }, [rot]);
    return (
        <>
            <div className="controller1">
                <Joystick
                    size={100}
                    stickColor={'silver'}
                    stickSize={65}
                    baseColor={'grey'}
                    // baseImage={"/assets/movement1.png"}
                    move={(e) => setDir(e.direction)}
                    stop={(e) => setDir(e.type)}
                ></Joystick>
            </div>
            {/* <div className="controller2">
        <Joystick
          size={100}
          stickColor={"silver"}
          stickSize={65}
          baseColor={"grey"}
          // stickImage={"/assets/rotate.png"}
          move={(e) => {
            // console.log(e);
            setRot(e.direction);
          }}
          stop={(e) => setRot(e.type)}
        ></Joystick>
      </div> */}
        </>
    );
}
