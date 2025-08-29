import { NavLink } from "react-router-dom";
import '../styles/App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links-container">
        <div className="logo-link-div">
          <li className="nav-link">
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
        <div className="nav-links-div">
           <li className="nav-link">
            <NavLink
              to="/moods-tenses"
              className={({ isActive }) =>
                `hover:text-white transition-colors ${isActive ? "text-white font-semibold border-b-2 border-indigo-400" : ""
                }`
              }
            >
              Tenses
            </NavLink>
          </li>
          <li className="nav-link">
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
          <li className="nav-link">
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