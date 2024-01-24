import { useData } from "../store/data/hook"
import Header from "./header"

function HomeLayout() {
  const data = useData()
  console.log(data.data)

  return (
    <section>
      <Header />
      <div>
        <div className="text-black">{data.data.avatar_url}</div>
      </div>
    </section>
  )
}

export default HomeLayout
