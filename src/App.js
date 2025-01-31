import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ConsumeEndPoint from './components/ConsumeEndPoint';
import BackgroundAndPage from './components/BackgroundAndPage';

function App() {
  return (
    <Router>
      <div className="lg:bg-navbar mx-auto bg-navbar">
        <Routes>
          <Route path="/" element={<BackgroundAndPage />} />
          <Route path="/data" element={<ConsumeEndPoint />} /> {/* Route for DataDisplay */}
        </Routes>
      </div>
    </Router>

  );
}

export default App;
