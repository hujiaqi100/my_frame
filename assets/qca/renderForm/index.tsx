import { Form, FormInstance } from 'antd'
import _ from 'lodash'
import React from 'react'
import { DataProcess } from '../dataProcess'
import { H_Components } from '../components'
const hc = new H_Components

export default class H_Form {
  public forms: any = {}
  constructor() {
    this.forms = {}
  }
  public removeForms = () => {
    this.forms = {}
  }
  public getForms = () => {
    return this.forms
  }
  public getForm = (key: string) => {
    return this.forms[key]['form']
  }
  public getConfig = (key: string) => {
    return {
      config: this.forms[key]['config'],
      setConfig: this.forms[key]['setConfig']
    }
  }
  private setReflect = (formName: string, name: string, reflect: Function) => {
    _.set(this.forms, `${formName}.reflect.${name}`, reflect)
  }
  private getReflect = (formName: string, name: string) => {
    return _.get(this.forms, `${formName}.reflect.${name}`)
  }
  public onReflect = (formName: string, name: string) => {
    let reflect = this.getReflect(formName, name)
    let _this = this
    return (c: any) => {
      const result = reflect(c)
      reflect = null
      DataProcess.getReflect(result, _this)
    }
  }
  public echoData = (data: any, cc) => {
    const _config = _.cloneDeep(cc)
    DataProcess.reset(data, _config)
    return _config
  }
  public renderForm = ({ formName, config, setConfig, formProps = {} }: any) => {
    const [form] = Form.useForm()
    _.set(this.forms, formName, {
      form,
      config,
      setConfig
    })
    return React.createElement(
      Form,
      { ...formProps, form, name: formName },
      [
        ...config.map((item: any, idx: number) => {
          const name = _.get(item, 'name', '')
          const _item = DataProcess.removeSigns(item)
          const type = _.get(item, '$type$', '')
          const show = _.get(item, '$show$') || !_.has(item, '$show$')
          const componentOptions = _.get(item, '$componentOptions$', {})
          if (type === 'formlist') {
            _.set(componentOptions, 'name', name)
          }
          if (_.has(item, '$reflect$')) {
            this.setReflect(formName, name, _.get(item, '$reflect$'))
          }
          if (show) {
            return React.createElement(
              Form.Item,
              { ..._item, key: idx },
              hc.getComponents(type, componentOptions, { hf: this, formName })
            )
          } else {
            return React.createElement(
              React.Fragment,
              { key: idx }
            )
          }
        })
      ]
    )
  }
}
