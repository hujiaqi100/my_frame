import { Modal, Tabs } from 'antd'
import DetailForm from './own'
import _ from 'lodash'
import { H_Form } from '../../../qca'
import { useEffect, useMemo, useState } from 'react'


const items = [
    {
        label: 'form0',
        key: '0',
        formName: 'form0'
    }
    ,
    {
        label: 'form1',
        key: '1',
        formName: 'form1'
    },
]
const sleep = (ms) => {
    return new Promise(res => {
        setTimeout(res, ms * 1000)
    })
}
const Detail = ({ close, ..._props }) => {
    const { action } = _props
    const [load, setLoad] = useState(false)
    const hf = useMemo(() => new H_Form, [])
    const _items = useMemo(() => {
        return items.map(val => {
            return {
                ...val,
                forceRender: true,
                children: <DetailForm hf={hf} action={action} formName={val.formName} />
            }
        })
    }, [])
    useEffect(() => {
        (async () => {
            setLoad(true)
            await sleep(0.05)
            setLoad(false)
        })()
    }, [])
    return <Modal
        open
        onCancel={close}
        getContainer={document.getElementById('app')}
        title='detail'
        loading={load}
        width={700}
        onOk={() => {

            const value = hf.operatorFormValue('form0', 'getFieldsValue', { strict: true })
            console.log(value);

        }}
    >
        <Tabs defaultActiveKey='0' items={_items} />
    </Modal>
}
export default Detail