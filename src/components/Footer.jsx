import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="flex justify-center p-20 border-t-2 ">
        <li className="px-10 py-50 hover:scale-110 duration-200">
          <a
            href="https://github.com/Nikoo-Nasrpooya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="px-10 pb-50 hover:scale-110 duration-200">
          <a
            href="https://www.linkedin.com/in/nikoo-nasrpooya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="px-10 pb-50 hover:scale-110 duration-200">
          <a
            href="https://twitter.com/nikoonasrpooya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
        </li>
      </ul>
      <p className="text-sm flex justify-center mb-3">
        Copyright &#169; 2022 Nikoo Nasrpooya. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
