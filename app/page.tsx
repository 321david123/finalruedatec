import Image from "next/image";
import Component from "./component";
import Chatbot from "./chat/page"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCf2isIZm03rkEa_2W9xk-GzgmqyNrJl-o",
  authDomain: "ruedatec-9a808.firebaseapp.com",
  projectId: "ruedatec-9a808",
  storageBucket: "ruedatec-9a808.appspot.com",
  messagingSenderId: "193131640842",
  appId: "1:193131640842:web:b1d8be9e4c794f8e3207f3",
  measurementId: "G-E9P71GREY7"
};
const app = initializeApp(firebaseConfig);
export default function Home() {
  return (
    <><Component></Component></>
  );
}
