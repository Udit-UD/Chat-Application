import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Join.css"

export const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");


  return (
    <div className='join-container'>
        <div className="join-inner-container">
          <h1 className="heading">
            Join Room
          </h1>
          <p className='sub-head'> 
            Plan a battleground with your friends here
          </p>
          <div className="input-box">
            <div>
              <input type="text" className='joinInput' placeholder='Name' onChange={(event)=> setName(event.target.value)} />
            </div>
            <div>
              <input type="text" className='joinInput mt-20' placeholder='Room' onChange={(event)=>{setRoom(event.target.value)}} />
            </div>

            <div className="button-div">
              <Link className='join-link' onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
              <button className='join-btn mt-20' type='submit'>Join Now</button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
