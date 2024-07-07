import { H_Components } from 'h_qca'
import FormList from './src/components/FormList'
export const load = () => {
  const hc = new H_Components
  hc.setComponents('formList', <FormList />)
}




