import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyBVwByziQit2-_tzqvvoD-G_xMBWpoLWeg",
    authDomain: "myownroom-studio.firebaseapp.com",
    projectId: "myownroom-studio",
    storageBucket: "myownroom-studio.firebasestorage.app",
    messagingSenderId: "472475783375",
    appId: "1:472475783375:web:a1c818ac730a9c6186e7ba",
    databaseURL: "https://myownroom-studio-default-rtdb.asia-southeast1.firebaseio.com"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
