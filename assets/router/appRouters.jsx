import { useRoutes } from "react-router-dom"
import routers from "./routers"
import { useEffect } from "react"
const AppRouters = () => {
    useEffect(() => {
        console.log('get category');
    }, [])
    const ele = useRoutes(routers)
    return ele
}
export default AppRouters
