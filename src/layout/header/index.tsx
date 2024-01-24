import ProfilPhoto from "../../components/profilPhoto"
import SearchInput from "../../components/searchInput"

function Header() {
  return (
    <header>
      <div className="relative bg-center bg-cover bg-[url('./images/slider.png')] w-full h-[360px] flex pt-16 justify-center">
        <SearchInput variant="large" />
      </div>
      <ProfilPhoto />
    </header>
  )
}

export default Header
