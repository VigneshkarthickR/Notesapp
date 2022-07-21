import React from "react";


export default function NotFound() {
    const noPagefound = new URL("./images/NoPageFound.jpeg", import.meta.url);
    return (<>
        <div style={{ backgroundImage: noPagefound }}>
            <img src="noPagefound" />
        </div>
    </>)
}