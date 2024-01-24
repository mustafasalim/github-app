import ReactDOM from "react-dom/client"
import "./assets/css/tailwind.css"
import { Provider } from "react-redux"
import { store } from "./store"
import HomeLayout from "./layout/index.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HomeLayout />
  </Provider>
)
