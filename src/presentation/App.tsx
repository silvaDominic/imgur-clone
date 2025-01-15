import { useState } from "react";

export function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className="app">
      <main>
        <h1>Imgur Search</h1>

        <div id="search-container">
          <input placeholder='Search albums' type="text" onChange={(e) => setSearchTerm(e.target.value)}/>

          <div>
            {searchTerm}
            {/* LOADING TEMPLATE */}
            {/* GRID */}
          </div>
        </div>


      </main>
    </div>
  );
}
