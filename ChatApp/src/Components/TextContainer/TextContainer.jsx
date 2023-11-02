import React, { useEffect, useState } from 'react';
import './TextContainer.css';
import {RiRadioButtonLine} from "react-icons/ri";

const TextContainer = ({ users }) => {
  const [usersChanged, setUsersChanged] = useState(false);

  useEffect(()=>{
    setUsersChanged(true);
  }, [users]);

  return(
  <div className="textContainer">
    <div>
      <h1>BattleGrounds <span role="img" aria-label="emoji">💬</span></h1>
      <h3>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h3>
      <h3>Plan for an ultimate battleground! <span role="img" aria-label="emoji">⬅️</span></h3>
    </div>
    {
      users
        ? (
          <div className='activeUsers'>
            <h2>People currently chatting:</h2>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <RiRadioButtonLine style={{marginLeft:"10px"}} color='green'/>
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
)};

export default TextContainer;