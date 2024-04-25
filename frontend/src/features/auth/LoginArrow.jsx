import { LoginForm } from './LoginForm';
import { Button } from "../../components/button/Button";
import { useState } from 'react';
import { useAppStore } from '../../store/app.store';
import { Loader } from '../../components/loader/Loader';

export function LoginArrow() {
  const userActive = useAppStore((state) => state.user);
  const loading = useAppStore((state) => state.authLoading);

  const [visible, setVisible] = useState(false);

  if (userActive) return <span></span>

  return (
    <>
      {loading && <Loader />}
      {!loading && <div className="d-flex haxis-space-between vaxis-center" style={{height: 100}}>
        <Button title="Iniciar sesión" icon="bx-donate-blood" handleClick={() => setVisible(true)} />
      </div>}
      <LoginForm visible={visible} handleClose={() => setVisible(false)} />
    </>
  )
}
