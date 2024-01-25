import { useSelector } from "react-redux"
import { RootState } from "../../store"

export const useRepo = () => useSelector((state: RootState) => state.repoData)
