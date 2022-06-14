import './App.css';
import Nft from './components/Nft/Nft';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nft />} />
      </Routes>
    </Router>
  );
}

export default App;
