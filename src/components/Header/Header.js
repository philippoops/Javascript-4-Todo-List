import { NavLink } from 'react-router-dom';
import './Header.scss';
import { FaTasks } from 'react-icons/fa';

function Header() {
  return (
    <>
      <header>
        <div className="title">
          <FaTasks />
          Todo App
        </div>
        <div className="author">By: Louis Philip Buenaflor</div>
      </header>
      <nav className="navigation">
        <ul>
          {/* navlink for todo */}
          <li>
            <NavLink to="/">Tasks</NavLink>
          </li>
          <li>
            {/* navlink for add todo */}

            <NavLink to="/addTask">Add</NavLink>
          </li>
          {/* navlink for add Help */}

          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
