import React, { useState } from "react";

const Footer = () => {
  const [showJokes, setShowJokes] = useState(false);

  const toggleJokes = () => {
    setShowJokes(!showJokes);
  };

  return (
    <footer className="flex flex-row justify-between items-center bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <ul className="flex items-center space-x-4">
        <li>
          <a
            href="https://github.com/fa-rimi"
            target="_blank"
            rel="noopener noreferrer">
            <img
              width="30"
              height="30"
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
        {/* <li>
          <button type="button" className="flex items-center">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/spotify.png"
              alt="spotify"
            />
          </button>
        </li> */}
      </ul>
      <div>
        <button type="button" onClick={toggleJokes}>
          got jokes?
        </button>
        {showJokes && (
          <div className="bg-white text-black p-2 rounded-lg absolute bottom-4 right-4">
            Here's a funny joke!
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
