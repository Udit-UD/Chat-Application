import React, {useState, useEffect} from 'react';
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import { Inforbar } from '../Infobar/Inforbar';
import { Input } from '../Input/Input';
import { Messages } from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;
const ENDPOINT = 'localhost:5000';

export const Chat = ({}) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");


  useEffect(()=>{
    const {name, room} = queryString.parse(window.location.search);
    setName(name);
    setRoom(room);
    
    socket = io(ENDPOINT);
    socket.emit("join", { name, room}, () => {
      
    });

    return () => {
      socket.disconnect();
      socket.off();
    }
  }, [ENDPOINT, window.location.search])

  useEffect(()=> {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
    socket.on('roomData', ({users}) => {
      setUsers(users);
    })
  }, [messages, users]); 

  const sendMessage = (event) => {
    event.preventDefault();
    if(message){
      socket.emit('sendMessage', message, ()=>setMessage(''));
    }
  }


  return (
    <div className='chat-container'>
      <div className="chat-inner-container">
        <Inforbar room = {room}/>
        <Messages messages = {messages} name = {name}/>
        <Input message = {message} setMessage = {setMessage} sendMessage = {sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  )
}
