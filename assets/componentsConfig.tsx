import { H_Components } from './qca/components'
import FormList from './src/components/FormList'
export const load = () => {
  const hc = new H_Components
  hc.registerComponent('formList', <FormList />)
}