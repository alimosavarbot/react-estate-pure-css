import "./companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container paddings innerWidth flexCenter">
        <img src={require("../../assets/images/prologis.png")} alt="" />
        <img src={require("../../assets/images/tower.png")} alt="" />
        <img src={require("../../assets/images/equinix.png")} alt="" />
        <img src={require("../../assets/images/realty.png")} alt="" />
      </div>
    </section>
  );
};

export default Companies;
