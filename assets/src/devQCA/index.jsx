import React, { useState, memo, useEffect, useMemo, useCallback } from 'react'
import { H_Layout } from '@/qca'
import { getPageList } from './services'
import _ from 'lodash'
import { H_Form, useInitData } from '../../qca'
import { filterUpList, queryList, filterDownList, col } from './own'
import { Button, message } from 'antd'
const initPage = {
    current: 1,
    size: 30
}
const Page = () => {
    const [load, setLoad] = useState(false)
    const [data, setData] = useState()
    const hf = useMemo(() => new H_Form, [])
    const RenderForm = useMemo(() => hf.RenderForm, [])
    const init = async () => {
        const data = { name: '1', age: '1', sex: [{ name: '1', key: '1' }] }
        return await data
    }
    const params = {
        hf
    }
    const [up, setUp, upDone] = useInitData(filterUpList, params, init)
    const [down, setDown, downDone] = useInitData(filterDownList, { hf }, init)
    const handleQuery = async (params) => {
        setLoad(true)
        try {
            const result = await getPageList({ ...initPage, ...params })
            if (result) {
                const { data } = result.data
                const { records, current, size, total } = data
                const _records = records.map((val, idx) => {
                    return {
                        ...val,
                        key: idx
                    }
                })
                const _data = { list: _records, current: current, size: size, total: total }
                setData(() => _.cloneDeep(_data))
            }
        } catch (error) {
            message.error(new Error(error).message)
        } finally {
            setLoad(false)
        }
    }
    useEffect(() => {
        handleQuery()
    }, [])
    const [c, setC] = useState(0)
    const layoutDom = (
        <H_Layout>
            <H_Layout.Block>
                <Button onClick={() => setC(c + 1)}>aa</Button>
            </H_Layout.Block>
            <H_Layout.Filter
                query={queryList(handleQuery, hf)}
                filterUp={<RenderForm
                    formName={filterUpList.formName}
                    config={up}
                    setConfig={setUp}
                    formProps={{ className: 'flex' }}
                    reflects={filterUpList.reflects}
                />}
                filterDown={
                    <RenderForm
                        formName={filterDownList.formName}
                        config={down}
                        setConfig={setDown}
                        formProps={{ className: 'flex flex-wrap' }}
                    />}
            />
            <H_Layout.Table loading={load} dataSource={_.get(data, 'list', [])} columns={col(hf) || []} />
            <H_Layout.Footer
                total={_.get(data, 'total', 0)}
                current={_.get(data, 'current', initPage.current)}
                pageSize={_.get(data, 'size', initPage.size)}
                onChange={(current, size) => {
                    const formData = H_Layout['formStore']['layout'].getFieldsValue()
                    handleQuery({ ...formData, current, size })
                }}
            />
        </H_Layout>
    )
    return (
        <div className='overflow-hidden h-[calc(100vh)]'>
            {layoutDom}
        </div>

    )
}
export default Page;
