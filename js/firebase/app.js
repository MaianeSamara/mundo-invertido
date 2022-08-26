
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDlFXS8qPdQ5c_9LYjnutYrfwWJTpg_Kew",
    authDomain: "mundo-invertido-st.firebaseapp.com",
    projectId: "mundo-invertido-st",
    storageBucket: "mundo-invertido-st.appspot.com",
    messagingSenderId: "144557299591",
    appId: "1:144557299591:web:976ed8bc535e868afca522"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  export default app