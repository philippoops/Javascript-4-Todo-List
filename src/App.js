import TodoList from '../src/components/TodoList/TodoList.js';

import '../src/components/MainCss/MainCss.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form/Form.js';
import Help from './components/Help/Help.js';
import PageNotFound from './components/PageNotFound/PageNotFound.js';
import AddingTask from './components/Help/AddingTask.js';
import Introduction from './components/Help/Introduction.js';
import RemovingTask from './components/Help/RemovingTask.js';
import ChangeStatus from './components/Help/ChangeStatus.js';

function App() {
  // function for adding new task

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TodoList />} />
        <Route path="/addTask" element={<Form />} />
        <Route path="/help" element={<Help />}>
          <Route path="" element={<Introduction />} />
          <Route path="add" element={<AddingTask />} />
          <Route path="remove" element={<RemovingTask />} />
          <Route path="change" element={<ChangeStatus />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
