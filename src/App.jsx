import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import Modal from './Modal';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="App">
      <Home />
      <Sidebar />
      <Modal />
    </div>
  )
}

export default App;
