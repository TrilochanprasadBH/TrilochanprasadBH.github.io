import React from "react";
// import navbar from "../assets/portfolio/navbar.jpg";
import attirely from "../assets/portfolio/attirely.png"
import befit from "../assets/portfolio/befit.png"
import savari from "../assets/portfolio/savari.png"
import kfc from "../assets/portfolio/kfc.png"
import task from "../assets/portfolio/task.png"

function Projects() {
  const portfolios = [
    {
      id: 1,
      src:attirely,
      github: "https://github.com/TrilochanprasadBH/ATTIRLEY.COM",
      deployed: "https://attirely.netlify.app/",
      title:"Attirely.com", 
      stack: "JavaScript, Firebase, ChakraUI, React.js Redux"
    },
    {
      id: 2,
      src: befit,
      github: "https://github.com/TrilochanprasadBH/BeFit.com",
      deployed: "https://moonlit-spoon-3401-trilochanprasadbh.vercel.app/",
      title:"BeFit.com",
      stack:"React.js Redux Chakra-UI"
    },
    {
      id: 3,
      src: savari,
      github: "https://github.com/TrilochanprasadBH/MYUBER.COM",
      deployed: "https://savariapp.netlify.app/",
      title:"MyUber.com",
      stack:"Node.js MongoDb, React.js, Express.js JavaScript"
      
    },
    {
      id: 4,
      src: kfc,
      github: "https://github.com/TrilochanprasadBH/KFC.COM",
      deployed: "https://kfc-app-delta.vercel.app/",
      title:"KFC.com",
      stack:"JavaScript,HTML,CSS"
    },
    {
      id: 5,
      src: task,
      github: "https://github.com/TrilochanprasadBH/T-TaskApp",
      deployed: "https://tasks-alpha-one.vercel.app/",
      title:"T-Task",
      stack:"TypeScript, Drag and Drop, React.js,"
    },
   
   
  ];

  return (
    
    <div
      name="projects"
      id="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white"
      // className="bg-gradient-to-b from-black to-gray-800 w-full  md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="  text-4xl font-bold inline border-b-4  border-gray-500 mt-32 style={{ marginTop: '1rem' }}">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, deployed, github , title, stack}) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-600 rounded-lg project-card"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={deployed} className="project-deployed-link" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  <a href={github} className="project-github-link" rel="noreferrer" target="_blank">
                    Code
                  </a>
                </button>
              </div>
              <h6 className="project-title">Project Name:{" "}{title}</h6>
              {/* <p className="project-description">Desc{" "}</p> */}
              <div className="project-tech-stack">Tech Stack: {" "} {stack}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

//ok