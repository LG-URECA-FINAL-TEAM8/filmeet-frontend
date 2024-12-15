import { useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
import { messaging } from '../../firebase/firebase';

const PushNotification = () => {
  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      if (Notification.permission === 'granted') {
        new Notification(payload.notification?.title, {
          body: payload.notification?.body,
          icon: payload.notification?.icon || '/default-icon.png',
        });
      }
    });

    return () => unsubscribe();
  }, []);
};

export default PushNotification;
