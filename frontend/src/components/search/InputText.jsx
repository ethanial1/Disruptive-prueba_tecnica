export function InputText({id, label, value, placeHolder, onChange}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="search_slot" style={{boxShadow: 'var(--box-shadow-md)'}}>
        <input
          id={id}
          type="text"
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
