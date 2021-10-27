import React from "react";
import App from "../App";
class VideoGame extends React.Component {
  render() {
    let gameOne = {
      image:
        "https://media.wired.com/photos/615de4bdcb3eb413e3a033ab/master/pass/Games-Metroid-Dread.jpg",
    };

    let gameTwo = {
      image:
        "https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/m/metroid-dread-switch/hero?v=2021101422",
    };

    return (
      <div>
        <img id="metroid-img" src={gameOne.image} />
      </div>
    );
  }
}

export default VideoGame;
