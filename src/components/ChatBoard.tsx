import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ChatBoard.css';

const ChatBoard: React.FC = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    { text: t('messages.greeting'), sender: 'bot', time: t('messages.time1') },
    { text: t('messages.userMessage1'), sender: 'user', time: t('messages.time2') },
    { text: t('messages.botMessage1'), sender: 'bot', time: t('messages.time3') },
    { text: t('messages.userMessage2'), sender: 'user', time: t('messages.time4') },
    { text: t('messages.botMessage2'), sender: 'bot', time: t('messages.time5') }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { text: newMessage, sender: 'user', time }]);
    setNewMessage('');
    setTyping(true);

    setTimeout(() => {
      setMessages([
        ...messages,
        { text: newMessage, sender: 'user', time },
        { text: t('messages.botResponse'), sender: 'bot', time }
      ]);
      setTyping(false);
    }, 1500);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    const messagesEl = document.getElementById('messages');
    if (messagesEl) {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="messages" id="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="avatar">{message.sender === 'bot' ? '🤖' : '👤'}</div>
            <div className="text">{message.text}</div>
            <div className="time">{message.time}</div>
          </div>
        ))}
      </div>
      {typing && <div className="typing" id="typingIndicator">{t('messages.typing')}</div>}
      <div className="input-bar">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('messages.placeholder')}
        />
        <button onClick={handleSendMessage}>{t('messages.send')}</button>
      </div>
    </div>
  );
};

export default ChatBoard;
