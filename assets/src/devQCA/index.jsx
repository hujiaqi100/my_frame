import React, { useState, memo, useEffect } from 'react'
import { H_Layout } from 'h_qca'
import { getPageList } from './services'
import _ from 'lodash'
import { config } from './own'
import { message } from 'antd'
const initPage = {
    current: 1,
    size: 30
}
const Page = memo((props) => {
    // const pl = props.context.pl
    // const _records = pl[0]['pageList'].data.records.map((val, idx) => {
    //     return {
    //         ...val,
    //         key: idx
    //     }
    // })

    const [load, setLoad] = useState(false)
    const [data, setData] = useState()
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
        H_Layout['args']['layout'].setFieldValue('enterpriseName', '11')
    }, [])
    const [_config] = H_Layout.useDataAjax(config(handleQuery))
    const layoutDom = (
        <H_Layout>
            <H_Layout.Block>
            </H_Layout.Block>
            <H_Layout.Filter
                formName={'layout'}
                query={_config.queryList}
                filterUp={_config.filterUpList}
                filterDown={_config.filterDownList}
            />
            <H_Layout.Block>
                aa
            </H_Layout.Block>
            <H_Layout.Table loading={load} dataSource={_records || _.get(data, 'list', [])} columns={_config.col} />
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
