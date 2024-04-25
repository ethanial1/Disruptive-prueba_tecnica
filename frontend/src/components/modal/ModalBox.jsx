import { createPortal } from 'react-dom';
import { CircleButton } from "../button/CircleButton";
import './modal.css';

export function ModalBox({visible, title, handleClose, children}) {

  if (!visible) return <div></div>

  return createPortal(
    <div id="modal-box-fernando" className="modal-box">
      <div className="modal-content-box">
        <div className="d-flex haxis-space-between vaxis-center">
          <h5>{title}</h5>
          <CircleButton icon="bx-x" handleClick={handleClose} />
        </div>
        <div style={{marginTop: '1rem'}}>{children}</div>
      </div>
    </div>,
    document.body,
  )
}
