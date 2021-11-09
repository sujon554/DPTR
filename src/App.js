
import { BrowserRouter ,Switch , Route} from 'react-router-dom';
import './App.css';
import Department from './pages/Department/Department/Department';
import Dptr from './pages/DPTR/Dptr/Dptr';
import Footer from './pages/Footer/Footer';
import Navbar from './pages/Home/Header/Navbar';
import Home from './pages/Home/Home/Home';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/department">
            <Department></Department>
          </Route>
          <Route path="/dptr">
            <Dptr></Dptr>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
