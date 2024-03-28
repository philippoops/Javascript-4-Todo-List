import { Link, NavLink } from 'react-router-dom';

function HelpNav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="">Introduction</Link>
        </li>
        <li>
          <Link to="add">Adding Tasks</Link>
        </li>
        <li>
          <Link to="remove">Removing Tasks</Link>
        </li>
        <li>
          <Link to="change">Changing status</Link>
        </li>
      </ul>
    </div>
  );
}

export default HelpNav;
