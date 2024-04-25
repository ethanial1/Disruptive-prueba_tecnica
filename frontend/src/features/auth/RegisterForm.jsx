import { useState } from "react";
import { Button } from "../../components/button/Button";
import { ModalBox } from "../../components/modal/ModalBox";
import { InputText } from "../../components/search/InputText";
import { useAppStore } from "../../store/app.store";
import { isEmailValid } from "../../utils/data";
import { AlertBox } from "../../components/aler/AlertBox";
import { RadioButton } from "../../components/radio/RadioButton";

const initState = {username: '', email: '', pass: '', type: '', msg: ''};

export function RegisterForm({ visible, handleClose }) {
  const registerUser = useAppStore((state) => state.registerUser);
  const [formData, setFormData] = useState(initState)

  function handleSubmit(e) {
    e.preventDefault();

    if (!isEmailValid(formData.email)) {
      formData.msg = 'Ingrese un correo válido';
      setFormData({...formData});
      return;
    }

    if (formData.pass.length < 6) {
      formData.msg = 'La contraseña debe tener más de 6 caracteres';
      setFormData({...formData});
      return;
    }

    registerUser(
      formData.username,
      formData.email,
      formData.pass,
      formData.type,
    );
    setFormData(initState)
    handleClose()
  }

  function handleChange(type, e) {
    setFormData({
      ...formData,
      [type]: e.target.value,
    })
  }

  return (
    <ModalBox title="Registro" visible={visible} handleClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Alias"
          placeHolder="usuario"
          onChange={(e) => handleChange('username', e)}
        />
        <div style={{height: 20}}></div>
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
        <div style={{height: 10}}></div>
        <p className="f-subtitle">Rol</p>
        <fieldset
          style={{border: 'none'}}
          className="d-flex"
          defaultValue="texto"
          onChange={(e) => handleChange('type', e)}
        >
          <RadioButton id="lector" label="Lector" name="userType" value="lector" />
          <div style={{width: 10}}></div>
          <RadioButton id="creador" label="Creador" name="userType" value="creador" />
        </fieldset>
        <div style={{height: 10}}></div>
        {formData.msg && <AlertBox title="Datos" body={formData.msg} type="warning" />}
        <div style={{height: 10}}></div>
        <div style={{width: 120, marginLeft: 'auto',}}>
          <Button title="Guardar" icon="bx-chevron-right" />
        </div>
      </form>
    </ModalBox>
  )
}
