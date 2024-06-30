import { Outlet } from 'react-router-dom'
// import { Button } from 'antd'
import './index.less'
const Login = () => {
    return (
        <div className='home'>
            <Outlet />
        </div>
    )
}
export default Login