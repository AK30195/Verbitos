import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles/App.css';
import Dashboard from "./pages/Dashboard";
import FlashcardView from "./pages/FlashcardView";
import PracticeView from "./pages/PracticeView";
import TensesView from "./pages/TensesView";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/practice" element={<PracticeView />} />
          <Route path="/flashcards" element={<FlashcardView />} />
          <Route path="/moods-tenses" element={<TensesView />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
