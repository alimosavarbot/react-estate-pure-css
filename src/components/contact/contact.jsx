import "./contact.css";

import { IoIosCall } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsChatSquareDotsFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="c-container paddings innerWidth">
        {/* Left Side */}
        <div className="c-left">
          <div className="c-title">
            <span className="orangeText">Our Contact Us</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you. We
              beleive a good blace to live can make your life better
            </span>
          </div>

          <div className="c-body">
            <div className="c-body--item">
              <div className="item--details">
                <span className="contact-icon">
                  <IoIosCall size={20} />
                </span>

                <span className="details">
                  <div>Call</div>
                  <div className="secondaryText">021 235 21 25</div>
                </span>
              </div>

              <button className="c-body--btn">Call Now</button>
            </div>

            <div className="c-body--item">
              <div className="item--details">
                <span className="contact-icon">
                  <BsFillChatDotsFill size={20} />
                </span>

                <span className="details">
                  <div>Chat</div>
                  <div className="secondaryText">021 235 21 25</div>
                </span>
              </div>

              <button className="c-body--btn">Chat Now</button>
            </div>

            <div className="c-body--item">
              <div className="item--details">
                <span className="contact-icon">
                  <BsFillChatDotsFill size={20} />
                </span>

                <span className="details">
                  <div>Video Call</div>
                  <div className="secondaryText">021 235 21 25</div>
                </span>
              </div>

              <button className="c-body--btn">Video Call Now</button>
            </div>

            <div className="c-body--item">
              <div className="item--details">
                <span className="contact-icon">
                  <BsChatSquareDotsFill size={20} />
                </span>

                <span className="details">
                  <div>Message</div>
                  <div className="secondaryText">021 235 21 25</div>
                </span>
              </div>

              <button className="c-body--btn">Message Now</button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src={require("../../assets/images/contact.jpg")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
