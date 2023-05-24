
import { useData } from "./useData";

export interface GenreProps{
    id: number,
    name: string,
    image_background: string,
}
export const useGenre = () =>
 useData<GenreProps>('/genres')
