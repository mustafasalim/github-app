import { useSearch } from "../../store/searchState/hook"
import { useAppDispatch } from "../../store/data/hook"
import { fetchUserData } from "../../store/data"
import { _searcContext } from "../../store/searchState"
import classnames from "classnames"

interface Input {
  variant?: any
  children?: any
}

function SearchInput({ variant }: Input) {
  const dispatch = useAppDispatch()
  const user = useSearch()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    dispatch(fetchUserData(user))
  }

  return (
    <form
      className="relative"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="username"
        className={classnames(
          "bg-[#20293A] h-16 rounded-xl pl-[50px] placeholder:text-[#4A5567] flex items-center text-[17px] text-[#CDD5E0]",
          {
            "w-[200px]": variant === "small",
            "w-[300px]": variant === "default",
            "w-[500px]": variant === "large",
          }
        )}
        onChange={(e: any) => dispatch(_searcContext(e.target.value))}
        type="text"
      />
      <svg
        className="absolute top-5 left-4 flex "
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11"
          cy="11"
          r="7"
          stroke="#97A3B6"
          stroke-width="2"
        />
        <path
          d="M20 20L17 17"
          stroke="#97A3B6"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </form>
  )
}

export default SearchInput
