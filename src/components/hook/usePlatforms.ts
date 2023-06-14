import { useData } from './useData'
import { Platform } from './useGame'


export const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
  