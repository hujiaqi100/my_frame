import { Modal } from 'antd'
import { config } from './own'
import { useMemo } from 'react'
import { H_Form, useInitData } from '../../../qca'
const Detail = ({ close, ..._props }) => {
    const { action } = _props
    const hf = useMemo(() => new H_Form, [])
    const { RenderForm } = hf
    const init = () => {
        return { name: '2' }
    }
    const [c, setC] = useInitData(config, { hf, action }, init)
    return <Modal
        open
        onCancel={close}
        getContainer={document.getElementById('app')}
        title='detail'
        onOk={() => {
            console.log(hf.operatorFormValue(config.formName, 'getFieldsValue', { strict: true }));
        }}
    >
        <RenderForm
            formName={config.formName}
            config={c}
            setConfig={setC}
        />
    </Modal>
}
export default Detail