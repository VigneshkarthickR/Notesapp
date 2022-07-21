import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { getContext } from "./App";

export default function AddNotes() {
    const contextValues = useContext(getContext);
    const RenderHtml = ({ data }) => {
        console.log(data, "data");
        return data.map(html => <><div dangerouslySetInnerHTML={{ __html: html }}></div><hr></hr></>)
    }
    console.log(contextValues.state)
    const navigate = useNavigate()
    const onClickHandler = () => { contextValues.setCurrentIndex(contextValues.currentIndex + 1); navigate("/") }
    return (
        <>
            <div className="centerDiv">
                <div className="container">
                    <RenderHtml data={contextValues.state} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" onClick={onClickHandler} fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />

                    </svg>
                </div>
            </div>
        </>
    )
}