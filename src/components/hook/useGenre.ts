
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

interface GenreProps{
    id: number,
    name: string,
}
interface FetchGenreResponse{
    count : Number,
    results :GenreProps[]

}

export const useGenre = () => {
    const [genres, setGenre] = useState<GenreProps[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
    apiClient
      .get<FetchGenreResponse>('/genres',{signal: controller.signal})
      .then((res) =>{setGenre(res.data.results);
      setLoading(false)} )
      .catch(
       
        (err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          }
            );
      return ()=> controller.abort()
    },[]);
        return {genres, error, loading}
}

