import { Form, Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { DataProcess } from '../dataProcess'
import { H_Components } from '../components'
import _ from 'lodash'
import { useMemo } from 'react'
const FormList = (props) => {
  const { formList, h_form, btnName, name, listName, value, ..._props } = props
  const hc = useMemo(() => new H_Components, [])
  return <Form.List name={name} {..._props} >
    {(fields, { add, remove }, { errors }) => (
      <>
        {fields.map(({ key, name, ...restField }, _idx) => (
          formList.map((item, idx) => {
            const item_name = _.get(item, 'name', '')
            if (_.has(item, '$reflect$') && 'hf' in h_form && 'forName' in h_form) {
              const { hf, formName } = h_form
              hf.setReflect(formName, listName + '-' + item_name, _.get(item, '$reflect$'))
            }
            const _item = DataProcess.removeSigns(item)
            const type = _.get(item, '$type$', '')
            const show = _.get(item, '$show$') || !_.has(item, '$show$')
            const componentOptions = _.get(item, '$componentOptions$', {})
            return (
              <>
                {
                  show ?
                    <Form.Item key={name + idx + key} {...restField} {..._item} name={[name, item_name]}>
                      {hc.getComponents(type, { ...componentOptions }, h_form)}
                    </Form.Item>
                    : <></>
                }
                <MinusCircleOutlined style={{ paddingLeft: '12px' }} onClick={() => remove(name)} />
              </>
            )
          })
        ))}
        <Form.Item>
          <Button
            type="dashed"
            onClick={() => add()}
            style={{ width: '60%' }}
            icon={<PlusOutlined />}
          >
            {btnName}
          </Button>
          <Form.ErrorList errors={errors} />
        </Form.Item>
      </>
    )}
  </Form.List >
}
export default FormList
