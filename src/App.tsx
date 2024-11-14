// src/App.tsx

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import TaskManager from './components/TaskManager';
import Footer from './components/Footer';
import TopCenter from './components/TopCenter';
import Cards from './components/Cards';
import Languages from './components/Languages';
import SearchNotificationMenu from './components/SearchNotificationMenu';
import CRUD from './pages/CRUD';
import LanguageSwitcher from './components/LanguageSwitcher';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ko from './locales/ko.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ko: { translation: ko }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });




const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsDarkMode((prevMode: any) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <MainLayout>
          <SearchNotificationMenu toggleTheme={toggleTheme} />
          <TopCenter />

          <nav style={{ textAlign: 'center', margin: '1rem 0' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/crud">CRUD</Link>
          </nav>

          <Routes>
            <Route path="/" element={
              <>
                <TaskManager />
                <Cards />
                <LanguageSwitcher />
                <Languages />
               
              </>
            } />
            <Route path="/crud" element={<CRUD />} />
          </Routes>

          <Footer />
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App; i18n;
