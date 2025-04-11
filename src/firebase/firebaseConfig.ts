// ✅ 1. Firebase 초기화 설정 - /src/firebase/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "dndsolution-c9952.firebaseapp.com",
  projectId: "dndsolution-c9952",
  storageBucket: "dndsolution-c9952.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
