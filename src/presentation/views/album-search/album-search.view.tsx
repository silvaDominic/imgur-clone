import { LoadingWidget } from "@/presentation/components/loading-widget/loading-widget";
import { Grid } from "@/presentation/components/grid/grid";
import { AlbumModel } from "@/application/models/album.model";
import { GridItem } from "@/presentation/components/grid/grid-item";
import { AlbumLink } from "@/presentation/features/album-link/album-link";
import { ReactElement, useEffect, useState } from "react";
import { useSearch } from "@/presentation/hooks/use-search.hook";

import './album-search.styles.css';

export function AlbumSearchView(): ReactElement {
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
    <div>
      <h1>Imgur Search</h1>

      <div id="search-container">
        <input placeholder='Search albums' type="text" onChange={(e) => setSearchTerm(e.target.value)}/>

        <div>
          {
            isLoading
              ? <LoadingWidget isLoading={isLoading}/>
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
    </div>
  );
}
