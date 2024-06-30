import { Outlet } from 'react-router-dom'
import { Button } from 'antd'
const Login = () => {
    return (
        <div>
            home
            <Button onClick={() => {
                console.log(1);
            }}>asadddddas</Button>
            <Outlet />
        </div>
    )
}
export default Login