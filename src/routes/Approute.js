
import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homes from "../pages/Home";
function AppRoute(props) {
    return (
        <>
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Homes/>} />
           </Routes>
      </Router>
      </>
    );
  }
  export default AppRoute;