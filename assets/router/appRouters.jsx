import { useRoutes } from "react-router-dom"
import routers from "./routers"
import React from "react"

const traceRouters = (routers, context) => {
    if (!routers) return
    routers.forEach(val => {
        if (val.element) {
            val.element = React.cloneElement(val.element, { context })
        }
        if (routers.chlidren) {
            traceRouters(routers.chlidren, context)
        }
    })
}
const AppRouters = ({ context }) => {
    traceRouters(routers, context)
    const ele = useRoutes(routers)
    return ele
}
export default AppRouters
