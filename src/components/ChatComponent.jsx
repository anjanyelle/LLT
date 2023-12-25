import './chat.css';
import React, { useEffect, useState } from 'react';

export default function ChatComponent({chat}) {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');


  // useEffect(()=>{

  //   if(chat){
  //     setMessageInput({
  //       ...messageInput,
  //       messageInput:chat,
  //     })
  //   }
  // },[chat])
  // Function to send a user message
  const sendUserMessage = () => {
    if (messageInput.trim() === '') return;

    // Create a new message object and add it to the messages state
    const newMessage = {
      text: messageInput,
      type: 'message-personal', // Add the necessary class for styling
      timestamp: new Date().toLocaleString(), // Include a timestamp
    };

    setMessages([...messages, newMessage]);
    setMessageInput(''); // Clear the input field

    // You can add logic to send the message to a server or perform other actions here
  };

  // Function to handle user input and send the message on "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendUserMessage();
    }
  };

  // Render the messages
  const renderMessages = () => {
    return messages.map((message, index) => (
      <div key={index} className={`message ${message.type}`}>
        {message.type === 'message-personal' && (
          <div className="avatar">
            <img src="http://askavenue.com/img/17.jpg" alt="User Avatar" />
          </div>
        )}
        <div className="message-content">{message.text}</div>
        <div className="message-timestamp">{message.timestamp}</div>
      </div>
    ));
  };

  return (

    <div  className='gricolom'>
      <div>
          
      {/* <p className="application">Appliction Id: 139964/23-24</p> */}
    {/* <h6 className="blue"> <i class="fa-solid fa-book"></i> M.S. in Mechanical Engineering</h6>
    <p> <i class="fa-sharp fa-solid fa-building-columns"></i> New York Institute of Technology</p> */}
    {/* <div className="intake" style={{marginTop: '3px',}}>
      </div> */}
      </div>
{/* <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}><img src='' alt='avthar' className='chatmages' /></div> */}
    <div className="avenue-messenger">
      {/* Your chat interface structure here */}   
      <div className="chat">
        <div className="messages">
          <div className="messages-content">{renderMessages()}</div>
        </div>

      </div>
    </div><div className="message-box">
          <textarea
            type="text"
            className="message-input"
        
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
          <button type="button" className="message-submit" onClick={sendUserMessage}>
            Send
          </button>
        </div>
    </div>
  );
}
