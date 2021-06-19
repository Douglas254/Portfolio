import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Douglas</p>
          <p>Software Developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/douglas.jpg`}
          alt="douglas pic"
        ></img>
      </div>
    </div>
  );
};

export default Home;
