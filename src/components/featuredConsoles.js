import React from "react";
class FeaturedConsoles extends React.Component {
  render() {
    return (
      <div className="container" id="console-cards">
        <div className="row">
          <div className="col-lg">
            <a href="#">
              <img id="switch-card" src="/switch.jpeg" />
            </a>
          </div>
          <div className="col-lg">
            <a href="#">
              <img id="xbox-card" src="/xbox.jpg" />
            </a>
          </div>
          <div className="col-lg">
            <a href="#">
              <img id="ps-card" src="/ps5.jpg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedConsoles;
