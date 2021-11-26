import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header-component/HeaderComponent';
import LandingPage from './components/LandingPage';
import ReviewComponent from './components/review-component/ReviewComponent';

function App() {
  return (
    <div className="App">
      <div className="main-header">
        <HeaderComponent />
      </div>
      <div className="main-sections">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
