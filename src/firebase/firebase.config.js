// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgOn-AB0CWk_4k8vnjPN4hVLILeUc7Zls",
  authDomain: "dragon-news-3ed04.firebaseapp.com",
  projectId: "dragon-news-3ed04",
  storageBucket: "dragon-news-3ed04.appspot.com",
  messagingSenderId: "1096968220228",
  appId: "1:1096968220228:web:95f6effab8efe0f8961611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;