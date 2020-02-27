import InputType from './components/InputType'
import { useDesign } from '../useTreeReducer'
const Placeholder = ({ children, value, valueKey }) => {
  const [, dispatch] = useDesign()

  // 编辑文字
  const handleChangeValue = (value) => {
    dispatch({ type: 'edit', editer: { [valueKey]: value } })
  }
  return (
    <div>
      <InputType
        value={value}
        label="提示文字"
        tip="最多50字"
        onChangeText={handleChangeValue}
      />
    </div>
  )
}

export default Placeholder
