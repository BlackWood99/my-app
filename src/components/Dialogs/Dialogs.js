import React from 'react'
import dialog from './Dialogs.module.css'
import DialogItem from './DialogItem'

const Dialogs = (props) => {
    
    let length = props.dialPage.messages.length
    let lastMess = props.dialPage.messages[length - 1].mes

    let dialArr = props.dialPage.dialogs.map(dial => {
        return <DialogItem key={dial.id} name={dial.name} id={dial.id} lastMes={lastMess} />
    });

    return (
    < div className={dialog.block} >

        {dialArr}

    </div >
    )


}

export default Dialogs