import { useState } from "react";

const MoodInput = ({ onMoodChange }: { onMoodChange: (mood: string) => void }) => {
    const [mood, setMood] = useState("");
  
    const handleMoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMood(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onMoodChange(mood); // Pass mood to parent component
    };
  
    return (
      <div className="p-4">
        <input
          type="text"
          value={mood}
          onChange={handleMoodChange}
          className="p-2 border border-gray-300 rounded"
          placeholder="How are you feeling?"
        />
        <button onClick={handleSubmit} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Find Music
        </button>
      </div>
    );
  };
  
  export default MoodInput;
  