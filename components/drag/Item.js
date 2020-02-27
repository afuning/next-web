import useDrag from './useDrag'
import useDragOver from './useDragOver'
const Item = (props) => {
  const { dragProps } = useDrag({
    node: { componentId: props.componentId, id: props.id }
  })
  const { dragOverProps } = useDragOver({
    node: { componentId: props.componentId, id: props.id },
    dropEnterCb: props.dropEnterCb,
    dropLeaveCb: props.dropLeaveCb
  })
  return props.children({
    dragProps,
    dragOverProps
  })
}

export default Item
