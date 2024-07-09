import { useEffect } from "react"
import { H_Form } from "../qca"
const App = () => {
    useEffect(() => {
        const hf = new H_Form
        console.log(hf.getForms());
    }, [])
    return <div>aa</div>
}
export default App