import { useEffect, useState } from "react";
import { useSearch } from "@/presentation/hooks/use-search.hook";
import { AlbumModel } from "@/application/models/album.model";

import './app.css';
import { GridItem } from "@/presentation/components/grid/grid-item";
import { Grid } from "@/presentation/components/grid/grid";

export function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data,
    isLoading,
    error,
    searchByAlbum
  } = useSearch();

  useEffect(() => {
    let timeout = 0;
    if (searchTerm) {
      timeout = setTimeout(() => searchByAlbum(searchTerm), 500);
    }

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div className="app">
      <main>
        <h1>Imgur Search</h1>

        <div id="search-container">
          <input placeholder='Search albums' type="text" onChange={(e) => setSearchTerm(e.target.value)}/>

          <div>
            {
              isLoading
                ? <div className='loader'><span></span></div>
                : <Grid>
                  {data.map((album: AlbumModel) => (
                    <GridItem
                      key={album.id}
                      imgSrc={`https://i.imgur.com/${album.coverImageId}.jpeg`}
                      imgAltText={album.title}
                    />
                  ))}
                </Grid>
            }
          </div>
        </div>
      </main>
    </div>
  );
}
