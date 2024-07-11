import _ from 'lodash'
import H_Form from '../../qca/renderForm'
export const filterUpList = (hf: H_Form) => {
  _.set(filterUpList, 'formName', 'up')
  return [
    {
      label: 'NAME',
      name: 'name',
      $type$: 'input',
      $componentOptions$: {
        suffix: 'LOVE'
      }
    },
    {
      label: 'NAME',
      name: 'aaa',
      $show$: false,
      $type$: 'input',
      $componentOptions$: {
        suffix: 'LOVE'
      }
    },
    {
      label: 'AGE',
      name: 'age',
      $type$: 'select',
      $reflect$: function ([c, v]: any) {
        return [
          {
            condition: c == '18',
            source: 'up',
            target: 'sex-name'
          },
          {
            condition: c == '18',
            source: 'down',
            target: ['age']
          },
        ]
      },
      $componentOptions$: {
        $initData$: async function () {
          const result = await [{ label: '18', value: '18' }, { label: '3', value: '3' }]
          _.set(filterUpList, 'data', result)
          _.set(this, 'options', result)
        },
        onChange: function () {
          hf.onReflect(_.get(filterUpList, 'formName', ''), 'age')(arguments)
        }
      }
    },
    {
      label: 'SEX',
      name: 'sex',
      $type$: 'formlist',
      $componentOptions$: {
        btnName: 'aa',
        formList: [
          {
            label: 'Name',
            name: 'aa',
          }
        ]
      }
    }
  ]
}
export const filterDownList = (hf: H_Form) => {
  _.set(filterDownList, 'formName', 'down')
  return [
    {
      label: 'NAME',
      name: 'name',

      $type$: 'input',
      $componentOptions$: {
        suffix: 'LOVE'
      }
    },
    {
      label: 'AGE',
      name: 'age',
      $type$: 'select',
      $show$: false,
      $componentOptions$: {
        $initData$: async function () {
          const result = await [{ label: '18', value: '18' }]
          _.set(this, 'options', result)
        }
      }
    }
  ]
}
export const queryList = (query: Function, hf: H_Form) => {
  return [
    {
      name: '添加',
      danger: true,
      cb: function () {
        console.log(hf.getForm(filterUpList.formName).getFieldsValue());

      }
    }
  ]
}
export const col = () => {
  return [
    {
      title: 'aa',
      render: () => {
        return <a onClick={() => {
        }}>aa</a>
      }
    }
  ]
}