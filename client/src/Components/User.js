import React from 'react'

const User = ({ user, image }) => {
    console.log(user)
    return (
        <>
            <div className='user'>
                <img src={image ?  image : "https://movieplayer.net-cdn.it/t/images/2009/09/18/un-ritratto-di-james-franco-131031_jpg_400x0_crop_q85.jp"} alt=""></img>
                <div className='container_name_nmb_msg'>
                    <div className='container_name_msg'>
                <p className='name'>{user["name"]}</p>
                <p className='MSG'>{user["message"]}</p>
                </div>
                { user.hasOwnProperty("nmb_mess") ?
                <div className="circle_green">
                     <span>{user["nmb_mess"]}</span> 
                </div>
                 : ""}
                </div>
            </div>
            { user.hasOwnProperty("nmb_mess") ?
            <div className='container_separator'>
                <div className='separator'>
                </div>
            </div> : ""}
        </>
    )
}

export default User