
import { useData } from "./useData";
import { GenreProps } from "./useGenre";
export interface Platform{
    id: string,
    name: string,
    slug: string,
}
export interface DataResult {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
parent_platforms:{ platform: Platform}[],
  }

  export const useGame = (
    selectedGenre: GenreProps | null,
     selectedPlatforms:Platform| null) => 
useData<DataResult>('/games', {params: {genres: selectedGenre?.id, platforms :selectedPlatforms}},[selectedGenre?.id,selectedPlatforms?.id])

    
  
