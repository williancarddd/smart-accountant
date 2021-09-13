
export function Button({children, onButtonClick, disabledButton}){
  return (
    <button disabled={disabledButton} onClick={onButtonClick} style={{fontSize: '20px'}}>{children}</button>
  )
} 