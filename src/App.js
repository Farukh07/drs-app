import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header-component/HeaderComponent';
import LandingPage from './components/LandingPage';
import ReviewComponent from './components/review-component/ReviewComponent';
import Scrollbars from 'react-custom-scrollbars';

function App() {
  return (
    <Scrollbars style={{ width: '100wh', height: '100vh' }}>
        <div className="App">
      <div className="main-header">
        <HeaderComponent />
      </div>
      <div className="main-sections">
        <LandingPage />
      </div>
    </div>
      </Scrollbars>
  );
}

export default App;
