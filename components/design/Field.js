import Drag from '../drag'
import style from './style.less'
import { useDesign } from '../../components/design/useTreeReducer'

const Field = ({ node, isEdit }) => {
  const { id, params } = node
  const [, dispatch] = useDesign()
  const handleDelete = (ev) => {
    ev.stopPropagation()
    dispatch({type: 'delete', id})
  }
  return (
    <Drag.Item
      componentId={params.componentId}
      id={id}
      dropEnterCb={dispatch}
      dropLeaveCb={dispatch}
      dragEndCb={dispatch}
    >
      {({ dragProps, dragOverProps }) => (
        <div
          {...dragProps} {...dragOverProps}
          className={`${style.design_placeholder} ${isEdit && style.design_placeholder_select}`}
          onClick={() => dispatch({type: 'select', id})}
        >
          <span>{params.editer.getFieldItem('label')}</span>
          <span className={style.design_placeholder_right}>{params.editer.getFieldItem('placeholder')}</span>
          <span
            className={style.design_placeholder_close}
            onClick={handleDelete}
          >
            <i className="iconfont iconclose"></i>
          </span>
        </div>
      )}
    </Drag.Item>
  )
}

export default Field
