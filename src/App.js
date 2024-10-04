import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //Ex 2 - Add div to display hello world and date
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
