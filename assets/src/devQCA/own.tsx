import _ from 'lodash'
import { create, H_Layout, H_Modal } from 'h_qca'

import { getDetail } from './services'
import { message, Popconfirm } from "antd";

export const aveConfig = function () {
  return [
    {
      title: 'qq',
      name: 'basic',
      formList: [
        {
          label: 'vv',
          name: 'enterpriseName',
          rules: [{ required: true, message: '' }],
          type: 'select',
          reflect: function ([c, v]) {
            return (form, content, setContent, traceTree) => {
              return [
                {
                  condition: c == 'ss',
                  target: 'airms_top'
                },
                {
                  condition: c == 'aa',
                  target: 'airf_top'
                }
              ]
            }
          },
          componentOptions: {
            onChange: function (c, v) {
              const { reflect, args: { form } } = H_Modal
              form.setFieldValue('enterpriseName', c)
              reflect('enterpriseName')(arguments)
            },
            options: [
              {
                label: 'ss',
                value: 'dd',
              },
              {
                label: 'aa',
                value: 'aa',
              },
            ]
          },
        },
        {
          label: 'dd',
          name: 'contactName',
        },
        {
          label: 'vv',
          name: 'contactPhone',
        },
      ]
    },
    {
      title: 'ww',
      name: 'airms_top',
      show: false,
      formList: [
        {
          label: 'ee',
          name: 'airms',
          type: 'formList',
          btnname: 'ww',
          children: [
            {
              label: 'we',
              name: 'materialName',
            },
            {
              label: 'gg',
              name: 'materialType',
            },
            {
              label: 'qq',
              name: 'makeWay',
              type: 'select',
              componentOptions: {
                options: [
                  {
                    value: '1',
                    label: 'ww',
                  },
                  {
                    value: '2',
                    label: 'dd',
                  },
                ]
              }
            },
            {
              label: 'dd',
              name: 'remark',
            }
          ],
          componentOptions: {
            name: 'materialSupplyList'
          }
        },
      ]
    },
    {
      title: 'qq',
      name: 'airf_top',
      show: false,
      formList: [
        {
          label: 'vv',
          name: '',
          type: 'formList',
          btnname: 'vv',
          children: [
            {
              label: 'dd',
              name: 'repairName',
            },
            {
              label: 'aa',
              name: 'repairType',
              type: 'select',
              componentOptions: {
                options: [
                  {
                    label: 'ss',
                    value: 'ss',
                  },
                  {
                    label: 'dd',
                    value: 'dd',
                  },
                ]
              }

            },
            {
              label: 'dd',
              name: 'remark',
            }
          ],
          componentOptions: {
            name: 'materialRepairList'
          }
        },
      ]
    }
  ]
}
const detailQuery = async (form, setContent, traceTree, v) => {
  const { id } = v
  const result = await getDetail({ id })
  if (result) {
    form.setFieldsValue({ ...result['data'] })
  }
}
export const config = (query: () => any[]) => {
  return {
    filterUpList: [
      {
        label: 'aa',
        name: 'enterpriseName',
        componentOptions: {
          placeholder: 'aa'
        }
      },
      {
        label: 'cc',
        name: 'enterpriseType',
        type: 'select',
        reflect: function ([c, v]) {
          return () => {
            return [
              {
                condition: c == '1',
                target: 'enterpriseName'
              },
            ]
          }
        },
        componentOptions: {
          onChange: function () {
          },
          options:
            [
              {
                value: '1',
                label: 'dd',
              },
              {
                value: '2',
                label: 'ss',
              },
              {
                value: '3',
                label: 'aa',
              },
            ]
        },
      }
    ],
    filterDownList: [
      {
        label: 'dd',
        name: 'enterpriseName',
        componentOptions: {
          placeholder: 'aa'
        }
      },
    ],
    queryList: [
      {
        name: '查询',
        type: "primary",
        cb: function (e) {
          console.log();

          return (form) => {
            const data = form.getFieldsValue()
          }
        },
      },
      {
        name: '重置',
        type: "dashed",
        cb: function () {
          return (form) => {
            form.resetFields()
          }
        },
      },
      {
        name: '添加',
        danger: true,
        cb: function () {
          return (form) => {
            const postQuery = async (form) => {
              const formValue = form.getFieldsValue();
              console.log(formValue);
              message.success('添加成功！')
            }
            create({
              aveConfig,
              action: 'add',
              postQuery,
              listQuery: query,
              close: function (): void {
              },
              detailQuery: function (form: any, setContent: any, traceTree: any): void {
                // throw new Error('Function not implemented.');
              },
              initialValues: undefined
            })
          }
        }
      }
    ],
    col: [
      {
        title: '序号',
        dataIndex: 'num',
        key: 'num',
        align: 'center',
        width: 100,
        render: (value: any, item: any, index: any) => (
          <span>{index + 1}</span>
        ),
      },
      {
        title: 'ss',
        dataIndex: 'enterpriseName',
        key: 'enterpriseName',
        tooltip: true
      },
      {
        title: 'dd',
        dataIndex: 'contactName',
        key: 'contactName',
        align: 'center',
      },
      {
        title: 'ff',
        dataIndex: 'contactPhone',
        key: 'contactPhone',
        align: 'center',
      },
      {
        title: 'aa',
        dataIndex: 'enterpriseTypeText',
        key: 'enterpriseTypeText',
        align: 'center',
      },
      {
        title: '操作',
        dataIndex: 'cc',
        fixed: 'right',
        key: 'cc',
        width: '150px',
        align: 'center',
        render: (c, v) => {
          return (
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-around' }
            } >
              <a onClick={async () => {
                create({
                  aveConfig,
                  action: 'view',
                  detailQuery: (form, setContent, traceTree) => detailQuery(form, setContent, traceTree, v),
                  close: function (): void {
                    throw new Error('Function not implemented.');
                  },
                  postQuery: function (form: any): Promise<void> {
                    throw new Error('Function not implemented.');
                  },
                  listQuery: function (): void {
                    throw new Error('Function not implemented.');
                  },
                  initialValues: undefined
                })
              }}> 查看 </a>
              <a onClick={() => {
                const postQuery = async (form) => {
                  await form.validateFields();
                  const formValue = form.getFieldsValue();
                  const { id } = v
                  _.set(formValue, 'id', id)
                  formValue?.materialSupplyList?.forEach(val => {
                    delete val.id
                  })
                  formValue?.materialRepairList?.forEach(val => {
                    delete val.id
                  })
                  message.success('编辑成功！')
                }
                create({
                  aveConfig,
                  action: 'edit',
                  postQuery,
                  listQuery: query,
                  detailQuery: (form, setContent, traceTree) => detailQuery(form, setContent, traceTree, v),
                  close: function (): void {
                    throw new Error('Function not implemented.');
                  },
                  initialValues: undefined
                })
              }}> 编辑 </a>
              <Popconfirm
                title="删除"
                description="确定删除此项吗？"
                placement="leftTop"
                onConfirm={async () => {
                  const { id } = v
                  query()
                }}
                okText="Yes"
                cancelText="No"
              >
                <a> 删除 </a>
              </Popconfirm>
            </div >
          )
        }
      }
    ]
  }
}