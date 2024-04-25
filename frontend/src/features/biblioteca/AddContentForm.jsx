import { useState } from "react";
import { ModalBox } from "../../components/modal/ModalBox";
import { RadioButton } from "../../components/radio/RadioButton";
import { Button } from "../../components/button/Button";
import { useAppStore } from "../../store/app.store";
import { AlertBox } from "../../components/aler/AlertBox";
import { isUrlValid } from "../../utils/data";
import { InputText } from "../../components/search/InputText";

const initForm = {categoria: '', titulo: '', contenido: '', msg: ''};

export function AddContentForm({ visible, handleClose }) {
  const addContent = useAppStore((state) => state.addContent);
  const [formData, setFormData] = useState(initForm);

  function handleChange(type, e) {
    const val = e.target.value;
    formData[type] = val;
    setFormData({...formData});
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.titulo.isEmpty()) {
      setFormData({ ...formData, msg: 'Por favor, ingrese un titulo.' })
      return;
    }

    if (formData.contenido.isEmpty() || formData.categoria.isEmpty()) {
      setFormData({ ...formData, msg: 'Por favor, ingrese los datos correctos.' })
      return;
    }
    if (formData.categoria !== 'texto' && !isUrlValid(formData.contenido)) {
      setFormData({ ...formData, msg: 'La url no es válida. En imágenes y videos, se debe de proporcionar la url.' })
      return;
    }

    if (formData.categoria === 'video') {
      formData.contenido = formData.contenido.replace('watch?v=', 'embed/')
    }

    addContent({
      titulo: formData.titulo,
      categoria: formData.categoria,
      contenido: formData.contenido,
    });
    setFormData(initForm);
    handleClose();
  }

  return (
    <ModalBox title="Agregar contenido" visible={visible} handleClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <InputText
          id="title-content-slot"
          value={formData.titulo}
          onChange={(e) => handleChange('titulo', e)}
          placeHolder="Titulo"
        />
        <div style={{height: 20}}></div>
        <textarea
          className="textare_input"
          value={formData.contenido}
          onChange={(e) => handleChange('contenido', e)}
        />
        <div style={{height: 20}}></div>
        <fieldset
          style={{border: 'none'}}
          className="d-flex"
          defaultValue="texto"
          onChange={(e) => handleChange('categoria', e)}
        >
          <RadioButton id="texto" label="Texto" name="archivo" value="texto" />
          <div style={{width: 10}}></div>
          <RadioButton id="video" label="Video" name="archivo" value="video" />
          <div style={{width: 10}}></div>
          <RadioButton id="image" label="Imagen" name="archivo" value="imagen" />
        </fieldset>
        <div style={{height: 10}}></div>
        <p className="f-subtitle" style={{fontSize: 'smaller'}}>
          Por favor, seleccione un tipo de archivo a subir.
        </p>
        <div style={{height: 5}}></div>
        {formData.msg && <AlertBox title="Datos" body={formData.msg} type="warning" />}
        <div style={{height: 5}}></div>
        <div style={{width: 'min-content', marginLeft: 'auto'}}>
          <Button title="Guardar" icon="bx-chevron-right" />
        </div>
      </form>
    </ModalBox>
  )
}
