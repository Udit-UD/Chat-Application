import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Join } from './Components/Join/Join';
import { Chat } from './Components/Chat/Chat';

export default function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Join/>} />
      <Route path='/chat' element={<Chat/>} />
    </Routes>
  );
}
