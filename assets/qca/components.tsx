import _ from 'lodash'
import React from 'react';
import { H_Input, H_Select, H_CheckBox, H_Number, H_TextArea, H_Button } from './own'
import { DataProcess } from './dataProcess';
export class H_Components {
  static instance: H_Components
  private components: any
  public constructor() {
    if (H_Components.instance) {
      return H_Components.instance
    }
    this.components = void 0
    this.init()
    H_Components.instance = this
  }
  private init = () => {
    this.components = {
      'input': <H_Input />,
      'select': <H_Select />,
      'checkbox': <H_CheckBox />,
      'textArea': <H_TextArea />,
      'number': <H_Number />,
      'button': <H_Button />
    }
  }
  getComponents(type: string | undefined, args: any) {
    const _args = new DataProcess().removeSigns(args)
    if (!type) {
      const ReactNode = this.components['input']
      return React.cloneElement(ReactNode, { ..._args })
    } else {
      const ReactNode = this.components[type]
      if (!ReactNode) throw new Error('没有可选组件')
      return React.cloneElement(ReactNode, { ..._args })
    }
  }
  registerComponent = (type: string, RN: any) => {
    if (type in this.components) throw new Error('组件名称重复')
    _.set(this.components, type, RN)
  }
}
