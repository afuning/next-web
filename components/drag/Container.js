import useDrop from './useDrop'
import React from 'react'

const Container = (props) => {
  const { dropProps } = useDrop({dragtype: props.dragtype, dropCb: props.dropCb})
  return (
    <React.Fragment>
      {props.children({
        dropProps
      })}
    </React.Fragment>
  )
}

export default Container
