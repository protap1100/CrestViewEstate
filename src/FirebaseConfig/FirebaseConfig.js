// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log("inside firebase",import.meta.env.VITE_PASS)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATLd50W6d0QIcV4-HL03suHfowwkrv3ZE",
  authDomain: "real-state-project-3bf4a.firebaseapp.com",
  projectId: "real-state-project-3bf4a",
  storageBucket: "real-state-project-3bf4a.appspot.com",
  messagingSenderId: "1030899851549",
  appId: "1:1030899851549:web:3d719d9edd913bf6bc81f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export default app;
