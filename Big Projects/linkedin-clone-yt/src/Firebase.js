import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCzTJrBB-g-2xcw77FbBQcmkze_NqSUt6w",
    authDomain: "linkedin-clone-yt-7b8c1.firebaseapp.com",
    projectId: "linkedin-clone-yt-7b8c1",
    storageBucket: "linkedin-clone-yt-7b8c1.appspot.com",
    messagingSenderId: "661840181535",
    appId: "1:661840181535:web:03b2733356264c7c43182a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth};