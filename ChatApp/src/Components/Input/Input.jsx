import React from 'react';
import "./Input.css"; 
import {BsFillSendFill} from "react-icons/bs";

export const Input = ({message, setMessage, sendMessage}) => {
  return (
    <form className='form'>
        <input type="text" className='input' value={message} placeholder="Type a message..." onChange={(event) => setMessage(event.target.value)} onKeyDown={event => event.key==='Enter' ? sendMessage(event) : null} />
        <button className="sendButton" onClick={(event)=> sendMessage(event)}><BsFillSendFill /></button>
    </form>
  )
}
