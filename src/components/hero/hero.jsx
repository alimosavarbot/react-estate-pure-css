import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container innerWidth paddings flexCenter">
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>

          <div className="hero-des flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easility
            </span>
            <span className="secondaryText">
              Forget all difficulaties in finding a residence for you
            </span>
          </div>

          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="stats flexCenter">
            <div className="stat flexColCenter">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>

              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src={require("../../assets/images/hero-image.png")} alt="" />
          </div>
        </div>
      </div>

      <div className="white-gradient"></div>
    </section>
  );
};

export default Hero;
