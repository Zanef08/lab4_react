import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Films from './components/Films';
import "bootstrap/dist/css/bootstrap.css";
import {Routes, Route,} from "react-router-dom";
import Detail from './components/Detail';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
          <Route path='/' element={<Films/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes> 
      <Footer></Footer>
    </div>
  );
}
export default App;
