import { Form, Button } from 'antd';
import { renderFormItem } from 'h_qca'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import _ from 'lodash'
const FormList = (props) => {
  const {
    onChange,
    reflect,
    args: {
      action,
      content,
      element: {
        componentOptions,
        btnname,
        children,
        name
      },
      form,
      traceTree,
      setContent }
  } = props
  return <Form.List  {...componentOptions}>
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, name, ...restField }, idx_f) => (
          <div key={idx_f} className='flex  mb-[12px] active  py-[12px] relative '>
            {action !== 'view' && <div className='flex absolute top-[27px] left-[28px]'><MinusCircleOutlined className='z-10' onClick={() => remove(name)} /></div>}
            <div className='flex flex-wrap pr-[18px]'>
              {children.map((item, idx) => {
                const _item = _.omit(item, ['componentOptions', 'reflect']);
                return <div key={idx}>
                  {
                    item.show !== false && <Form.Item key={idx} {..._item} {...restField} name={[name, item.name]} label={item.label + (idx_f + 1)}>
                      {renderFormItem(item, form, content, setContent, traceTree, action)}
                    </Form.Item>
                  }
                </div>
              })}
            </div>
          </div>
        ))}
        <br />
        <Button danger className='w-full' type="dashed" disabled={action == 'view'} onClick={(e) => {
          add()
        }
        } block icon={<PlusOutlined />}>
          {btnname}
        </Button>
      </>
    )}
  </Form.List>
}
export default FormList
