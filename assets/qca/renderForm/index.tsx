import { Form } from 'antd'
import _ from 'lodash'
import React from 'react'
import { DataProcess } from '../dataProcess'
import { H_Components } from '../components'
const dp = new DataProcess
const hc = new H_Components
export default class H_Form {
    constructor() {
        this.forms = {}
    }
    public getForms = () => {
        return this.forms
    }
    public getForm = (key: string) => {
        return this.forms[key]['form']
    }
    public getConfig = (key: string) => {
        return this.forms[key]['setConfig']
    }
    public renderForm = ({ formName, config, setConfig, formProps = {} }) => {
        const [form] = Form.useForm()
        _.set(this.forms, formName, {
            form,
            setConfig
        })
        return React.createElement(
            Form,
            { ...formProps, form, name: formName },
            [
                ...config.map((item: any, idx: number) => {
                    const _item = dp.removeSigns(item)
                    const type = _.get(item, '$type$', '')
                    const componentOptions = _.get(item, '$componentOptions$', {})
                    return React.createElement(
                        Form.Item,
                        { ..._item, key: idx },
                        hc.getComponents(type, componentOptions)
                    )
                })
            ]
        )
    }
}