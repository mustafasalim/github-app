import { useData } from "../../store/data/hook"

function ProfilPhoto() {
  const userData = useData()
  return (
    <div className="w-[150px] h-[150px] rounded-3xl flex items-center justify-center bg-[#20293A]">
      <div className="w-[130px] h-[130px] rounded-2xl overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={
            userData.data.length === 0
              ? "https://avatars.githubusercontent.com/u/9919?v=4"
              : `${userData.data.avatar_url}`
          }
          alt=""
        />
      </div>
    </div>
  )
}

export default ProfilPhoto
