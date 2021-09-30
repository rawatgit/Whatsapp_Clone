import { Avatar, IconButton} from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic, Message } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Chat.css'
import axios from './axios'

const Chat = ({ messages }) => {
    const [seed, setSeed] = useState("")
    const[input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            messages: input,
            name: "thewebdev",
            timestamp: new Date().toUTCString(),
            received: true
        })
        setInput("")
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        }, [])
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={'https://avatars.dicebear.com/api/human/b${seed}.svg'} />

                <div className="chat__headerInfo">
                    <h2> Room name </h2>
                    <p> Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div> </div>
            <div className="chat__body">
            {messages.map(message => (
                <p className={`chat__message ${message.received && 'chat__receiver'}`}>
                <span className="chat_name">{messages.name}</span>
                {message.message}
                <span className="chat_timestamp">
                    {message.timestamp}
                </span>
                </p>

            ))}
        </div>
        <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit"> Send a message</button>
                </form>
                <Mic />

            </div>
        </div>        
    )
}
export default Chat
