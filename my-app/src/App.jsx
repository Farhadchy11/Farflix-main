import React from "react";
import "./App.css";
import video from "./components/image/Farhad.mp4";
// import Vediocart from "./components/Home/Vediocart.jsx";
import ReactPlayer from "react-player";
import Mainlayout from "./components/Mainlayout/Mainlayout.jsx";

export default function App() {
  return (
    <Mainlayout>
      <div className="home_Videos ">
        <div className="Video_Card">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="Video_Text">
            <h4>How to start a startup</h4>
            <p>DEVID</p>
            <p>4.3m views . 7 days ago</p>
          </div>
        </div>

        <div className="Video_Card">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="Video_Text">
            <h4>How to start a startup</h4>
            <p>DEVID</p>
            <p>4.3m views . 7 days ago</p>
          </div>
        </div>

        <div className="Video_Card">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="Video_Text">
            <h4>How to start a startup</h4>
            <p>DEVID</p>
            <p>4.3m views . 7 days ago</p>
          </div>
        </div>
        <div className="Video_Card">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="Video_Text">
            <h4>How to start a startup</h4>
            <p>DEVID</p>
            <p>4.3m views . 7 days ago</p>
          </div>
        </div>
        <div className="Video_Card">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="Video_Text">
            <h4>How to start a startup</h4>
            <p>DEVID</p>
            <p>4.3m views . 7 days ago</p>
          </div>
        </div>
        <div className="Video_Card">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="Video_Text">
            <h4>How to start a startup</h4>
            <p>DEVID</p>
            <p>4.3m views . 7 days ago</p>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
