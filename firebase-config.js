// ============================================================
// CONFIGURACIÓN DE FIREBASE
// ============================================================
// Reemplaza los valores de abajo con los de TU proyecto de Firebase.
// Los encuentras en: Firebase Console > (ícono de engrane) Configuración
// del proyecto > pestaña "General" > sección "Tus apps" > SDK de Firebase.
//
// Estas claves NO son secretas (es normal y seguro que estén visibles
// en el frontend); lo que realmente protege tus datos son las
// "Reglas de seguridad" de Firestore (ver archivo firestore.rules).
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCnq9IOw6_T3tDVFqznqqSz5m-gwHlqcas",
  authDomain: "prueba-2274f.firebaseapp.com",
  projectId: "prueba-2274f",
  storageBucket: "prueba-2274f.firebasestorage.app",
  messagingSenderId: "796202786984",
  appId: "1:796202786984:web:7357bd3840c7e89d71229d",
  measurementId: "G-6Z8REPNS3K"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();