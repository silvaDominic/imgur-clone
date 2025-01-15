import { useState } from "react";
import { AlbumModel } from "@/application/models/album.model";
import { ImgurService } from "@/application/services/imgur.service";
import { dtoToAlbumModel } from "@/application/mappers/imgur-api.mapper";

type useSearchReturnModel = {
  data: AlbumModel[],
  isLoading: boolean,
  error: any,
  searchByAlbum(searchTerm: string): Promise<void>;
}

export function useSearch() {
  const [data, setData] = useState<Array<AlbumModel>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  async function searchByAlbum(searchTerm: string): Promise<void> {
    setIsLoading(true);
    try {
      const { data } = await ImgurService.searchByAlbum(searchTerm);
      console.log(data);
      setData(data.map((searchDTO: any) => dtoToAlbumModel(searchDTO)));
    } catch(err: any) {
      setError(`Error searching images of ${searchTerm}`);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    data,
    isLoading,
    error,
    searchByAlbum,
  } as useSearchReturnModel;
}
