import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Sidebarchat.css'

const Sidebarchat = () => {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        }, [])
    return (
        <div className= 'Sidebarchat'>
            <Avatar src={'https://avatars.dicebear.com/api/human/b$%7Bseed%7D.svg'} />
             <div className = "Sidebarchat__info">
                 <h2> Room name </h2>
                 <p> Last message...</p>
             </div>
            
        </div>
    )
}

export default Sidebarchat
