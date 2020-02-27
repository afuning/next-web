import React from 'react'
import style from './style.less'
import { EditComponent } from './config'
import { useDesign } from '../../components/design/useTreeReducer'
const EditContainer = () => {
  const [state] = useDesign()
  const { params: { editer } } = state.current
  return (
    <React.Fragment>
      <EditContainerTitle>{editer.getFieldItem('name')}</EditContainerTitle>
      <div className={style.design_edit_content}>
        {
          Object.keys(editer.getField()).map(k => (
            EditComponent(k, editer.getFieldItem(k), editer)
          ))
        }
      </div>
    </React.Fragment>
  )
}

const EditContainerTitle = ({ children }) => (
  <div className={style.design_edit_title}>{children}</div>
)

export default EditContainer
