import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Films from './components/Films'
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Films></Films>
      <Footer></Footer>
    </div>
  );
}

export default App;
