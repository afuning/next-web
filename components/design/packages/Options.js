import OptionsType from './components/OptionsType'
const Options = ({ children, value, valueKey }) => (
  <div>
    <OptionsType
      value={value}
      label="选项"
      tip="最多200项，每项最多50个字"
    ></OptionsType>
  </div>
)

export default Options
