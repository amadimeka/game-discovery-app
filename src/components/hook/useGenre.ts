
import { useData } from "./useData";

interface GenreProps{
    id: number,
    name: string,
}
export const useGenre = () =>
 useData<GenreProps>('/genres')
