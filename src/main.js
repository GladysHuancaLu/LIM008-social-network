// Este es el punto de entrada de tu aplicacion
import { initRouter } from "./router.js";

const init = () => {
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyAVw2QO-ZXpavk15DQfsGOyzN9dXH5424k",
    authDomain: "usuarios-28a17.firebaseapp.com",
    databaseURL: "https://usuarios-28a17.firebaseio.com",
    projectId: "usuarios-28a17",
    storageBucket: "usuarios-28a17.appspot.com",
    messagingSenderId: "436355716999"
  };
  firebase.initializeApp(config);
  initRouter();
 
}

window.onload = init();