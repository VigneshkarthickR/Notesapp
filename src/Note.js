import React, { useEffect, useRef, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from "react-router-dom"
import { getContext } from "./App";

export default function Notes() {
    console.log(getContext, "GETCONTEXT");

    let contextapivalue = React.useContext(getContext);
    console.log(contextapivalue, "contextapivalue");
    const navigate = useNavigate()
    const [state, setState] = useState({})
    const [Edit, setEdit] = useState("")
    const [Data, setData] = useState([])
    const submit = () => {
        setState();
    }
    console.log(state);



    const Handler = (e) => {
        contextapivalue.state[contextapivalue.currentIndex] = e.blocks[0].text;
        contextapivalue.setState(contextapivalue.state)
        // contextapivalue.setState(e.blocks[0].text);
        console.log(e);

    }
    console.log(contextapivalue.state, "geting values");
    const finalHandler = () => {
        setData([...Data, Edit]);
    }

    const Add = () => {
        navigate("/addNotes")

    }
    return (<>
        <div className="centerDiv">
            <div className="container">
                <CKEditor
                    editor={ClassicEditor}
                    onReady={editor => {
                        editor.focus();
                    }}

                    onChange={(event, editor) => {
                        const data = editor.getData();
                        contextapivalue.state[contextapivalue.currentIndex] = data;
                        contextapivalue.state[0] = data;
                        console.log(contextapivalue);
                        contextapivalue.setState(contextapivalue.state)
                    }}

                />
                <button type="button" align="right" nponClick={Add} onChange={finalHandler} className="btn btn-dark">Submit</button>
                <button type="button" class="btn btn-dark">Dark</button>
            </div>
        </div>
    </>
    )
}
