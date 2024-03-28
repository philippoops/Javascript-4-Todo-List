import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from './firebase';

/**
 * load all the data
 * @returns
 * Shows all the data in the firestore
 */
export async function load() {
  try {
    const querySnapshot = await getDocs(collection(db, 'todos'));

    return querySnapshotHandle(querySnapshot);
  } catch (error) {
    throw new Error('Failed to load the database');
  }
}

/**
 * load all the data that specify on the done
 * @returns
 * Shows all the data that done == true
 */
export async function loadTodo() {
  try {
    const q = query(collection(db, 'todos'), where('done', '==', true));
    const querySnapshot = await getDocs(q);
    return querySnapshotHandle(querySnapshot);
  } catch (error) {
    throw new Error('Failed to query the database');
  }
}

/**
 * Adding data in the database
 * @returns this function use to add data in the firestore
 */
export async function addData(data) {
  try {
    const docRef = await addDoc(collection(db, 'todos'), data);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    return null;
  }
}

/**
 * Update data in the database
 * @returns this function update the status
 */
export async function updateData(id, data) {
  const docRef = doc(db, 'todos', id);

  console.log(data);
  await updateDoc(docRef, data);
}

/**
 * delete the data
 * @returns
 * delete data in per id
 */

export async function deleteTodo(id) {
  // Remove the 'capital' field from the document
  await deleteDoc(doc(db, 'todos', id));
}

export async function deleteAll(data) {
  const q = query(collection(db, 'todos'));
  const todo = await getDocs(q);
  for (var todoData of todo.docs) {
    await deleteDoc(doc(db, 'todos', todoData.id));
  }
}
/**
 *
 * @param {*} querySnapshot
 * @returns This handle all the queries in the querySnaphot
 */
function querySnapshotHandle(querySnapshot) {
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return data;
}
