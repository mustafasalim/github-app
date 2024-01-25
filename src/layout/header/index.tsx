import SearchInput from "../../components/searchInput"

function Header() {
  return (
    <header>
      <div className="relative  bg-cover bg-[url('https://c.wallhere.com/photos/dc/03/1920x1080_px_Astronomy_Colorful_colors_Cosmos_Galaxies_galaxy_nature-1732107.jpg!d')] w-full h-[360px] flex pt-16 justify-center">
        <SearchInput variant="large" />
      </div>
    </header>
  )
}

export default Header
