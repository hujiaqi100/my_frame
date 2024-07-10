import _ from 'lodash'
import H_Form from './renderForm';
export class DataProcess {
  private static isEmpty = (value: null | undefined) => {
    return value === null || value === undefined
  }
  public static getReflect = (result: any[], hf: H_Form) => {
    result.forEach((val: any) => {
      const { target } = val
      const source = _.get(val, 'source', '')
      const config = _.get(hf, `forms.${source}.config`, [])
      const setConfig = _.get(hf, `forms.${source}.setConfig`, [])
      if (_.get(val, 'condition')) {
        if (target instanceof Array) {
          target.forEach(ele => {
            _.set(DataProcess.traceTree(ele, config), '$show$', true)
          })
        } else {
          _.set(DataProcess.traceTree(target, config), '$show$', true)
        }
        setConfig(() => _.cloneDeep(config))
      } else {
        if (target instanceof Array) {
          target.forEach(ele => {
            _.set(DataProcess.traceTree(ele, config), '$show$', false)
          })
        } else {
          _.set(DataProcess.traceTree(target, config), '$show$', false)
        }
        setConfig(() => _.cloneDeep(config))
      }
    })
  }
  public static traceTree = (name: string, data: any[]): any => {
    if (data instanceof Object) {
      for (const val of Object.keys(data)) {
        if (data[val as any] instanceof Object && data[val as any]['name'] == name) {
          return data[val as any]
        }
        const result = DataProcess.traceTree(name, data[val as any])
        if (result) {
          return result
        }
      }
    }
    if (data instanceof Array) {
      for (const val of data) {
        if (val instanceof Object && val['name'] == name) {
          return val
        }
        const result = DataProcess.traceTree(name, val)
        if (result) {
          return result
        }
      }
    }
  };
  public static isWrappedWithDollarSigns = (str: string) => {
    const regex = /^\$.*\$$/;
    return regex.test(str);
  }
  public static removeSigns = (element: any) => {
    const keys = Object.keys(element).filter(d => DataProcess.isWrappedWithDollarSigns(d))
    return _.omit(element, keys)
  }
  public static reset = (data: any[], tree: any[]) => {
    if (data instanceof Object) {
      Object.keys(data).forEach(val => {
        const node = DataProcess.traceTree(val, tree)
        if (!DataProcess.isEmpty(data[val as any])) {
          _.set(node, '$show$', true)
        }
        DataProcess.reset(data[val as any], tree)
      })
    }
    if (data instanceof Array) {
      data.forEach(val => {
        const node = DataProcess.traceTree(val, tree)
        if (!DataProcess.isEmpty(val)) {
          _.set(node, '$show$', true)
        }
        DataProcess.reset(val, tree)
      })
    }
  }
}
