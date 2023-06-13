import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container innerWidth paddings flexCenter">
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "tween",
              }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <motion.div
            className="hero-des flexColStart"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "tween",
            }}
          >
            <span className="secondaryText">
              Find a variety of properties that suit you very easility
            </span>
            <span className="secondaryText">
              Forget all difficulaties in finding a residence for you
            </span>
          </motion.div>

          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <motion.div
            className="stats flexCenter"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "tween",
            }}
          >
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
          </motion.div>
        </div>

        <div className="hero-right flexCenter">
          <motion.div
            className="image-container"
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "tween",
            }}
          >
            <img src={require("../../assets/images/hero-image.png")} alt="" />
          </motion.div>
        </div>
      </div>

      <div className="white-gradient"></div>
    </section>
  );
};

export default Hero;
