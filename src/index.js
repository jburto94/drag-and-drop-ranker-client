import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ListProvider } from './context/ListContext';
import { NotificationProvider } from './context/NotificationContext';
import { UserProvider } from './context/UserContext';
import { UserListsProvider } from './context/UserListsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <UserListsProvider>
        <ListProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </ListProvider>
      </UserListsProvider>
    </UserProvider>
  </BrowserRouter>
);