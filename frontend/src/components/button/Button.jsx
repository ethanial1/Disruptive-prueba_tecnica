export function Button({ title, icon }) {
  return (
    <button className="button button_icon d-flex vaxis-center">
      <span>{title}</span>
      {icon && <i className={`bx ${icon}`} ></i>}
    </button>
  )
}
