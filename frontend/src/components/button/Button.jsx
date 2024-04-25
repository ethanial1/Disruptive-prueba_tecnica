export function Button({ title, disabled, icon, handleClick }) {
  return (
    <button
      className="button button_icon d-flex vaxis-center"
      onClick={handleClick}
      disabled={disabled}
    >
      <span>{title}</span>
      {icon && <i className={`bx ${icon}`} ></i>}
    </button>
  )
}
