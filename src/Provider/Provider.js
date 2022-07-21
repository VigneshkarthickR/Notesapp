import React, { createContext, useRef, useState } from "react"
import App from "../App"
import CreateNotes from "../CreateNotes"

import NotesDetails from "../NotesDetails"

export const ProvideContext = createContext({})
export function Provider() {
    const [state, setState] = useState([{ editor: {}, data: "" }])
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(currentIndex);
    const inputRef = useRef()
    var a = {
        state, setState, currentIndex, setCurrentIndex, inputRef
    }
    return <>

        <ProvideContext.Provider value={a}>
            <div className="container">
                < div className="row ">
                    <div className="col-4 bg-container border-primary border-end">
                        <CreateNotes />
                    </div>
                    <div className="col-8">
                        <NotesDetails />
                    </div>
                </div>
            </div>
        </ProvideContext.Provider>

    </>


}
