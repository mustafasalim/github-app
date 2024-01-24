import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"

export const useData = () =>
  useSelector((state: RootState) => state.dataContext)
export const useAppDispatch = () => useDispatch<AppDispatch>()
