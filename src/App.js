
import { BrowserRouter ,Switch , Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Department from './pages/Department/Department/Department';
import Dptr from './pages/DPTR/Dptr/Dptr';
import Footer from './pages/shared/Footer/Footer';
import Navbar from './pages/shared/Header/Navbar';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './pages/Login/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';




function App() {
  return (
    <div className="App">
     <AuthProvider>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          
        </Switch>
        <Footer />
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
