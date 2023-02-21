import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "Full Stack Web Developer",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Trilochanprasad B Hilli" },
    { id: 2, title: "Email:", text: "tptrilochanprasad@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9535332999" },
    { id: 4, title: "Linkedin", text: "Trilochanprasad B Hilli" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="https://www.linkpicture.com/q/IMG_20190422_202742.jpg" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Hello! I'm Trilochanprasad , a passionate software engineer.
                A tech-savvy professional with advanced training and experience in coding over 1700 hours at Masai school with ability to quickly learn and adapt to diverse cultures. 
                Looking forward to joining an organisation with exciting learning culture and expand skills while facilitating company growth.

              </div>
              <div className="about__info-p2">Contact</div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
