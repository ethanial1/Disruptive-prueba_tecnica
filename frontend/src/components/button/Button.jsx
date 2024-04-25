export function Button({ title, icon, handleClick }) {
  return (
    <button className="button button_icon d-flex vaxis-center" onClick={handleClick}>
      <span>{title}</span>
      {icon && <i className={`bx ${icon}`} ></i>}
    </button>
  )
}
