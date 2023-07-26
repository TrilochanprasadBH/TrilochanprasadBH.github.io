import React from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      ids:"contact-linkedin",
      href: "https://www.linkedin.com/in/trilochanprasad-b-hilli-7a1871106/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      ids:"contact-github",
      href: "https://github.com/TrilochanprasadBH",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      ids:"contact-email",
      class:"",
      href: "mailto:tptrilochanprasad@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      class:"",
      style: "rounded-br-md",
      href: "https://drive.google.com/file/d/1V-fCYnoEg9JownXDlnOQHqfcVAbybDip/view",
      download: "Trilochanprasad_Resume.pdf",
    },
    {
      id: 5,
      child: (
        <>
          Phone <FaPhone size={30} />
        </>
      ),
      ids:"contact-phone",
      href: "tel:9535332999",
    },
  ];
  return (
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            id={link.ids}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
              id="resume-button-2"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
