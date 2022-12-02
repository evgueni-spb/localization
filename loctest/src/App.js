import logo from './logo.svg';
import './App.css';
import React, {Suspense} from 'react';
import {useTranslation} from 'react-i18next'


function MyComponent() {
  const { t, i18n } = useTranslation();

  return <h1>{t('msg.welcome')}</h1>
}

function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}

export default App;
