export function InputText({id, inputType, readOnly, label, value, placeHolder, onChange}) {
  return (
    <div>
      <label htmlFor={id} className="f-subtitle">{label}</label>
      <div className="search_slot" style={{boxShadow: 'var(--box-shadow-md)'}}>
        <input
          id={id}
          type={inputType}
          readOnly={readOnly}
          name="basic-input-text"
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          style={{width: '100%'}}
        />
      </div>
    </div>
  )
}

InputText.defaultProps = {
  inputType: 'text'
}
