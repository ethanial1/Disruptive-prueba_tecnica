import { useState } from "react";
import { Button } from "../../components/button/Button";
import { ModalBox } from "../../components/modal/ModalBox";
import { InputText } from "../../components/search/InputText";
import { useAppStore } from "../../store/app.store";

export function LoginForm({ visible, handleClose }) {
  const loginMethod = useAppStore((state) => state.loginMethod);
  const [formData, setFormData] = useState({email: '', pass: ''})

  function handleSubmit(e) {
    e.preventDefault();
    loginMethod(formData.email, formData.pass);
    setFormData({email: '', pass: ''})
    handleClose()
  }

  function handleChange(type, e) {
    setFormData({
      ...formData,
      [type]: e.target.value,
    })
  }

  return (
    <ModalBox title="Inicio de sesión" visible={visible} handleClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Correo"
          placeHolder="ejemplo@mail.com"
          onChange={(e) => handleChange('email', e)}
        />
        <div style={{height: 20}}></div>
        <InputText
          label="Contraseña"
          placeHolder="****"
          inputType="password"
          onChange={(e) => handleChange('pass', e)}
        />
        <div style={{height: 20}}></div>
        <div style={{width: 120, marginLeft: 'auto',}}>
          <Button title="Iniciar sesión" icon="bx-chevron-right" />
        </div>
      </form>
    </ModalBox>
  )
}
