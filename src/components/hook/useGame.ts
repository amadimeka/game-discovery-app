import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
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
  interface FetchGamesResponse {
    count: number;
    results: DataResult[];
  }

  
  export const useGame = () => {
    const [games, setGames] = useState<
DataResult[]
>([]);
const [error, setError] = useState('');
useEffect(() => {
    const controller = new AbortController()
apiClient
  .get<FetchGamesResponse>('/games',{signal: controller.signal})
  .then((res) => setGames(res.data.results))
  .catch(
   
    (err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});
  return ()=> controller.abort()
},[]);
    return {games, error}
  }
  
