import { useState, useEffect } from 'react'
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
export const useInitData = (config: any, hf, init) => {
    const [cc, setCc] = useState(config(hf));
    const [data, setData] = useState()
    const [done, setDone] = useState<boolean | undefined>()
    useEffect(() => {
        (async () => {
            const _cc = _.cloneDeep(config(hf))
            setDone(true)
            await initTree(_cc)
            const data = await init()
            setData(() => data)
            const dd = hf.echoData(data, _cc)
            setCc(() => dd)
        })()
    }, []);
    useEffect(() => {
        hf.getForm(config.formName).setFieldsValue(data)
    }, [data])
    return [cc, setCc, done];
}