import dark from "../image/dark.png";
import "./Movies.css";
import Mainlayout from "../Mainlayout/Mainlayout.jsx";

const Movies = () => {
  return (
    <Mainlayout>
      <div className="Moviecarts">
        <div className="Moviecart">
          <img className="img" src={dark} />
          <div className="moviecart_info">
            <p>A NETFLIX ORGINAL SERIES</p>
            <h3>DARK</h3>
            <a href="https://www.netflix.com/bd/title/80100172" target="_blank">
              <button className="btn"> WATCH NOW </button>
            </a>
          </div>
        </div>

        <div className="Moviecart">
          <img className="img" src={dark} />
          <div className="moviecart_info">
            <p>A NETFLIX ORGINAL SERIES</p>
            <h3>DARK</h3>
            <a href="https://www.netflix.com/bd/title/80100172" target="_blank">
              <button className="btn"> WATCH NOW </button>
            </a>
          </div>
        </div>

        <div className="Moviecart">
          <img className="img" src={dark} />
          <div className="moviecart_info">
            <p>A NETFLIX ORGINAL SERIES</p>
            <h3>DARK</h3>
            <a href="https://www.netflix.com/bd/title/80100172" target="_blank">
              <button className="btn"> WATCH NOW </button>
            </a>
          </div>
        </div>

        <div className="Moviecart">
          <img className="img" src={dark} />
          <div className="moviecart_info">
            <p>A NETFLIX ORGINAL SERIES</p>
            <h3>DARK</h3>
            <a href="https://www.netflix.com/bd/title/80100172" target="_blank">
              <button className="btn"> WATCH NOW </button>
            </a>
          </div>
        </div>

        <div className="Moviecart">
          <img className="img" src={dark} />
          <div className="moviecart_info">
            <p>A NETFLIX ORGINAL SERIES</p>
            <h3>DARK</h3>
            <a href="https://www.netflix.com/bd/title/80100172" target="_blank">
              <button className="btn"> WATCH NOW </button>
            </a>
          </div>
        </div>

        <div className="Moviecart">
          <img className="img" src={dark} />
          <div className="moviecart_info">
            <p>A NETFLIX ORGINAL SERIES</p>
            <h3>DARK</h3>
            <a href="https://www.netflix.com/bd/title/80100172" target="_blank">
              <button className="btn"> WATCH NOW </button>
            </a>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Movies;
