const CommonButton = ({ children, onClick, type = 'default' }) => (
  <>
    <button className={`common-button common-button__${type}`} onClick={onClick}>{children}</button>
    <style jsx global>{`
      .common-button {
        height: 32px;
        font-size: 12px;
        border-width: 1px;
        border-color: #FFF;
        border-style: solid;
        color: #FFF;
        background-color: transparent;
        border-radius: 4px;
        box-shadow: none;
        cursor: pointer;
      }
      .common-button + .common-button {
        margin-left: 4px;
      }
      .common-button__default:hover {
        background-color: rgba(255, 255, 255, .2);
      }
      .common-button__primary {
        border-color: #FFF;
        color: #3296fa;
        background-color: #FFF;
        border-radius: 4px;
        box-shadow: none;
        cursor: pointer;
      }
      .common-button__primary:hover {
        background-color: rgba(255, 255, 255, .9);
      }
    `}</style>
  </>
)

export default CommonButton
