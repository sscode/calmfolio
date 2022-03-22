import React from "react";
import NavBar from "../../features/nav/NavBar";
import StockList from "../../features/dashboard/stocks/StockList";
import StockBar from "../../features/dashboard/stocks/StockBar";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector(state => state.user.user.user)
  
  return (
    <div className="App">
      <NavBar />
      {user ? 
      <div className="content">
          <StockList />
          <StockBar />
      </div>
      :
      <>
      </>   
      }
    </div>
  );
}

export default App;
