import React from 'react'
import "./Message.css";

export const Message = ({message: {text, user}, name}) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  
  if(user === trimmedName){
    isSentByCurrentUser = true;
  }
  
  return (
    <>
    {
        user === "admin" ? (
            <div className='messageContainer justifyCenter'>
                <div className="messageBox admin-messages">
                    <p className='messageText'>
                        {text}
                    </p>
                </div>
            </div>
        ) : isSentByCurrentUser ? (
            <div className='messageContainer justifyEnd'>
                <p className='sentText'>
                    {trimmedName}
                </p>
                <div className="messageBox">
                    <p className='messageText'>
                        {text}
                    </p>
                </div>
            </div>
        ) : (
            <div className='messageContainer justifyStart'>
                <div className="messageBox sentBox">
                    <p className='messageText'>
                        {text}
                    </p>
                </div>
                <p className='sentText'>
                    {user}
                </p>
            </div>
        )
    }
    </>
);

}
