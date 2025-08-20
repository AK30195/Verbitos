import { NavLink } from "react-router-dom";
import '../styles/App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links-div">
        <div className="logo-home-link">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-white transition-colors ${isActive ? "text-white font-semibold border-b-2 border-indigo-400" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </div>
        <div className="main-nav-links">
           <li>
            <NavLink
              to="/moods-tenses"
              className={({ isActive }) =>
                `hover:text-white transition-colors ${isActive ? "text-white font-semibold border-b-2 border-indigo-400" : ""
                }`
              }
            >
              Moods & Tenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/flashcards"
              className={({ isActive }) =>
                `hover:text-white transition-colors ${isActive ? "text-white font-semibold border-b-2 border-indigo-400" : ""
                }`
              }
            >
              Flashcards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/practice"
              className={({ isActive }) =>
                `hover:text-white transition-colors ${isActive ? "text-white font-semibold border-b-2 border-indigo-400" : ""
                }`
              }
            >
              Practice
            </NavLink>
          </li>
        </div>

      </ul>
    </nav>
  );
}