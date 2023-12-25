import React, { useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


export default function MyChatComponent() {

//  pppp
  const currentTime = new Date().toLocaleString();
  const [messages, setMessages] = useState([
    {
      text:'oiuoiuyi',
      timestamp:currentTime,
    },
    {
      text:'oiuoiuyi',
      timestamp:currentTime,
    },
    {
      text:'oiuoiuyi',
      timestamp:currentTime,
    },
  ]);

  const handleNewUserMessage = (newMessage) => {
    const currentTime = new Date().toLocaleTimeString();
    setMessages([...messages, { text: newMessage, sender: 'user', timestamp: currentTime }]);
  };
  return (
    <div className="chat-container">
     <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chat"
        subtitle="Welcome to the chat!"
      />
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'user' ? 'user' : 'other'}`}>
            <div className="message-content">{message.text}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>
    {/* </div> */}
  </div>
  )
}
