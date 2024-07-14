import _ from 'lodash'
import { H_Form, useInitData } from '../../../qca'
import { Spin } from 'antd'
const sleep = (ms) => {
    return new Promise(res => {
        setTimeout(res, ms * 1000)
    })
}
const config = (params) => {
    const formName = params.formName
    _.set(config, 'formName', formName)
    _.set(config, 'reflects', {
        'age-name': function ([c, v]) {
            return [
                {
                    condition: c === '3',
                    target: 'content-name'
                }
            ]
        }
    })
    const { action, hf } = params
    return [
        {
            label: 'Name',
            name: 'name',
            $type$: 'input',
            $componentOptions$: {
                style: { width: 200 },
                disabled: action === 'view',
                suffix: formName === 'form0' ? 'YY' : 'BY'
            }
        },
        {
            label: 'Age',
            name: 'age',
            $type$: 'select',
            $componentOptions$: {
                style: { width: 200 },
                disabled: action === 'view',
                $initData$: async function () {
                    await sleep(1)
                    const data = [
                        {
                            label: '18',
                            value: '18'
                        },
                        {
                            label: '3',
                            value: '3'
                        }
                    ]
                    _.set(this, 'options', data)
                },
                onChange: function () {
                    hf.onReflect('form0', 'age-name')(arguments)
                }
            }
        },
        {
            label: 'CONTENT',
            name: 'content',
            $type$: 'formlist',
            $componentOptions$: {
                initAddData: { name: '1' },
                addToHead: true,
                labelCol: { span: 5 },
                disabled: action === 'view',
                formList: [
                    {
                        label: 'Name',
                        name: 'name',
                        $type$: 'input',
                        style: { width: 230 },
                        $componentOptions$: {
                            disabled: action === 'view',
                            suffix: formName === 'form0' ? 'YY' : 'BY'
                        }
                    }, {
                        label: 'Age',
                        name: 'age',
                        $type$: 'select',
                        $componentOptions$: {
                            style: { width: 200 },
                            disabled: action === 'view',
                            $initData$: async function () {
                                await sleep(1)
                                const data = [
                                    {
                                        label: '18',
                                        value: '18'
                                    },
                                    {
                                        label: '3',
                                        value: '3'
                                    }
                                ]
                                _.set(this, 'options', data)
                            },
                            onChange: function () {
                            }
                        }
                    }
                ]
            }
        }
    ]
}
const DetailForm = (props) => {
    const { action, formName, hf } = props
    const { RenderForm } = hf
    const init = (formName: string) => {
        if (formName === 'form0') {
            return {
                'age': '3', content: [
                    {
                        name: 'sdadds',
                        age: 3
                    },
                ]
            }
        } else {
            return { 'name': '1' }
        }
    }
    const [c, setC, done] = useInitData(config, { hf, action, formName }, init)

    return <RenderForm
        formName={_.get(config, 'formName')}
        config={c}
        setConfig={setC}
        formProps={{
            labelCol: { span: 3 },
        }}
        reflects={_.get(config, 'reflects')}
    />


}
export default DetailForm