import React, { useState } from 'react'
import OptionsType from './components/OptionsType'
import { useDesign } from '../useTreeReducer'
const Options = ({ children, value, valueKey }) => {
  const [, dispatch] = useDesign()
  // 编辑选项
  const handleChangeValue = (value) => {
    console.log(value)
    dispatch({ type: 'edit', editer: { [valueKey]: value } })
  }
  // const [options, setOptions] = useState(value)
  return (<div>
    <OptionsType
      value={value}
      label="选项"
      tip="最多200项，每项最多50个字"
      onChange={handleChangeValue}
    ></OptionsType>
  </div>)
}

export default Options
