import React from "react";
import logo from "./logo.svg";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const dispatch = () => {
    window.dispatchEvent(new CustomEvent('mife', {
      detail: {
        type: 'show_dialog',
        name: 'close_file'
      }
    }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.REACT_APP_CONTENT_HOST}${logo}`}
          className="App-logo"
          alt="logo"
          style={{ width: 150, height: 150 }}
        />
      </header>
      <ul>
        <li>
          <Link to="/mftest/users">Users</Link>
        </li>
        <li>
          <Link to="/mftest/data">Data</Link>
        </li>
        <li onClick={dispatch}>
          Click Me
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Home;
