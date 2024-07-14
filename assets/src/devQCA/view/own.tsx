import _ from 'lodash'
export const config = (params) => {
    const { action } = params
    _.set(config, 'formName', 'detail')
    return [
        {
            label: 'Name',
            name: 'name',
            $type$: 'span'
        }
    ]
}