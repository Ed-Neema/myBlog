import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';

function App() {
  return (
    <>
      <NavBar />
      <Login/>
    </>
  );
}

export default App;
