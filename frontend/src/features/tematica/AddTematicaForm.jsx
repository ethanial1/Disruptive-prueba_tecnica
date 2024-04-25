import { Button } from "../../components/button/Button";
import { CheckBox } from "../../components/checkbox/CheckBox";
import { ModalBox } from "../../components/modal/ModalBox";
import { SeachInput } from "../../components/search/SearchInput";

export function AddTematicaForm({ visible, handleClose }) {
  return (
    <ModalBox title="Nueva temática" visible={visible} handleClose={handleClose} >
      <div>
        <SeachInput placeholder="Nombre" border />
        <div style={{height: 20}}></div>
        <div>
          <CheckBox id="image" title="Imagen" />
          <CheckBox id="video" title="Video" />
          <CheckBox id="text" title="Texto" />
        </div>
        <div style={{width: 'min-content', marginLeft: 'auto'}}>
          <Button title="Guardar" icon="bx-chevron-right" />
        </div>
      </div>
    </ModalBox>
  )
}
