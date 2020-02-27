import Edit from './EditClass'
import {
  Label,
  Placeholder
} from './packages/'

export const componentMap = new Map()
componentMap.set(1, { name: '单行输入框', label: '单行输入框', placeholder: '请输入' })
componentMap.set(2, { name: '单选框', label: '单选框', placeholder: '请输入' })

// 获取对应componentId的编辑项
export const getComponentInit = (componentId) => {
  return {...componentMap.get(+componentId)}
}
// 创建node的编辑项
export const createEdit = (nodeId, componentId) => {
  const editConfig = getComponentInit(componentId)
  return new Edit(nodeId, {...editConfig, componentId})
}

// 参数的编辑组件Map
export const formItemMap = new Map()
formItemMap.set('label', Label)
formItemMap.set('placeholder', Placeholder)

// 编辑组件块
export const EditComponent = (key, value, editer) => {
  if (formItemMap.has(key)) {
    let Component = formItemMap.get(key)
    return <Component key={`${editer.nodeId}-${key}`} valueKey={key} value={value} editer={editer} />
  }
  return ''
}
