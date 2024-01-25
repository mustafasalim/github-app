import { useData } from "../store/data/hook"
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

  data.error === "errordata" && openMessage()

  console.log(data)

  return (
    <section>
      {contextHolder}
      <Header />
      <InfoSection />
    </section>
  )
}

export default HomeLayout
