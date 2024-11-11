const SongList = ({ songs }: { songs: string[] }) => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Recommended Songs:</h2>
        <ul>
          {songs.map((song, index) => (
            <li key={index} className="p-2 border-b border-gray-200">{song}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SongList;
  