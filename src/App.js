import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Fetch a random image from an API
    fetch("https://picsum.photos/500")
      .then((response) => response.url)
      .then((url) => setImageUrl(url));
  }, []);

  return (
    <div className="App">
      <h1>Random Image</h1>
      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Random"
            style={{ width: "500px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
