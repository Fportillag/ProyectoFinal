import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfqMdSeAfG3w8ZmdAevhLiN6iu4yPxxss",
  authDomain: "ecommerce-58eb0.firebaseapp.com",
  projectId: "ecommerce-58eb0",
  storageBucket: "ecommerce-58eb0.appspot.com",
  messagingSenderId: "890593544913",
  appId: "1:890593544913:web:678cba36211875bd1fd3f0",
  measurementId: "G-7KDZKCT228"
};


const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
