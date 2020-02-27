import InputType from './components/InputType'
import { useDesign } from '../useTreeReducer'
const Label = ({ children, value, valueKey }) => {
  const [, dispatch] = useDesign()

  // 编辑文字
  const handleChangeValue = (value) => {
    console.log(value)
    dispatch({ type: 'edit', editer: { [valueKey]: value } })
  }

  return (
    <div>
      <InputType
        value={value}
        label="标题"
        tip="最多20字"
        onChangeText={handleChangeValue}
      />
    </div>
  )
}

export default Label
