import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Title from './Components/Announcement-Title/Title';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Title />
      <Header />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
