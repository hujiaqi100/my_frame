import { useRoutes } from "react-router-dom"
import routers from "./routers"
const AppRouters = () => {
    const ele = useRoutes(routers)
    return ele
}
export default AppRouters
