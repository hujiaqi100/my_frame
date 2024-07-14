import { useState, useEffect, useMemo } from 'react'
import _ from 'lodash'
const initTree = async (data: any) => {
    if (!data) return
    if (data instanceof Object) {
        for (const val of Object.keys(data)) {
            if (_.has(data[val], '$initData$')) {
                const initialization: Function = _.get(data[val], '$initData$')
                await initialization.bind(data[val])()
            }
            initTree(data[val])
        }
    }
    if (data instanceof Array) {
        for (const val of data) {
            if (_.has(val, '$initData$')) {
                const initialization: Function = _.get(val, '$initData$')
                await initialization.bind(val)()
            }
            initTree(val)
        }
    }
}
export const useInitData = (config: any, params, init: () => any) => {
    const _c = useMemo(() => config(params), [])
    const [cc, setCc] = useState(_c);
    const [data, setData] = useState()
    const [done, setDone] = useState<boolean | undefined>()
    const hf = useMemo(() => {
        if ('hf' in params) {
            return params.hf
        } else {
            throw new Error('config params must includes hf where instance of H_form')
        }
    }, [])
    useEffect(() => {
        (async () => {
            const _cc = _.cloneDeep(config(params))
            setDone(true)
            await initTree(_cc)
            const data = await init()
            if (data) {
                setData(() => data)
            }
            const dd = hf.echoData(data, _cc)
            setCc(() => dd)
        })()
    }, []);
    useEffect(() => {
        hf.operatorFormValue(config.formName, 'setFieldsValue', data)
    }, [data])
    return [cc, setCc, done];
}