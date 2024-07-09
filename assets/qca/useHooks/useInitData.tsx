import { useState, useEffect } from 'react'
import _ from 'lodash'
export const useInitData = (config: any) => {
    const [cc, setCc] = useState(config);
    const query = async (_config: any[]) => {
        for await (const i of _config) {
            if (_.has(i, '$componentOptions$.$initData$')) {
                const componentOptions = _.get(i, '$componentOptions$', {})
                const { $initData$ } = componentOptions;
                await $initData$.bind(componentOptions)();
            }
        }
        setCc(_config);
    };
    useEffect(() => {
        query(_.cloneDeep(cc))
    }, []);
    return [cc, setCc];
}