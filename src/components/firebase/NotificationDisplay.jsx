import { useState, useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
import { messaging } from '../../firebase/firebase';
const NotificationDisplay = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      setNotification({
        title: payload.notification?.title,
        body: payload.notification?.body,
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {notification && (
        <div>
          <h4>{notification.title}</h4>
          <p>{notification.body}</p>
        </div>
      )}
    </div>
  );
};

export default NotificationDisplay;
