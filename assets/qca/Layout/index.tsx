import React, { useEffect, useRef, useState, useContext, ReactNode, useMemo, ReactElement } from "react";
import './index.less';
import { Pagination, Table, Form, Button, Dropdown, FormInstance } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import _ from 'lodash';
import ToolTips from './ToolTips'
import H_form from '../../qca/renderForm'
import { DataProcess } from '../dataProcess'
interface ContextProps {
  showMore: boolean;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = React.createContext<ContextProps | undefined>(undefined);

interface H_LayoutProps {
  children: ReactNode;
}
const dp = new DataProcess
const hf = new H_form
const H_Layout: React.FC<H_LayoutProps> & {
  args: any,
  reflectUp: Function,
  reflectDown: Function,
  Block: React.FC<BlockProps>;
  Filter: React.FC<FilterProps>;
  Table: React.FC<TableProps>;
  Footer: React.FC<FooterProps>;
  useDataAjax: (config: DataAjaxConfig) => [DataAjaxConfig];
} = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Context.Provider value={{ showMore, setShowMore }}>
      <div className="H_Layout">
        {children}
      </div>
    </Context.Provider>
  );
};
H_Layout['args'] = {}
H_Layout['reflectUp'] = () => { }
H_Layout['reflectDown'] = () => { }

interface BlockProps {
  children: ReactNode;
  [key: string]: any;
}

H_Layout.Block = ({ children, ...props }) => {
  return <div className="block" >
    {children}
  </div>;
};

interface FilterProps {
  query: Array<QueryProps>;
  filterUp: ReactElement;
  filterDown: ReactElement;
}

interface QueryProps {
  name: string;
  cb: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => (form: FormInstance) => void;
  [key: string]: any;
}


H_Layout.Filter = (props: FilterProps) => {
  const { query, filterUp, filterDown } = props;
  const context = useContext(Context);
  useEffect(() => {
    // const reflectListUp = dp.setReflect(filterUp)
    // const reflectListDown = dp.setReflect(filterDown)
    // const reflectList = _.concat(reflectListUp, reflectListDown)
    // const reflectUp = (name: string) => {
    //   return function (c: any) {
    //     const x = reflectList.find(d => d.name == name).reflect
    //     const a = x(c)(form, up, setUp, dp.traceTree)
    //     dp.getReflect(a, up, setUp)
    //   }
    // }
    // const reflectDown = (name: string) => {
    //   return function (c: any) {
    //     const x = reflectList.find(d => d.name == name).reflect
    //     const a = x(c)(form, down, setDown, dp.traceTree)
    //     dp.getReflect(a, down, setDown)
    //   }
    // }
    // _.set(H_Layout, `args.${formName}`, form)
    // _.set(H_Layout, 'reflectUp', reflectUp)
    // _.set(H_Layout, 'reflectDown', reflectDown)
    // form.setFieldsValue(initData)
  }, [])
  if (!context) {
    throw new Error("H_Layout.Filter must be used within a H_Layout");
  }
  const { showMore, setShowMore } = context;
  const renderQuery = ({ name, cb, ...options }: QueryProps, idx: any, type: string = 'btn') => {
    if (type == 'btn') {
      return <Button {...options} key={idx} onClick={(e: any) => {
        cb(e);
      }}>{name}</Button>;
    }
    if (type == 'a') {
      return <a key={idx} onClick={(e) => {
        cb(e);
      }}>{name}</a>;
    }

  };

  return <div className="filter">
    <div className="filter_box">
      <div className="filter_lay">
        <div className="filter_field">
          {filterUp}
        </div>
        <div className="query_field">
          <div className="query_btn">
            {
              query && query.length > 3 ?
                <>
                  {renderQuery(query[0], '0')}
                  {renderQuery(query[1], '1')}
                  {renderQuery(query[2], '2')}
                  <Dropdown
                    trigger={['click']}
                    menu={{
                      items: (query || []).slice(3).map((val, idx) => {
                        return {
                          key: idx,
                          label: renderQuery(val, 'a')
                        };
                      })
                    }}>
                    <Button type="text" style={{ width: 64 }}><CaretDownOutlined /></Button>
                  </Dropdown>
                </>
                :
                <>
                  {
                    query && query.map((val, idx) => {
                      return renderQuery(val, idx, 'btn')
                    })
                  }
                </>
            }
            {
              filterDown && <Button type="link" onClick={() => {
                setShowMore(!showMore);
              }}>更多</Button>
            }
          </div>
        </div>
      </div>
      {
        showMore && filterDown && <div className="filter_down">
          <div className="down">
            {filterDown}
          </div>
        </div>
      }
    </div>

  </div>;
};

interface TableProps {
  [key: string]: any;
}

H_Layout.Table = (props: TableProps) => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("H_Layout.Table must be used within a H_Layout");
  }
  const { showMore } = context;
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const { columns } = props;
  const myColumns = useMemo(() => {
    return (columns || []).map((item: any) => {
      if (item.tooltip) {
        return {
          ...item,
          align: 'center',
          ellipsis: {
            showTitle: false,
          },
          render: (name: string) => {
            return (
              <ToolTips name={name} />
            )
          }
        }
      } else {
        return {
          ...item,
          align: 'center',
        }
      }
    })
  }, [])

  useEffect(() => {
    if (ref.current) {
      setScrollY(ref.current.offsetHeight - 70);
    }
  }, [showMore, ref.current]);

  return <div ref={ref} className="main" >
    <div className="main_table">
      <Table sticky scroll={{
        x: 1300,
        y: scrollY
      }} {...props} pagination={false} columns={myColumns || []} />
    </div>
  </div>;
};

interface FooterProps {
  children?: ReactNode;
  carry?: ReactNode;
  [key: string]: any;
}

H_Layout.Footer = ({ children, ...props }: FooterProps) => {
  const { carry, ...pageAttr } = props;
  return <>
    {
      children ? children : <div className={`footer ${carry && 'carry'}`}>
        {carry &&
          <div className="carry">
            {carry}
          </div>
        }
        <div className="page">
          <div >
            共&nbsp;{pageAttr?.total ?? 0}&nbsp;条
          </div>
          <Pagination {...pageAttr} />
        </div>
      </div>
    }
  </>;
};

interface DataAjaxConfig {
  [key: string]: any;
}

H_Layout.useDataAjax = (config: DataAjaxConfig) => {
  const [cc, setCc] = useState([]);
  const query = async (queryList: any[]) => {
    for await (const i of queryList) {
      const { componentOptions } = i;
      if (!_.isEmpty(componentOptions)) {
        const { getOptions } = componentOptions;
        if (getOptions) {
          const data = await getOptions();
          _.set(componentOptions, 'options', data);
        }
      }
    }
    setCc(_.cloneDeep(cc));
  };

  useEffect(() => {
    (async () => {
      const { filterUpList, filterDownList } = config;
      await Promise.all([query(filterUpList), query(filterDownList)]);
    })();
  }, []);
  return [cc];
};
export default H_Layout;
