import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCL5X0HqLJNz3JA-SEpmHd2mbtJhYvEfwQ",
    authDomain: "digidoctor-b6d67.firebaseapp.com",
    projectId: "digidoctor-b6d67",
    storageBucket: "digidoctor-b6d67.appspot.com",
    messagingSenderId: "724169164140",
    appId: "1:724169164140:web:a8d348142f258048d2df49",
    measurementId: "G-9T8LQHQL0F"// Optional, remove if not used
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };