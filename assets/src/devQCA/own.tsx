import _ from 'lodash'
export const filterUpList = (query: () => any[], hf) => {
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
export const filterDownList = (query: () => any[]) => {
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
export const queryList = () => {
  return [
    {
      name: '添加',
      danger: true,
      cb: function () {

      }
    }
  ]
}
export const col = (hf) => {
  return [
    {
      title: 'aa',
      render: () => {
        return <a onClick={() => {
          console.log(hf.getForms());
        }}>aa</a>
      }
    }
  ]
}