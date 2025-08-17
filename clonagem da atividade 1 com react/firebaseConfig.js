import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9QNO-_w-oz_dmqqlR2CCIMn8yfa4K9P8",
  authDomain: "auntentica-e2cdd.firebaseapp.com",
  projectId: "auntentica-e2cdd",
  storageBucket: "auntentica-e2cdd.firebasestorage.app",
  messagingSenderId: "740967472678",
  appId: "1:740967472678:web:6d4f63a652591e937e10e7"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar a Autenticação do Firebase e criar uma referência para gerenciarmos a autenticação (login, logout, estado do usuário)
export const auth = getAuth(app);
