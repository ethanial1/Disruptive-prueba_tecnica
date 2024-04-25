import { useMemo } from "react";
import './alert.css';

export function AlertBox({type, title, body}) {
  const icon = useMemo(() => getIconType(type), [type]);
  const color = useMemo(() => getColorType(type), [type]);

  return (
    <div className="alert_box" style={{backgroundColor: color}}>
      <i className={`bx ${icon}`} ></i>
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  )
}

function getIconType(type) {
  if (type === 'success') return 'bxs-check-circle';
  if (type === 'warning') return 'bxs-error';
  return 'bxs-error-alt';
}

function getColorType(type) {
  if (type === 'success') return 'var(--color-manzana)';
  if (type === 'warning') return 'var(--color-lima)';
  return 'red';
}
