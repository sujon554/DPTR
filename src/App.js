import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Department from "./pages/Department/Department/Department";
import Dptr from "./pages/DPTR/Dptr/Dptr";
import Footer from "./pages/shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Header from "./pages/shared/Header/Header";
import MoreProjects from "./pages/Home/Home/MoreProjects/Moreprojects/MoreProjects";
import SingleProjects from "./pages/Home/Home/MoreProjects/SingleProjects/SingleProjects";
import Ippolicy from "./pages/IpPolicy/Ippolicy"
import Menu from "./pages/shared/Header/Menu";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Menu />
          <Header />
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
            <Route path="/ippolicy">
              <Ippolicy />
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
            <Route path="/MoreProjects">
              <MoreProjects />
            </Route>

            <Route path="/singleprojet/:id">
              <SingleProjects />
            </Route>
           
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
