import { Button } from "../../components/button/Button";
import { ModalBox } from "../../components/modal/ModalBox";
import { InputText } from "../../components/search/InputText";

export function RegisterForm({ visible, handleClose }) {
  return (
    <ModalBox title="Registro" visible={visible} handleClose={handleClose}>
      <div>
        <InputText label="Correo" placeHolder="ejemplo@mail.com" />
        <div style={{height: 20}}></div>
        <InputText label="Contraseña" placeHolder="****" />
        <div style={{width: 120, margin: '1rem 0 0 auto'}}>
          <Button title="Guardar" icon="bx-chevron-right" />
        </div>
      </div>
    </ModalBox>
  )
}
