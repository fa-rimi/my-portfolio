import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <ul className="flex items-center space-x-4">
        <li>
          <a
            href="https://github.com/fa-rimi"
            target="_blank"
            rel="noopener noreferrer">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/FFFFFF/github.png"
              alt="GitHub"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/fatima-rimi-8b88971b8/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </li>
        {/* Add your Spotify button or any other content here */}
      </ul>
      <div>
        © {new Date().getFullYear()} Rimi &{" "}
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer">
          Her Resources
        </a>
      </div>
    </footer>
  );
};

export default Footer;
