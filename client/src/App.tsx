import { useState } from "react";
import axios from "axios";

import Home from "./client/components/Home";
import Navbar from "./client/components/navbar";
import SignupCard from "./client/components/signupCard";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      <SignupCard />
    </>
  );
}

export default App;
