import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';


const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('ko')}>한국어</button>
    </div>
  );
};

export default LanguageSwitcher;
