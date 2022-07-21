import { Button, Menu, MenuItem } from "@material-ui/core"
import React from "react"

import { useNavigate } from "react-router"
import './App.css'

const logo = new URL("./images/logo.jpeg", import.meta.url);
export default function About() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const navigateContact = () => {
        navigate('/home')
    }
    const navigateProvider = () => {
        navigate('/provider')
    }

    return (
        <>
            <nav class="navbar d-flex justify-content-center" style={{ backgroundColor: "rgb(0, 166, 255) ", height: "200px" }}>
                <h1 style={{ color: "white" }}>About My Profile</h1>
            </nav>
            <div className="centerDiv">
                <div className="card" >
                    <h5 style={{ color: "rgb(0, 166, 255)" }}>About</h5>
                    <p className="card-text" style={{ float: "left" }}>Solid knowledge and experience in programming applications.Proficient in JavaScript, HTML, CSS.Proficient in My SQL.</p>
                    <h5 style={{ color: "rgb(0, 166, 255)" }}>Projects</h5>
                    <br></br>
                    <h5 style={{ position: "left" }}>Editor</h5>


                    <p className="card-text">The “WYSIWYG” part means that when you use CKEditor 4, you can style the text and add rich media contents to your document in real time by using the editor UI (toolbar buttons, dialog windows), and the result will be seen immediately. If you click the Bold button, the text will become bold; when you add an image, it will appear straightaway.</p>
                    <div className="col" style={{ position: "center" }}>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            style={{ backgroundColor: "rgb(0, 166, 255)", margin: "20px" }}
                        >
                            Projects
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
                        <Button variant="text" style={{ backgroundColor: "rgb(0, 166, 255)" }} onClick={navigateContact}>For Contact</Button>
                    </div>
                </div>
            </div>
        </>
    )
}