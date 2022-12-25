import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  autoDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORASGE_BACKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const existDocument = async (collection: string, document: string) => {
  const docRef = doc(db, collection, document);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};
