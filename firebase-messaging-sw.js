importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAqV1kUhJM2Y8UxtBX4uUc_QevWLdwKC_g",
  authDomain: "alchaiba.firebaseapp.com",
  projectId: "alchaiba",
  messagingSenderId: "586209422699",
  appId: "1:586209422699:web:cdcb2f2ffc48902e30302e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
