import { NavLink } from 'react-router-dom';

function HelpNav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="">Introduction</NavLink>
        </li>
        <li>
          <NavLink to="add">Adding Tasks</NavLink>
        </li>
        <li>
          <NavLink to="remove">Removing Tasks</NavLink>
        </li>
        <li>
          <NavLink to="change">Changing status</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HelpNav;
