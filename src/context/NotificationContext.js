import { createContext, useState } from "react";

export const NotificationContext = createContext({
  notification: '',
  setNotification: () => {},
  success: true,
  setSuccess: () => {}
})

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState('');
  const [success, setSuccess] = useState(true);
  
  const value = {
    notification,
    setNotification,
    success,
    setSuccess
  }

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
};