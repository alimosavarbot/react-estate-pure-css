import "./footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper paddings innerWidth">
      <div className="footer--logo">
        <img src={require("../../assets/images/logo2.png")} />
        <span className="secondaryText">
          Our vision is to make all people <br />
          the best place to live for them.
        </span>
      </div>

      <div className="footer--information">
        <div className="primaryText">Information</div>
        <span className="secondaryText">145 New York, FL 5467, USA</span>

        <div className="footer--menu flexStart">
          <span>Property</span>
          <span>Services</span>
          <span>Product</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
