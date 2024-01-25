import InfoBox from "../../components/informationsBox"
import ProfilPhoto from "../../components/profilPhoto"
import Repo from "../../components/repositories"
import { useData } from "../../store/data/hook"

function InfoSection() {
  const dataUser = useData()
  return (
    <section>
      <div className="w-full flex items-center justify-center">
        <div className="w-[1200px] h-32 relative flex justify-between">
          <div className="absolute bottom-10">
            <ProfilPhoto />
          </div>
          <div className="flex w-full items-start ml-52 pt-3 gap-x-6">
            <InfoBox
              title="Fallowers"
              value={
                dataUser.data.length === 0
                  ? "27839"
                  : `${dataUser.data.followers}`
              }
            />
            <InfoBox
              title="Fallowing"
              value={
                dataUser.data.length === 0 ? "0" : `${dataUser.data.following}`
              }
            />
            <InfoBox
              title="Location"
              value={
                dataUser.data.length === 0
                  ? "San Francisco, CA"
                  : `${dataUser.data.location}`
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[1200px] grid">
          <div className="text-[40px] text-[#CDD5E0]">
            {dataUser.data.length === 0 ? "GitHub" : `${dataUser.data.name}`}
          </div>
          <div className="text-[16px] text-[#8F9AAC]">
            {dataUser.data.length === 0
              ? "How people build software."
              : `${dataUser.data.bio}`}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <div className="w-[1200px] flex flex-wrap justify-between gap-y-10">
          <Repo />
        </div>
      </div>
    </section>
  )
}

export default InfoSection
