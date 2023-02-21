import React from "react";

import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Project",
    subHeading: "Projects built using above mentioned tools",
    
  });
  const [state] = React.useState([
    {
      id: 1,
      poster: "https://s3.gifyu.com/images/ezgif.com-optimize4d67700b2a8ba3af.gif",
      heading: "KFC-Clone",
      desc: "An Ecommerce website where the customer is able to purchase tasty chicken items.",
      tech: " JavaScript | CSS | HTML | JSON",
      deploy: "https://transcendent-stardust-f3081b.netlify.app/",
      github: "https://github.com/Rishav048/KFC.com-Clone",
    },
    {
      id: 2,
      poster:
        "https://s3.gifyu.com/images/ezgif.com-optimize-29d788ab71d44f1a2.gif",
      heading: "Sephora Clone",
      desc: "An Ecommerce website with wide variety of products ranging from cosmetics to durables.",
      tech: " JavaScript | CSS | HTML",
      deploy: "https://helpful-valkyrie-422f81.netlify.app/",
      github: "https://github.com/pankajmorecreativity/plastic-scent-4061",
    },
    {
      id: 2,
      poster:
        "https://s3.gifyu.com/images/ezgif.com-optimize-29d788ab71d44f1a2.gif",
      heading: "Sephora Clone",
      desc: "An Ecommerce website with wide variety of products ranging from cosmetics to durables.",
      tech: " JavaScript | CSS | HTML",
      deploy: "https://helpful-valkyrie-422f81.netlify.app/",
      github: "https://github.com/pankajmorecreativity/plastic-scent-4061",
    },
    
  ]);
  return (
    <div className="prices project">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="price__rs">
                  <img
                    src={prices.poster}
                    alt="poster"
                    heigh="50px"
                    width="100%"
                    border="10px solid white"
                  />
                </div>
                <div className="priceHeading projectName">{prices.heading}</div>

                <ul>
                  <li className="priceHeading">{prices.desc}</li>

                  <li>{`Tech Stack: ${prices.tech}`}</li>
                </ul>
                <div className="price__btn">
                  <a
                    href={prices.deploy}
                    target="_blank"
                    className="link1 btn btn-outline1"
                  >
                    <ImNewTab fontSize="15px" /> Deploy Link
                  </a>
                  <a
                    href={prices.github}
                    target="_blank"
                    className="btn btn-outline1"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
