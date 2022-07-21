
import { Editor } from "draft-js";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import App from "./App";
import NotesDetails from "./NotesDetails";
import { ProvideContext } from "./Provider/Provider";
import "./App.css"




export default function CreateNotes() {
    const { state, currentIndex, setCurrentIndex, setState } = useContext(ProvideContext)
    console.log(state)

    const notes = () => {
        return (<>
            setCurrentIndex(index)
        </>)

    }

    const handleAddNotes = () => {
        if (state[currentIndex].data !== "") {

            let index = state.length;
            setCurrentIndex(index)
            state[index] = { editor: {}, data: "" }
            setState(state)

        }
    }


    const RenderHtml = ({ data }) => {
        return data.filter(html => html.data).map((html, index) => <> <div style={currentIndex === index ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black', padding: "20px 0px 0px 0px" }}><div onClick={() => setCurrentIndex(index)} style={{ overflow: "hidden", width: "300px", padding: "10px 0px 5px 0px" }} dangerouslySetInnerHTML={{ __html: html.data }}></div></div></>)
    }


    return (<>
        <div className="d-flex justify-content-start">
            <i className="bi bi-search" style={{ padding: "10px 10px 0px 0px" }} ></i>
            <input type="text" onFocus={{ border: "0px solid  transparent " }} className="search" style={{ border: "0px solid  transparent ", padding: "10px 10px 0px 0px" }} placeholder="Search Notes" ></input>
        </div>
        <hr style={{ margin: "0px 0px", padding: "0px 0px 10px 0px" }}></hr>

        <RenderHtml data={state} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleAddNotes()} width="60" height="60" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16" >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
        </div>

    </>
    )
}