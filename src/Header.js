import { Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router";



export default function Header() {

    const navigate = useNavigate();
    const navigateProfile = () => {
        navigate('/profile')
    }
    const navigateHome = () => {
        navigate('/home')
    }
    const navigateAbout = () => {
        navigate('/about')
    }
    const navigateProvider = () => {
        navigate('/provider')
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <>
            <div className="row" >

                <div className="col-5">
                    <div className="container" style={{ padding: "0px 20px 0px 200px " }}>
                        <Button onClick={navigateProfile} ><b>Vignesh</b></Button>
                    </div>
                </div>
                <div style={{ display: "flex", textJustify: "start", padding: "0px 20px 0px 50px" }} className="col-7">
                    <Button onClick={navigateHome}>Home</Button>
                    <Button onClick={navigateAbout}>About</Button>
                    <div >
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Works
                            <i class="bi bi-chevron-compact-down" onClick={{ handleClick }} style={{ color: "red" }}></i>
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Button onClick={navigateProvider}>Editor</Button></MenuItem>
                            <MenuItem onClick={handleClose}>Todu List</MenuItem>
                        </Menu>

                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    );
}



