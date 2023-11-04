import React from 'react'

const User = ({ user, image }) => {
    console.log(image)
    return (
        <>
            <div className='user'>
                <img src={image}></img>
                <p className='message'></p>
                <div className="circle_green">
                    <span>{user["nmb_mess"]}</span>
                </div>
            </div>
            <div className='father_separator'>
                <div className='separator'>
                </div>
            </div>
        </>
    )
}

export default User