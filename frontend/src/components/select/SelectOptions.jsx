import { useState } from "react"
import './select.css';

export function SelectOptions({handleChange}) {
  const [option, setOption] = useState('');

  function onChange(e) {
    const value = e.target.value;
    setOption(value);
    handleChange(value);
  }

  return (
    <select className="select_options" name="tipos" id="tipos-archico" value={option} onChange={onChange}>
      <option value="" disabled>Filtrar por:</option>
      <option value="texto">Texto</option>
      <option value="video">Video</option>
      <option value="imagen">Imagen</option>
    </select>
  )
}
