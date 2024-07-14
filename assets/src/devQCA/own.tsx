import _ from 'lodash'
import H_Form from '../../qca/renderForm'
import Detail from './view'
import create from '../components/create'
export const filterUpList = ({ hf, ...params }) => {
  const formName = 'up'
  _.set(filterUpList, 'formName', formName)
  _.set(filterUpList, 'reflects', {
    'age-sex': function ([c, v]) {
      return [
        {
          condition: c == '3',
          target: ['aaa']
        }
      ]
    }
  })
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
      label: 'aaass',
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
      $componentOptions$: {
        $initData$: async function () {
          const result = await [{ label: '18', value: '18' }, { label: '3', value: '3' }]
          _.set(filterUpList, 'data', result)
          _.set(this, 'options', result)
        },
        onChange: function () {
          hf.onReflect(formName, 'age-sex')(arguments)
        }
      }
    },
  ]
}
export const filterDownList = ({ hf }) => {
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
        console.log(hf.operatorFormValue(filterUpList.formName, 'getFieldsValue', { strict: true }));

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
          create({ action: 'view' }, Detail)
        }}>查看</a>
      }
    },
    {
      title: 'aa',
      render: () => {
        return <a onClick={() => {
          create({ action: 'edit' }, Detail)
        }}>编辑</a>
      }
    }
  ]
}