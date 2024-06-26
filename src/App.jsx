import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config";

function App() {
  const [tvarlar, setTvarlar] = useState([]);
  const masalan = collection(db, "tavarlar");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(masalan);
      setTvarlar(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  const updateProduct = async (id, newName) => {
    const productDoc = doc(db, "tavarlar", id);
    await updateDoc(productDoc, { nomi: newName });
  };

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "tavarlar", id);
    await deleteDoc(productDoc);
  };

  return (
    <>
      <div></div>
    </>
  )
}

export default App
