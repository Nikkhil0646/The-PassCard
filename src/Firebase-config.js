import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDqG2FPNBOkGsFCTLXXPXJP86-KZc6Nm34",
    authDomain: "thepasscard-3f5d3.firebaseapp.com",
    projectId: "thepasscard-3f5d3",
    storageBucket: "thepasscard-3f5d3.appspot.com",
    messagingSenderId: "764423894498",
    appId: "1:764423894498:web:0803783b4e03f2870db5bb"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()