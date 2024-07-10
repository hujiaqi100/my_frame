import React, { useState, memo, useEffect, useMemo } from 'react'
import { H_Layout } from '@/qca'
import { getPageList } from './services'
import _ from 'lodash'
import { H_Form, useInitData } from '../../qca'
import { filterUpList, queryList, filterDownList, col } from './own'
import { message } from 'antd'
const initPage = {
    current: 1,
    size: 30
}
const Page = memo(() => {
    const [load, setLoad] = useState(false)
    const [data, setData] = useState()
    const hf = useMemo(() => {
        return new H_Form
    }, [])
    const [up, setUp, upDone] = useInitData(filterUpList(hf))
    const [down, setDown, downDone] = useInitData(filterDownList(hf))
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
    useEffect(() => {
        if (typeof (downDone) === 'boolean' && !downDone) {
            const data = { name: '1', age: '3' }
            hf.echoData('down', data)
        }
    }, [downDone])
    const layoutDom = (
        <H_Layout>
            <H_Layout.Block>
            </H_Layout.Block>
            <H_Layout.Filter
                query={queryList(handleQuery, hf)}
                filterUp={hf.renderForm({
                    formName: 'up',
                    config: up,
                    setConfig: setUp,
                    formProps: { className: 'flex' }
                })}
                filterDown={hf.renderForm(
                    {
                        formName: 'down',
                        config: down,
                        setConfig: setDown,
                        formProps: { className: 'flex flex-wrap' }
                    })}
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
})
Page.loadData = () => {
    return [
        {
            name: 'pageList',
            url: '/kg-economics/material/pageList',
            params: initPage,
            data: void 0
        }
    ]
}

export default Page;
