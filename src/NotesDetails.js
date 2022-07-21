import React, { useContext, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import App from "./App";
import { ProvideContext } from "./Provider/Provider";


export default function NotesDetails() {
    const { inputRef, setState, state, currentIndex } = useContext(ProvideContext)


    return (
        <>

            <div className="container">
                <CKEditor
                    editor={ClassicEditor}
                    data={state[currentIndex].data}
                    id={currentIndex}

                    onReady={editor => {
                        editor.focus();
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        state[currentIndex] = { ...state[currentIndex], data }

                        console.log({ event, editor, data });
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                </div>

            </div>
        </>
    )
}