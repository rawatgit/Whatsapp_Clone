import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import './Sidebar.css'
import Sidebarchat from './Sidebarchat'

const Sidebar = () => {
    return (
        <div className ="Sidebar">
            <div className="Sidebar__Header">
              <Avatar  />
                <div className="Sidebar__HeaderRight">
                      <IconButton>
                          <DonutLargeIcon />
                        </IconButton>
                         <IconButton>
                            <ChatIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                </div>  
            </div>
            <div className="Sidebar__Search">
                <div className="Sidebar__SearchContainer">
                    <SearchOutlined />
                     <input type ="text" placeholder ="Search or start new chat"/>
                </div>
            </div>
            <div className="Sidebar__Chats">
                <Sidebarchat />

            </div>
        </div>
    )
}

export default Sidebar

