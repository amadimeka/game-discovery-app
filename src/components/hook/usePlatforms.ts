import { useData } from './useData'
interface Props{
    id: string,
    name: string,
    Slug: string,
}

export const usePlatforms = () => useData<Props>('/platforms/lists/parents')
  