import React from 'react'
import c from './Chat.module.css'
import Message from './Message/Message'
import m from './Message/Message.module.css'
import { Field, Form } from 'react-final-form'


const Chat = (props) => {

    let onSendNewMessage = (mess) => {
        props.sendNewMessage(mess) 
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


            <Form
                onSubmit={values => onSendNewMessage(values.message)}
                validate={values => {
                    const errors = {}
                    if (!values.message) {
                    errors.message = 'Required'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={c.sendMessBlock}>
                            <Field name="message">
                                {({ input, meta }) => (
                                    <input {...input} type="textarea" placeholder="Send message" className={c.textArea} />
                                )}
                            </Field>
                            
                            <button type="submit" disabled={submitting} className={c.submit}> 
                                Send
                            </button>
                        </div>
                    </form>
                )}
            />

        </div>

    )
}

export default Chat