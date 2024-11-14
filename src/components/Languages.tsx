// Languages.tsx
import React, { useState } from 'react';
import './Languages.css';

const Languages: React.FC = () => {
  const [language, setLanguage] = useState<string>('English');

  const getMessage = () => {
    switch (language) {
      case 'French':
        return 'Bienvenue à bord';
      case 'Korean':
        return '환영합니다';
      default:
        return 'Welcome onboard';
    }
  };

  return (
    <div className="languages">
      <h1>{getMessage()}</h1>
      <div className="button-group">
        <button onClick={() => setLanguage('English')}>English</button>
        <button onClick={() => setLanguage('French')}>French</button>
        <button onClick={() => setLanguage('Korean')}>Korean</button>
      </div>
    </div>
  );
};

export default Languages;
