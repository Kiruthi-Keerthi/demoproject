import logo from './images/logo-3-.png';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <center>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="htex">
          Welcome to our website!
        </h2>
        {/* Style the Link to look like a button */}
        <Link to="/getstarted" className="btn">
          Get Started
        </Link>
      </center>
    </div>
  );
}

export default App;
