import React, { useState } from "react";

const Footer = () => {
  const [joke, setJoke] = useState(""); // Initialize joke to an empty string because we dont have it yet
  const [showJokes, setShowJokes] = useState(false); // Initialize showJokes as false because we dont have it yet
//   const apiKey = "jO0oqBAYG9bZgfRLCI5e9wTKTfRapmliBvW8zDQr";

  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": import.meta.env.VITE_APP_DADJ_API,
    },
  };

  const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
  // Dad Jokes URL with limit query parameter to fetch one joke at a time

  const getJoke = async () => {
    try {
      const response = await fetch(apiURL, options); // Sending an API request using the fetch and wait
      const data = await response.json(); // Parse the JSON data and wait for it to process
      setJoke(data[0].joke);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleJokes = async () => {
    setShowJokes(false); // Hide the button text
    await getJoke(); // Fetch the joke
    setShowJokes(true); // Show the joke
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
      <div className="flex items-center">
      <button type="button" onClick={toggleJokes} >
          {showJokes ? null : "got jokes?"}
        </button>
        {showJokes && (
          <div className="bg-white text-black p-2 rounded-lg bottom-4 right-4">
            {joke}
          </div>
        )}{" "}
      </div>
    </footer>
  );
};

export default Footer;
