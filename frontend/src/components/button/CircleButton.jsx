import './circle_button.css';

export function CircleButton({icon, border, handleClick}) {
  return (
    <button
      className="circle_button button"
      onClick={handleClick}
      style={{
        boxShadow: border ? 'var(--box-shadow-md)' : '',
      }}
    >
      {icon && <i className={`bx ${icon}`} ></i>}
    </button>
  )
}
