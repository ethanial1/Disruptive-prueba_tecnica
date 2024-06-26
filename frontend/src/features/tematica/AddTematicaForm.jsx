import { useState } from "react";
import { Button } from "../../components/button/Button";
import { CheckBox } from "../../components/checkbox/CheckBox";
import { ModalBox } from "../../components/modal/ModalBox";
import { useAppStore } from "../../store/app.store";
import { InputText } from "../../components/search/InputText";

const initState = { nombre: '', permisos: [], imagen: '' };

export function AddTematicaForm({ visible, handleClose }) {
  const addTematica = useAppStore((state) => state.addTematica);
  const [formData, setFormData] = useState(initState);

  function handleSubmit(e) {
    e.preventDefault();
    const permisos = [];
    const target = e.target;
    target.querySelectorAll('input[type=checkbox]:checked').forEach((item) => {
      permisos.push(item.value)
    })
    if (!permisos.length) return;

    formData.permisos = permisos;
    setFormData(formData)
    addTematica({...formData});

    setFormData(initState);
    handleClose();
  }

  return (
    <ModalBox title="Nueva temática" visible={visible} handleClose={handleClose} >
      <form id="tematica-form-slot" onSubmit={handleSubmit}>
      <InputText
          id="tenamtica-name"
          label="Url Portada"
          placeHolder="https://"
          onChange={(e) => setFormData({...formData, imagen: e.target.value})}
        />
        <div style={{height: 20}}></div>
        <InputText
          id="tenamtica-name"
          label="Nombre"
          placeHolder="......"
          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
        />
        <div style={{height: 20}}></div>
        <div>
          <CheckBox id="image" title="Imagen" value="imagen" />
          <CheckBox id="video" title="Video" value="video" />
          <CheckBox id="text" title="Texto" value="texto" />
        </div>
        <div style={{width: 'min-content', marginLeft: 'auto'}}>
          <Button title="Guardar" icon="bx-chevron-right" />
        </div>
      </form>
    </ModalBox>
  )
}
