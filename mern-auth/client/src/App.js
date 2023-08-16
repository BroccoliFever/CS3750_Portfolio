import React from "react";
import { Route, Routes } from "react-router-dom";

// Import components
import LoginScreen from "./components/loginScreen";
import NewUser from "./components/newUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/newUser" element={<NewUser />} />
      </Routes>
    </div>
  );
};

export default App;
