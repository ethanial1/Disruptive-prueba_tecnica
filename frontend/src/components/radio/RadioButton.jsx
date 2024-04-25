import './radio.css';

export function RadioButton({ id, label, name, value }) {
  return (
    <div className="radio_button">
      <input
        id={id}
        value={value}
        className="inp-cbx"
        name={name}
        type="radio"
        style={{display: 'none'}}
      />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </div>
  )
}
