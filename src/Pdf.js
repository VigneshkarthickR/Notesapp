import { Button } from "@material-ui/core";
import React from "react";

export default function Pdf() {
    return (<>
        <object data={require("../src/resume.pdf")} className="pdf" type="application/pdf"
            style={{ height: "900px" }}
        >
        </object>
    </>
    )
}