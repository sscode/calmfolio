import React from "react";
import StockList from "../../features/dashboard/stocks/StockList";
import StockBar from "../../features/dashboard/stocks/StockBar";
import { useSelector } from "react-redux";
import HomePage from "../../features/Home/Home";
import Logout from "../../features/user/Logout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const user = useSelector(state => state.user.user.user)
  
  return (
    <>
    <ToastContainer
    position="top-left"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    />
    <div className="App">
      {user ? 
      <div className="content">
          <h1>calmfolio</h1>
          <StockList />
          <StockBar />
          <Logout />
      </div>
      :
      <>
        <HomePage />
      </>   
      }
    </div>
    </>
  );
}

export default App;
