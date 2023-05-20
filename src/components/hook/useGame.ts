
import { useData } from "./useData";
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

  export const useGame = () => 
useData<DataResult>('/games')

    
  
