import { Avatar, IconButton} from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Chat.css'

const Chat = () => {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        }, [])
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={'https://avatars.dicebear.com/api/human/b${seed}.svg'} />

            <div className = "chat__headerInfo">
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
                <p className="chat__message">
                    <span className="chat_name">Varun</span> 
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString}
                    </span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat_name">TWD</span> 
                    This is a message back
                    <span className="chat_timestamp">
                        {new Date().toUTCString}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat_name">Varun</span> 
                    This is a message again
                    <span className="chat_timestamp">
                        {new Date().toUTCString}
                    </span>
                </p>


            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" placeholder ="Type a message" />
                    <button type="submit"> Send </button>
                </form>
                <Mic />

            </div>
        </div>
        
    )
}

export default Chat
