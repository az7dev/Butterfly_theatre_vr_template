import React, { useContext } from 'react';
import Controller from './Controller/Controller';
// import Crosshair from "./Crosshair";
import Topbar from './topbar/Topbar';
// import {Footer} from "./Footer";
import './Ui.css';
import { ContextData } from '../../context/Context';

export default function UI() {
    const [movement, setMovement] = useContext(ContextData);
    const { view } = movement;
    return (
        <div className="topui">
            {/* <ScreenRotationIcon className="potrait" /> */}
            <div className="blocker">
                <div className="potrait"></div>
                <div className="message">Use Landscape Mode</div>
                <div className="message">Add to Home screen for better performance</div>
            </div>
            <div>{view !== 'Home' && <Controller />}</div>
            <Topbar />
            {/* <Footer/> */}
        </div>
    );
}
