import React, { useState, useEffect } from "react";

const Spotify = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    // Fetch recently played tracks from Spotify API using your access token
    const fetchRecentlyPlayed = async () => {
      const response = await fetch(`${process.env.REACT_APP_SPOTIFY_API_URL}/me/player/recently-played`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_API_KEY}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRecentlyPlayed(data.items);
      }
    };

    fetchRecentlyPlayed();
  }, []);

  return (
    <div>
      <h2>Recently Played Tracks</h2>
      <ul>
        {recentlyPlayed.map((track) => (
          <li key={track.played_at}>{track.track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Spotify;
