import useDrop from './useDrop'

const Container = (props) => {
  const { dropProps } = useDrop({dropCb: props.dropCb})
  return props.children({
    dropProps
  })
}

export default Container
