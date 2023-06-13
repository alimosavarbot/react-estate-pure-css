import "./value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import { useState } from "react";

const Value = () => {
  const [className, setClassName] = useState(null);
  const [selectedAccordion, setSelectedAccordion] = useState(0);

  return (
    <section className="v-wrapper">
      <div className="v-container paddings innerWidth">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src={require("../../assets/images/value.png")} alt="" />
          </div>
        </div>

        {/* Right Side */}
        <div className="v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br /> We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  onClick={() => setSelectedAccordion(i)}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span
                        className="primaryText"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {item.heading}
                      </span>
                      <div
                        className={`flexCenter icon arrowIcon ${
                          selectedAccordion === i
                            ? "toRotate"
                            : "toDefaultRotate"
                        } `}
                      >
                        <MdOutlineArrowDropDown size={25} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
