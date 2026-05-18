importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// Gunakan konfigurasi web dari firebase_options.dart Anda
firebase.initializeApp({
  apiKey: "AIzaSyAq26n_1HPwuAxra1loVHK_0BX_GyzPHYU",
  authDomain: "notes-2fb86.firebaseapp.com",
  projectId: "notes-2fb86",
  storageBucket: "notes-2fb86.firebasestorage.app",
  messagingSenderId: "878941179468",
  appId: "1:878941179468:web:53063a8ffa0c9300266ee9",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.png",
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
