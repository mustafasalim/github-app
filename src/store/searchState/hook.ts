import { useSelector } from "react-redux"
import { SearchState } from "../../store"

export const useSearch = () =>
  useSelector((state: SearchState) => state.searchStateAll.searchValue)
