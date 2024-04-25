import { AlertBox } from "../../components/aler/AlertBox";
import { Button } from "../../components/button/Button";
import { ModalBox } from "../../components/modal/ModalBox";
import { InputText } from "../../components/search/InputText";

export function LoginForm({ visible, handleClose }) {
  return (
    <ModalBox title="Inicio de sesión" visible={visible} handleClose={handleClose}>
      <div>
        <InputText label="Correo" placeHolder="ejemplo@mail.com" />
        <div style={{height: 20}}></div>
        <InputText label="Contraseña" placeHolder="****" />
        <div style={{height: 20}}></div>
        <AlertBox title="Alerta" body="El correo no es válido" type="success" />
        <div style={{width: 120, margin: '1rem 0 0 auto'}}>
          <Button title="Iniciar sesión" icon="bx-chevron-right" />
        </div>
      </div>
    </ModalBox>
  )
}
