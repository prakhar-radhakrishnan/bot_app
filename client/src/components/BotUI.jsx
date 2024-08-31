import React, { useState } from 'react';
import axios from 'axios';

const BotUI = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChat([...chat, { text: message, from: 'user' }]);
      setMessage('');
      try {
        const response = await axios.post('http://localhost:5000/message', { message });
        setChat([...chat, { text: message, from: 'user' }, { text: response.data.message, from: 'bot' }]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="bot-ui">
      <div className="chat-box">
        {chat.map((msg, index) => (
          <div key={index} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default BotUI;
