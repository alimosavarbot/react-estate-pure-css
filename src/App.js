import Companies from "./components/companies/companies";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import GetStarted from "./components/getStarted/getStarted";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Residencies from "./components/residencies/residencies";
import Value from "./components/value/value";
import "./App.css";

const App = () => {
  return (
    <div className="app" style={{ overflowX: "hidden" }}>
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
