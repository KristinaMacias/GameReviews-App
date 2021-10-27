import React from "react";
import Navigation from "./navigation";
import App from "../App";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <App />
      </div>
    );
  }
}

export default MainContainer;
