import { useData } from "../store/data/hook"
import { useRepo } from "../store/repoData/hook"
import Header from "./header"
import InfoSection from "./infoSection"
import { message } from "antd"

function HomeLayout() {
  const [messageApi, contextHolder] = message.useMessage()
  const key = "updatable"
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    })
    setTimeout(() => {
      messageApi.open({
        key,
        type: "error",
        content: "User not found",
        duration: 2,
      })
    }, 1000)
  }
  const data = useData()
  const repoData = useRepo()

  data.error === "errordata" && openMessage()

  console.log(data)
  console.log(repoData)

  return (
    <section>
      {contextHolder}
      <Header />
      <InfoSection />
    </section>
  )
}

export default HomeLayout
