import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleButton } from "../../components/button/CircleButton";
import { SelectOptions } from "../../components/select/SelectOptions";
import { useAppStore } from "../../store/app.store";
import { AddTematicaForm } from "./AddTematicaForm";

export function TematicaArrowOptions() {
  const userActive = useAppStore((state) => state.user);
  const tematica = useAppStore((state) => state.tematica);

  const [showNewTematica, setShowNewTematica] = useState(false);
  const navigate = useNavigate();

  if (!userActive) return <span></span>

  return (
    <>
      <div
        className="d-flex haxis-space-between vaxis-center"
        style={{ height: 100 }}
      >
        <div className="d-flex vaxis-center">
          {tematica &&
            <>
              <CircleButton icon="bx-chevron-left" handleClick={() => navigate(-1)} />
              <div style={{ width: 5 }}></div>
            </>
          }
          <h5 className="f-title">{tematica?.nombre ? tematica.nombre : 'Temáticas Disponibles'}</h5>
        </div>
        <div className="d-flex vaxis-center">
          {tematica && <SelectOptions />}
          <div style={{ width: 5 }}></div>
          <CircleButton
            icon="bx-plus"
            handleClick={() => setShowNewTematica(true)}
          />
          {tematica &&
            <>
              <div style={{ width: 5 }}></div>
              <CircleButton icon="bxs-cloud-upload" />
            </>
          }
          <div style={{ width: 5 }}></div>
          <CircleButton icon="bxs-exit" />
        </div>
      </div>
      <AddTematicaForm
        visible={showNewTematica}
        handleClose={() => setShowNewTematica(false)}
      />
    </>
  );
}
