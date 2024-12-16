importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: '__VITE_API_KEY__',
  authDomain: '__VITE_AUTH_DOMAIN__',
  projectId: '__VITE_PROJECT_ID__',
  storageBucket: '__VITE_STORAGE_BUCKET__',
  messagingSenderId: '__VITE_MESSAGING_SENDER_ID__',
  appId: '__VITE_APP_ID__',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
