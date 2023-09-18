import React from "react";
import Resume from "./Trilochanprasad-B-Hilli-Resume.pdf"

function About() {
  
  const handleDownload = () => {
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    
    // Set the href attribute to the path of the PDF file
    // anchor.href = '/Trilochanprasad-B-Hilli-Resume.pdf';
    anchor.href =Resume
    // Set the download attribute to specify the desired filename
    anchor.download = 'Trilochanprasad-B-Hilli-Resume.pdf';

    // Trigger a click event on the anchor element to initiate the download
    anchor.click();
  };

  
  
  return (
    // <section id="about" className="about section">
    //   <div className="container">
    //     <h2>About Me</h2>
    //     <h3 id="user-detail-name">Gaurav Shukla</h3>
    //     <p id="user-detail-intro">Formal introduction goes here</p>
    //   </div>
    // </section>

    <div
      name="about"
      id="about" 
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about section"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            id="user-detail-name"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20" id="user-detail-intro" >
          Greetings! I'm Trilochanprasad B Hilli, a full stack web developer based in
          India.  I am proficient in JavaScript,React,MongoDB, Node and TypeScript. I have embarked on an exciting journey to pursue my passion for
          web development.
        </p>

        <br />

        <p className="text-xl">
         Alongside my expertise in web technologies, I am eager to expand my
          skill set to include AWS and react native development. When I'm not
          immersed in coding, you'll find me indulging in painting or cooking
          delicious meals. With a focus on continuous learning and a knack for
          crafting exceptional digital experiences, I am dedicated to delivering
          innovative solutions that meet and exceed client expectations. Looking
          forward to collaborating with you and bringing your ideas to life!
        </p>

        {/* <button>
        {/* <a
             href="./TrilochanPrasad_B_Hilli_Resume.pdf"
            target="_blank"
            download={true}
            rel="noopener noreferrer"
            className="nav-link resume"
            id="resume-button-1"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1V-fCYnoEg9JownXDlnOQHqfcVAbybDip/view"
              )
              // downloadFileUrl("https://drive.google.com/file/d/1V-fCYnoEg9JownXDlnOQHqfcVAbybDip/view")
            }
          >
            
          </a> */}
          {/* <a id="resume-link-1" href={Resume} 
          target="_blank"
          rel="noreferrer"
          download className="nav-link resume" 
          style={{textDecoration:'none'}}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1V-fCYnoEg9JownXDlnOQHqfcVAbybDip/view"
            )
            // downloadFileUrl("https://drive.google.com/file/d/1V-fCYnoEg9JownXDlnOQHqfcVAbybDip/view")
          }
          >Resume
          </a> */}
          
        {/* </button>  */}
        <button className="nav-link resume" style={{backgroundColor:"white", color:"black", width:"20%", height:"50px" ,margin:"auto", }} onClick={handleDownload}>Resume</button>
        
      </div>
    </div>
  );
}

export default About;
