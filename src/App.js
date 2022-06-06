import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import app from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const auth = getAuth();
  const [{}, dispatch] = useStateValue();
  
  useEffect(() =>{
    
    onAuthStateChanged(auth, (authUser) => {
      console.log("The user is >>>>"+ authUser.email);
      if(authUser){
        // user is loged in or user was not logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // user is loged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    
  },[])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header />

            <Checkout />
          </Route>
          <Route path="/payment">
          <Header />

            <Payment />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
