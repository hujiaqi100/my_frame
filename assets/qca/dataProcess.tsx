import _ from 'lodash'
export class DataProcess {
  private isEmpty = (value: null | undefined) => {
    return value === null || value === undefined
  }
  public getReflect = (result: any[], content: any, setContent: any) => {
    result.forEach((val: any) => {
      const { target } = val
      if (_.get(val, 'condition')) {
        if (target instanceof Array) {
          target.forEach(ele => {
            _.set(this.traceTree(ele, content), 'show', true)
          })
        } else {
          _.set(this.traceTree(target, content), 'show', true)
        }
      } else {
        if (target instanceof Array) {
          target.forEach(ele => {
            _.set(this.traceTree(ele, content), 'show', false)
          })
        } else {
          _.set(this.traceTree(target, content), 'show', false)
        }
      }
    })
    setContent(() => _.cloneDeep(content))
  }
  public setReflect = (tree: any[], arr: any[] = []) => {
    for (const val of tree) {
      if (_.has(val, 'reflect') && val['reflect'] instanceof Function && _.has(val, 'name')) {
        arr.push({
          name: _.get(val, 'name', ''),
          reflect: _.get(val, 'reflect', () => { })
        })
      } else if (val?.formList) {
        this.setReflect(val.formList, arr);
      } else if (val?.children) {
        this.setReflect(val.children, arr);
      }
    }
    return arr
  }
  public traceTree = (name: string, tree: any[]): any => {
    for (const val of tree) {
      if (val?.name === name) {
        return val;
      } else if (val?.formList) {
        const result = this.traceTree(name, val.formList);
        if (result) {
          return result;
        }
      } else if (val?.children) {
        const result = this.traceTree(name, val.children);
        if (result) {
          return result;
        }
      }
    }
    return void 0;
  };
  public initTree = async (data: any[]) => {
    if (!data) return
    if (data instanceof Array) {
      for (const val of data) {
        if (!this.isEmpty(val) && !_.has(val, 'root')) {
          if (!_.has(val, 'componentOptions')) {
            _.set(val, 'componentOptions', {})
          } else {
            if (_.has(val, 'componentOptions.initialization')) {
              const initialization: Function = _.get(val, 'componentOptions.initialization')
              await initialization.bind(val)()
            }
          }
        }

        if ('componentList' in val) {
          this.initTree(val['componentList'])
        }
      }
    }
  }
  public isWrappedWithDollarSigns = (str: string) => {
    const regex = /^\$.*\$$/;
    return regex.test(str);
  }
  public removeSigns = (element: any) => {
    const keys = Object.keys(element).filter(d => this.isWrappedWithDollarSigns(d))
    return _.omit(element, keys)
  }
  public reRender = (data: any[], tree: any[]) => {
    if (data instanceof Object) {
      Object.keys(data).forEach(val => {
        const node = this.traceTree(val, tree)
        if (!this.isEmpty(data[val as any])) {
          _.set(node, 'show', true)
        }
        this.reRender(data[val as any], tree)
      })
    }
    if (data instanceof Array) {
      data.forEach(val => {
        const node = this.traceTree(val, tree)
        if (!this.isEmpty(val)) {
          _.set(node, 'show', true)
        }
        this.reRender(val, tree)
      })
    }
  }

}
