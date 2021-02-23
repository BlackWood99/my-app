import React from 'react'
import c from './Chat.module.css'
import Message from './Message/Message'
import m from './Message/Message.module.css'


const Chat = (props) => {

    let refTextareaMess = React.createRef()

    let onSendNewMessage = () => {
        props.sendNewMessage() 
    }

    let onChangeText = () => {
        let text = refTextareaMess.current.value
        props.updateTextBody(text) 
    } 


    let messages = props.messages.map(p => {
        return <Message key={p.id + 10} id={p.id} mess={p.mes}/>
    })

    return (

        <div className={c.block}>

            <div className={c.companion}>
                <h5>{ props.dialogs.find(d => d.id === 1).name }</h5>
                <div className={c.status}>online</div>
            </div>

            <div className={c.messagesBlock}>

                {messages}

                {/* TEST */}

                
                    <div className={m.item}>

                        <div className={m.avatar}>
                            <img src="https://fb.ru/misc/i/gallery/38782/1639192.jpg" alt="ava" />
                        </div>
                        <div className={m.messBlock}>
                            <h4>Bill Gates</h4>
                            <p>Some text about world and sadnest</p>
                        </div>

                    </div>


                {/* TEST */}


            </div>

            <div className={c.sendMessBlock}>
                <input ref={refTextareaMess} 
                    value={props.newMessageText} onChange={onChangeText}
                    type="textarea" placeholder="Send message" className={c.textArea} 
                />

                <input type="submit" value="Send" 
                    className={c.submit} onClick={ onSendNewMessage }
                />
            </div>

        </div>

    )
}

export default Chat