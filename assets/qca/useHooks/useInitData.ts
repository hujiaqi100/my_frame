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
export const useInitData = (config: any) => {
    const [cc, setCc] = useState(config);
    const [done, setDone] = useState<boolean | undefined>()
    useEffect(() => {
        (async () => {
            const _cc = _.cloneDeep(cc)
            setDone(true)
            await initTree(_cc)
            setDone(false)
            setCc(_cc)
        })()
    }, []);
    return [cc, setCc, done];
}