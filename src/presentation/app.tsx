import { useEffect, useState } from "react";
import { useSearch } from "@/presentation/hooks/use-search.hook";
import { AlbumModel } from "@/application/models/album.model";

import './app.styles.css';
import { GridItem } from "@/presentation/components/grid/grid-item";
import { Grid } from "@/presentation/components/grid/grid";
import { AlbumLink } from "@/presentation/components/album-link/album-link";
import { LoadingWidget } from "@/presentation/components/loading-widget/loading-widget";

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
                ? <LoadingWidget isLoading={isLoading} />
                : <Grid>
                  {data.map((album: AlbumModel) => (
                    <GridItem key={album.id}>
                      <AlbumLink
                        id={album.id}
                        imgSrc={`https://i.imgur.com/${album.coverImageId}.jpeg`}
                        imgAltText={album.title}
                        images={album.images}
                      />
                    </GridItem>
                  ))}
                </Grid>
            }
          </div>
        </div>
      </main>
    </div>
  );
}
