import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Navbar';

function App() {
  return (
    //Ex 2 - Add div to display hello world and date
    <div>
      <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/read" element={<Footer/>} />
        <Route path="/create" element={<Header/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
