import { GiBroom } from 'react-icons/gi';
import TodoItems from './TodoItems';

import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../Reducer/UserReducer';
import { useEffect, useState } from 'react';
import {
  deleteAll,
  deleteTodo,
  updateData,
} from '../Firebase/sampleFirebaseData';
import LoadingRing from '../Loading/Loading';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import Button from '../Button';

function TodoList() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  // import the data using useSelector
  // console.log(users);

  // function that handle the changing of the status
  async function handleChangeStatus(todo) {
    dispatch(updateStatus(todo));
    try {
      await updateData(todo.id, { done: !todo.done });
    } catch (error) {}
  }

  // function that handle the removal of the item in the list
  async function handleRemoveItem(todo) {
    // dispatch(removeTask(todo.id));
    try {
      const confirmed = window.confirm(
        `Are you sure you want to remove this task "${todo.description}" in the list?`
      );
      if (confirmed) {
        await deleteTodo(todo.id);
      }
    } catch (error) {
      console.log(error);
    }

    // setTodoData((todoData) => todoData.filter((todo) => todo.id !== id));
  }
  // function that clear all the items
  function handleClearlist() {
    const confirmed = window.confirm('Are you sure to delete all the list?');
    if (confirmed) {
      deleteAll();
      // dispatch(clearTasks());
    }
  }

  return (
    <>
      <Header />
      <div>
        {isLoading ? (
          <LoadingRing />
        ) : todos.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No data Found</p>
        ) : (
          <ul className="listItems">
            {todos.map((user) => (
              <TodoItems
                todo={user}
                onChangeStatus={handleChangeStatus}
                onRemoveTask={handleRemoveItem}
                key={user.id}
              />
            ))}

            <Button className="clear-btn" onClick={handleClearlist}>
              <GiBroom /> Clear Tasks
            </Button>
          </ul>
        )}
      </div>
    </>
  );
}

export default TodoList;
