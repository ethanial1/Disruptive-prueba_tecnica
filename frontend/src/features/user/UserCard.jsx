import { useAppStore } from "../../store/app.store";

export function UserCard() {
  const user = useAppStore((state) => state.user);

  return (
    <div>
      <h5 className="f-title">Hola, {user?.username ? user.username : '👋'}</h5>
      {user?.email && <span className="f-subtitle">{user.email}</span>}
      {!user?.email && <span>Inicia sesión para continuar</span>}
    </div>
  )
}
