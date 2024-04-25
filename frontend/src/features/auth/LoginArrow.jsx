import { LoginForm } from './LoginForm';
import { Button } from "../../components/button/Button";
import { useState } from 'react';
import { useAppStore } from '../../store/app.store';
import { Loader } from '../../components/loader/Loader';
import { RegisterForm } from './RegisterForm';

export function LoginArrow() {
  const userActive = useAppStore((state) => state.user);
  const loading = useAppStore((state) => state.authLoading);

  const [visible, setVisible] = useState({login: false, register: false});

  function handleVisible(type, val) {
    visible[type] = val;
    setVisible({...visible});
  }

  if (userActive) return <span></span>

  return (
    <>
      {loading && <Loader />}
      {!loading &&
        <div className="d-flex haxis-space-between vaxis-center" style={{height: 100}}>
          <div className='d-flex'>
            <Button title="Iniciar sesión" icon="bx-donate-blood" handleClick={() => handleVisible('login', true)} />
            <div style={{width: 10}}></div>
            <Button title="Registro" icon="bx-street-view" handleClick={() => handleVisible('register', true)} />
          </div>
        </div>
      }
      <LoginForm
        visible={visible.login}
        handleClose={() => handleVisible('login', false)}
      />
      <RegisterForm
        visible={visible.register}
        handleClose={() => handleVisible('register', false)}
      />
    </>
  )
}
