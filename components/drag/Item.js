import React, { useState, useRef } from 'react'
import useDrag from './useDrag'
import useDragOver from './useDragOver'
const Item = (props) => {
  const dragRef = useRef()

  const { dragProps } = useDrag({
    dragtype: props.dragtype,
    node: { ...props.node },
    dragDom: () => {
      return dragRef.current.getDom()
    },
    dragStartCb: () => {
    }
  })
  const { dragOverProps } = useDragOver({
    dragtype: props.dragtype,
    node: { ...props.node },
    dropEnterCb: props.dropEnterCb,
    dropLeaveCb: props.dropLeaveCb
  })

  return (
    <>
      {props.children({
        dragProps,
        dragOverProps,
        dragRef
      })}
    </>
  )
}

export default Item
