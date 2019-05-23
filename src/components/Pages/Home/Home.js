import React from "react";
import Logo from "../../Layout/Logo/Logo";
import HomeLinks from "./HomeLinks/HomeLinks";
import Footer from "../../Layout/Footer/Footer";

function Home(props) {
  return (
    <>
      <div className="Home">
        <div className="Headline">
          <h1>A Manchester United Project</h1>
          <p>A React.js project by Alex Power</p>
        </div>
        <Logo />
        <HomeLinks clicked={props.clicked} component={props.component} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
