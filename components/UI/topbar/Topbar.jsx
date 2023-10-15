import React from 'react';
import './Topbar.scss';
import { Button, Stack, FormControl, Select, MenuItem } from '@mui/material';
import { ContextData } from '../../../context/Context';
import { Cameraswitch } from '@mui/icons-material';

function Topbar() {
    const [movement, setMovement] = React.useContext(ContextData);
    const { view, cam } = movement;

    // const organisation = [
    //   { label: "FrontYard" },
    //   { Value: "Home", label: "Home" },
    //   { label: "Hall" },
    //   { label: "Bedroom" },
    //   { label: "Terrace" },
    // ];
    // const movementUpdate = (e, f) => {
    //   // console.log(e, f);
    //   setMovement({
    //     forward: false,
    //     backward: false,
    //     left: false,
    //     right: false,
    //     jump: false,
    //     yrotate: false,
    //     yrotateminus: false,
    //     view: e,
    //     cam: f,
    //     room: "Home",
    //   });
    // };

    const onClickButton = () => {
        // // console.log(e);
        // if (e == "Home") {
        //   movementUpdate("Home", true);
        // } else if (e == "Auditorium") {
        //   movementUpdate("Auditorium", false);
        let e = 'Home';
        if (view === 'Home') {
            e = 'Auditorium';
        } else {
            e = 'Home';
        }
        setMovement((m) => ({ ...m, view: e, cam: !cam }));
        // }
    };

    const camView = (e) => {
        // // console.log(e.target.value);
        setMovement((m) => ({ ...m, view: 'Auditorium', room: e }));
    };

    return (
        <>
            <div className="container">
                {/* <Stack direction="row" justifyContent={"space-between"}> */}
                <Stack direction="row" justifyContent={'space-between'}>
                    <Button
                        size="medium"
                        variant="outlined"
                        sx={{
                            borderRadius: '20px',
                            bgcolor: 'white',
                            margin: '15px'
                        }}
                        onClick={() => onClickButton()}
                        startIcon={<Cameraswitch />}
                    />
                    {/* {view === "Home" ? "First Person View" : "Bird Eye View"} */}
                    {/* </Button> */}

                    {/* <FormControl
            variant="outlined"
            style={{
              marginTop: 15,
              marginRight: 15,
              width: 125,
            }}
          >
            <Select
              style={{
                background: "white",
                borderRadius: "20px",
                color: "#1976D2",
                borderColor: "#1976D2",
              }}
              size="small"
              defaultValue={"Home"}
              // label="Months"
              // value={selected}
              onChange={(e) => camView(e.target.value)}
            >
              <MenuItem value={"Home"}>Home</MenuItem>
              <MenuItem value={"FrontYard"}>FrontYard</MenuItem>
              <MenuItem value={"Hall"}>Hall</MenuItem>
              <MenuItem value={"Bedroom"}>Bedroom</MenuItem>
              <MenuItem value={"Terrace"}>Terrace</MenuItem>
            </Select>
          </FormControl> */}
                </Stack>
                {/* <button className="btn" onClick={() => onClick("Home")}>
          Bird View
        </button>
        <button className="btn" onClick={() => onClick("Auditorium")}>
          First Person
        </button> */}
                {/* <div className="auto"> */}
            </div>
            {/* </div> */}

            {/* <img className="brandLogo" src={"/assets/naturals.png"} alt="" /> */}
            {/* </div> */}
            {/* <div className="auto"></div> */}

            {view !== 'Home' && (
                <>
                    {/* <img
            className="instruct1"
            src={"/assets/control2.png"}
            alt=""
            srcSet="" 
           /> */}
                    <img className="instruct3" src={'/assets/control4.png'} alt="" srcSet="" />
                </>
            )}

            <img className="instruct2" src={'/assets/mouse.png'} alt="" srcSet="" />
        </>
    );
}

export default Topbar;
