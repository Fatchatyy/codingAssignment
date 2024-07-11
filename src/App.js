import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ConsumeEndPoint from './components/ConsumeEndPoint';
import BackgroundAndPage from './components/BackgroundAndPage';

function App() {
  return (
    <Router>
    <div className="lg:bg-navbar bg-navbar">
   {/* <Navbar/>
    <div className=" relative  mt-9 ">
    
    <BackgroundComponent />

    
    <div className="absolute inset-0 flex justify-center items-center">
      <PageComponent />
    </div>
  </div> */}
  {/* Routes */}
  <Routes>
  <Route path="/" element={<BackgroundAndPage/>} />
            <Route path="/data" element={<ConsumeEndPoint/>} /> {/* Route for DataDisplay */}
          </Routes>
     </div>
     </Router>
   
  );
}

export default App;
