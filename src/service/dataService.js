import { collection, getDocs, getDoc, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

async function getData(name) {
  const query = collection(db, name);
  const data = await getDocs(query);
  return data.docs;
}

// getData(db);

async function setData(name, data) {
  console.log("sasas");
  const add = addDoc(collection(db, name), data);
}

async function updateData(name, id, data) {
  const update = doc(db, name, id);
  await updateDoc(update, data);
}

async function deleteData(name, id) {
  const deleteItem = doc(db, name, id);
  await deleteDoc(deleteItem);
}

export { getData, setData, updateData, deleteData };

export default db;
