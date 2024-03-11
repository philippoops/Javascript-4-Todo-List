import { useState } from 'react';
import Button from '../Button';
import './Form.scss';
import uuid from 'react-uuid';
import { FaCirclePlus } from 'react-icons/fa6';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { addTask } from '../Reducer/UserReducer';
import { useNavigate } from 'react-router-dom';

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      setIsDescriptionValid(false);
      return;
    }
    dispatch(addTask({ id: uuid(), description, done }));

    // use navigate to go back on the home page
    navigate('/');

    // const newTask = { id: uuid(), description, done };
    // onAddItems(newTask);
    setDescription('');
    setDone(false);
    setIsDescriptionValid(true); // Reset the validation state
  }

  return (
    <>
      <Header />
      <div className="form-container">
        <h2>Add a new task:</h2>
        <form onSubmit={handleSubmit} className="forms">
          {!isDescriptionValid && (
            <span className="invalid">Enter a valid description</span>
          )}
          <div className="form-inputs">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              maxLength={150}
              onChange={(e) => {
                setDescription(e.target.value);
                setIsDescriptionValid(true); // Reset the validation state on input change
              }}
            />

            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={done}
              onChange={(e) => setDone(e.target.value === 'true')}
              required
            >
              <option value="false">Open</option>
              <option value="true">Completed</option>
            </select>
          </div>

          <Button btnStyle={'teal'}>
            <FaCirclePlus /> Add
          </Button>
        </form>
      </div>
    </>
  );
}

export default Form;
