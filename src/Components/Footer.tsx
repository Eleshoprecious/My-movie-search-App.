// import React from "react";
// import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
// import "./Footer.css"; // Import the CSS file

// const Footer = () => {
//   // Get today's date dynamically
//   const today = new Date().toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <footer className="footer">
//       <p>© {new Date().getFullYear()} Movie-Scout. All Rights Reserved.</p>
//       {/* <p>Date: {today}</p> */}
//       <p>Powered by OMDb API</p>
//       <div className="social-icons">
//         <a href="#" target="_blank">
//           <FaGithub />
//         </a>
//         <a href="#" target="_blank">
//           <FaTwitter />
//         </a>
//         <a href="#" target="_blank">
//           <FaLinkedin />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Movie-Scout. All Rights Reserved.</p>
      <p>Powered by OMDb API</p>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          {FaGithub({})}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          {FaTwitter({})}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          {FaLinkedin({})}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
