import React from "react";

import Header from "./Header";
import Main from "./activities/Main";
import sunset from "../sunset.png";
import Footer from "./Footer";

const styles = {
  backgroundImage: `url(${sunset})`
}

export default function App() {
  return(
    <div height="100%" style={ styles }>
      <Header />
      <Main/>
      <Footer />
    </div>
  )
}
