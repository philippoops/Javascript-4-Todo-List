import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Help.scss';
import HelpNav from './HelpNav';
function Help() {
  return (
    <>
      <Header />
      <div className="helpContainer">
        <h2>Help</h2>
        <Outlet />
        <HelpNav />
      </div>
    </>
  );
}

export default Help;
