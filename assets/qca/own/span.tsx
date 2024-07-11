import _ from 'lodash'
const H_Span = (props: any) => {
  const _props = _.omit(props, ['args'])
  return <span {..._props}>{_props.value}</span>
}
export default H_Span
