import React from 'react'
import CommonHead from '../../components/common-head'
import Drag from '../../components/drag/'
import Field from '../../components/design/Field'
import EditContainer from '../../components/design/EditContainer'
import style from './style.less'
import { DesignProvider, useDesign } from '../../components/design/useTreeReducer'
// import { editInit, editReducer } from '../../components/design/useEditReducer'
import { componentMap, getComponentInit } from '../../components/design/config'


const Design = () => {
  return (
    <div className="design">
      <CommonHead title="组件组装" />

      <main className={style.design_main}>
        <DesignProvider>
          <DesignList />
          <DesignContainer/>
          <DesignEdit />
        </DesignProvider>
      </main>
    </div>
  )
}

// 可拖拽组件
const DesignList = () => {
  const [, dispatch] = useDesign()
  return (
    <div className={style.design_left}>
      {[...componentMap.keys()].map(componentId => {
        const {name} = getComponentInit(componentId)
        return (
          <Drag.Item key={componentId} componentId={componentId} dragEndCb={dispatch}>
            {({ dragProps }) => (
              <div {...dragProps} className={style.design_button}>{name}</div>
            )}
          </Drag.Item>
        )
      })}
    </div>
  )
}

// 可放入组件
const DesignContainer = () => {
  const [state, dispatch] = useDesign()
  const { tree, current, preNodeId } = state
  return (
    <div className={style.design_center}>
      <Drag.Container dropCb={dispatch}>
        {({ dropProps }) => (
          <div className={style.design__drag_screen}>
            <div { ...dropProps } className={style.design__drag_container}>
              {
                tree.root.children.map((node) => {
                  let isEdit = false
                  if (current !== -1) {
                    isEdit = (current.id === node.id)
                  }
                  return (
                    <React.Fragment key={node.id}>
                      <DesignLine isShow={preNodeId === node.id} />
                      <Field
                        isEdit={isEdit}
                        key={node.id}
                        node={node}>
                      </Field>
                    </React.Fragment>
                  )
                })
              }
              { 
                tree.root.children.length === 0 && <div className={style.design__drag_container_empty}></div>
              }
            </div>
          </div>
        )}
      </Drag.Container>
    </div>
  )
}

// 排序分割线
const DesignLine = ({isShow}) => (
  <div className={style.design_line_container}>
    {isShow && <div className={style.design_line}></div>}
  </div>
)

// 右侧组件
const DesignEdit = () => {
  const [state] = useDesign()
  const { current } = state
  return (
    <div className={style.design_right}>
      {current !== -1 && <EditContainer></EditContainer>}
    </div>
  )
}

export default Design
