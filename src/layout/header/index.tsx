import SearchInput from "../../components/searchInput"

function Header() {
  return (
    <header>
      <div className="relative bg-center bg-cover bg-[url('./images/slider.png')] w-full h-[360px] flex pt-16 justify-center">
        <SearchInput variant="large" />
      </div>
    </header>
  )
}

export default Header
