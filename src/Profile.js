import { Button } from "@material-ui/core"
import React from "react";
import "./App.css"

export default function Profile() {
    const profilePicture = new URL("./images/notesProfile.png", import.meta.url);
    const logo = new URL("./images/logo.jpeg", import.meta.url);

    return (
        <>

            <div className="row">
                <div className="col-5  border-primary border-end">
                    <div className="container" style={{ padding: "0px 20px 0px 200px " }}>
                        <h1><b> Hi! I Am <Button variant="contained" style={{ backgroundColor: "blue", outlineColor: "white" }}>
                            <b>UI/UX</b></Button> </b></h1>
                        <h1><b>Vignesh Karthick</b></h1>
                        <p> Designing user interfaces for over 7 years as product designer</p>
                        <Button variant="contained" style={{ backgroundColor: "orange", margin: "10px" }}
                        > Hire Me</Button>
                        <Button variant="text">Projects<i class="bi bi-arrow-up-right"></i></Button>
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>+84</h2>
                                    <p> Clients on work worldwide</p>
                                    <br></br>
                                    <h2>572</h2>
                                    <p>Project Done</p>
                                </div>
                                <div className="col-6">
                                    <img src={logo} style={{ height: "50%", width: "50%", padding: "0px 10px 20px 20px" }}></img>
                                    <h2>Contact</h2>
                                    <p>rvkarthick97@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-dark text-center text-white" style={{
                        position: "absolute",
                        bottom: "0px",
                        height: "200px",
                        width: "700px"
                    }}>
                        < div className="row ">
                            <div className="col-6">
                                <tr>
                                    <h5 >Project </h5>
                                    <h5 > statistics 2022</h5>
                                    <br></br>
                                    <Button variant="text" style={{ backgroundColor: "yellow" }}>Know more</Button>
                                </tr>
                            </div>
                            <div className="col-6">
                                <tr style={{ float: "right" }}>
                                    <p style={{ float: "right" }}>  Website Design 50</p>
                                    <br></br>
                                    <p style={{ float: "right" }} > Mobile App Design 50</p>
                                    <br></br>
                                    <p style={{ float: "right" }} > Brand Identity 50</p>
                                    <br></br>
                                </tr>
                            </div>
                        </div>
                    </footer>

                </div>
                <div className="col-7" >

                    <div style={{
                        backgroundImage: `url(${profilePicture})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover", display: "flex", flexDirection: "column", justifyContent: "end", textAlign: "center",
                        height: "800px",


                    }}>

                        <div className="col-12">
                            <input type="text" onFocus={{ border: "0px solid  transparent " }} className="search" style={{ border: "0px solid  transparent ", padding: "10px 10px 0px 0px", width: "300px" }} placeholder="subcribe!"></input><i class="bi bi-arrow-right-circle-fill" style={{ fontSize: "25px", backgroundColor: "white" }}></i>
                        </div>

                    </div>

                </div>
            </div >

        </>
    )

} 