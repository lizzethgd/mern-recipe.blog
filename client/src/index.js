import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './context/AuthContext'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <AuthProvider>  
      <App />
    </AuthProvider>
  </I18nextProvider>
  , 
document.getElementById('root'));
