import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAj4u7i2qP_3B9i1t87-Lqa1fHJIPzLYE",
  authDomain: "proyectomultimedia1.firebaseapp.com",
  databaseURL: "https://proyectomultimedia1-default-rtdb.firebaseio.com",
  projectId: "proyectomultimedia1",
  storageBucket: "proyectomultimedia1.appspot.com",
  messagingSenderId: "899080948860",
  appId: "1:899080948860:web:43537341f56322d3a90df9",
  measurementId: "G-8EVR2D3WJG",
};

const app = initializeApp(firebaseConfig);

// Obtener la instancia de autenticación
const database = getDatabase(app);

export { database };
