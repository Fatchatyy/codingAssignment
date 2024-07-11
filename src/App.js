import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import BackgroundComponent from './components/BackgroundComponent';
import PageComponent from './components/pageComponent';

function App() {
  return (
    //bg-white-900  min-h-screen"
    <div className="bg-navbar">
   <Navbar/>
    <div className=" relative  mt-9 ">
    {/* Background Component */}
    <BackgroundComponent />

    {/* Page Component */}
    <div className="absolute inset-0 flex justify-center items-center">
      <PageComponent />
    </div>
  </div>
     </div>
   
  );
}

export default App;
