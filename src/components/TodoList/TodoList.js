import { GiBroom } from 'react-icons/gi';
import TodoItems from './TodoItems';

import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { clearTasks, removeTask, updateStatus } from '../Reducer/UserReducer';

function TodoList() {
  // import the data using useSelector
  const users = useSelector((state) => state.users);
  // console.log(users);

  const dispatch = useDispatch();
  // function that handle the changing of the status
  function handleChangeStatus(id) {
    dispatch(updateStatus(id));
  }

  // function that handle the removal of the item in the list
  function handleRemoveItem(id) {
    dispatch(removeTask(id));
    // setTodoData((todoData) => todoData.filter((todo) => todo.id !== id));
  }
  // function that clear all the items
  function handleClearlist() {
    const confirmed = window.confirm('Are you sure to delete all the list?');
    if (confirmed) {
      dispatch(clearTasks());
    }
  }
  return (
    <>
      <Header />
      <div>
        <ul className="listItems">
          {users.map((user) => (
            <TodoItems
              todo={user}
              onChangeStatus={handleChangeStatus}
              onRemoveTask={handleRemoveItem}
              key={user.id}
            />
          ))}
          {users.length > 0 && (
            <p className="clear-btn" onClick={handleClearlist}>
              <GiBroom /> Clear Tasks
            </p>
          )}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
