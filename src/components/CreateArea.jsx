import React, { useState } from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

function CreateArea(props) {
    
    const [note, setNote] = useState({
        title: "", 
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function sumbitNote(event){
        event.preventDefault()
        props.onAdd(note)
        setNote({
            title: "", 
            content: ""
        })

    }

    return (
        <div>
            <form className="create-note">
                <input 
                    name="title" 
                    onChange={handleChange} 
                    value={note.title} 
                    placeholder="Title" 
                />
                <textarea 
                    name="content" 
                    onChange={handleChange}
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows="3" 
                />
                <Zoom in={true}>
                    <Fab onClick={sumbitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea