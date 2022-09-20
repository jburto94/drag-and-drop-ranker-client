import { useContext } from "react";
import { NotificationContext } from "../../../context/NotificationContext";
import './Notification.scss';

const Notification = () => {
  const { success, notification } = useContext(NotificationContext);

  if (notification === '') {
    return;
  }

  return (
    <div className="Notification">
      <div className={`${ success ? 'success' : 'error' } py-3 px-5`}>
        <p className="mb-0">{notification}</p>
      </div>
    </div>
  );
};

export default Notification;