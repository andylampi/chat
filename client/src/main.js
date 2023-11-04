import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import User from './Components/User.js';



const Main = ({ setUser, users }) => {

    const socket = io('http://127.0.0.1:5000', {
        query: { id_user: 25 }, // Specifica l'ID dell'utente 
    });
    socket.on('new_message', (message) => {
        let mess = JSON.parse(message)
        console.log(mess)
        if (users[mess.user]) {
            setUser(() => (
                {
                    ...users,
                    [mess.user]: { nmb_mess: users[mess.user]["nmb_mess"] + 1 }
                }
            ))
        }
        else {
            setUser(() => (
                {
                    ...users,
                    [mess.user]: { nmb_mess: 1, image: mess.image }
                }
            ))
        }
    });

    return (
        <div className="main">
            <div className='users'>
                {users && Object.keys(users).map((user) => {
                    return <User user={users[user]} key={user} image={users[user]["image"]} />
                })}
            </div>
            <div className="chat">

            </div>
        </div>
    )
}

export default Main