import Button from '../Button';
import './scss/TodoList.scss';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { MdOutlineDeleteSweep } from 'react-icons/md';

function TodoItems({ todo, onChangeStatus, onRemoveTask }) {
  return (
    <li>
      <div className="info-container">
        <h3>{todo.description}</h3>
        <span>Id: {todo.id} </span>
        <br />
        <p>
          Status:{' '}
          <span className={todo.done === true ? 'completed' : ''}>
            {todo.done ? 'Completed' : 'Open'}
          </span>
        </p>
      </div>
      <div className="button-container">
        <Button onClick={() => onChangeStatus(todo)}>
          {todo.done === true ? <FaToggleOn /> : <FaToggleOff />} Change Status
        </Button>
        <Button btnStyle={'red'} onClick={() => onRemoveTask(todo)}>
          <MdOutlineDeleteSweep />
          Remove Task
        </Button>
      </div>
    </li>
  );
}

export default TodoItems;
