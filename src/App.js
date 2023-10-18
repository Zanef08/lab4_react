import './App.css';
import Navigation from './components/Navigation';
import Film from './components/Films';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Film></Film>
      <Footer></Footer>
    </div>
  );
}

export default App;
