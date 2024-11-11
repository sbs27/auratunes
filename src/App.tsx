import React, { useState } from 'react';
import Header from './Header';  // assuming you have this component
import MoodInput from './MoodInput';  // assuming you have this component
import SongList from './SongList';  // assuming you have this component

const App = () => {
  const [songs, setSongs] = useState<string[]>([]);

  const getRecommendations = (mood: string) => {
    // Simulated logic to map moods to songs
    let recommendedSongs: string[] = [];

    if (mood.includes("happy")) {
      recommendedSongs = ["Happy - Pharrell Williams", "Can't Stop the Feeling! - Justin Timberlake"];
    } else if (mood.includes("sad")) {
      recommendedSongs = ["Someone Like You - Adele", "The Night We Met - Lord Huron"];
    } else if (mood.includes("angry")) {
      recommendedSongs = ["Smells Like Teen Spirit - Nirvana", "Break Stuff - Limp Bizkit"];
    } else {
      recommendedSongs = ["Shape of You - Ed Sheeran", "Blinding Lights - The Weeknd"];
    }

    setSongs(recommendedSongs); // Update the song list
  };

  return (
    <div className="App">
      <Header />
      <MoodInput onMoodChange={getRecommendations} />
      <SongList songs={songs} />
    </div>
  );
};

export default App;

