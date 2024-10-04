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
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>
    
      <Content></Content>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
