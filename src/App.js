import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
//imported routes and navbar
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Navbar';
import Read from './Read';
import Create from './Create';

function App() {
  return (
    //Added navigation routes to display content
    <div>
      <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content/>} /> 
        <Route path="/read" element={<Read/>} />
        <Route path="/create" element={<Create/>} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
