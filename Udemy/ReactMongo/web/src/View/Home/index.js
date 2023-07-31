import React from "react";

// ********** Components ***********
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import * as stl from "./style";

function Home() {
  return (
    <stl.container>
      <Header />
      <Footer />
    </stl.container>
  );
}

export default Home;
