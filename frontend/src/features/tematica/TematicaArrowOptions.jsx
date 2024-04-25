import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleButton } from "../../components/button/CircleButton";
import { SelectOptions } from "../../components/select/SelectOptions";
import { useAppStore } from "../../store/app.store";
import { AddTematicaForm } from "./AddTematicaForm";
import { AddContentForm } from "../biblioteca/AddContentForm";

export function TematicaArrowOptions() {
  const userActive = useAppStore((state) => state.user);
  const tematica = useAppStore((state) => state.tematica);
  const setTematicaActiva = useAppStore((state) => state.setTematicaActiva);

  const [showModals, setShowModals] = useState({tematica: false, contenido: false});
  const navigate = useNavigate();

  function handleBack() {
    setTematicaActiva(null);
    navigate(-1);
  }

  function handleModals(type, val) {
    showModals[type] = val;
    setShowModals({...showModals});
  }

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
              <CircleButton icon="bx-chevron-left" handleClick={handleBack} />
              <div style={{ width: 5 }}></div>
            </>
          }
          <h5 className="f-title">{tematica?.nombre ? tematica.nombre : 'Temáticas Disponibles'}</h5>
        </div>
        <div className="d-flex vaxis-center">
          {tematica && <SelectOptions />}
          <div style={{ width: 5 }}></div>
          {!tematica && <CircleButton
            icon="bx-plus"
            handleClick={() => handleModals('tematica', true)}
          />}
          {tematica &&
            <>
              <div style={{ width: 5 }}></div>
              <CircleButton
                icon="bxs-cloud-upload"
                handleClick={() => handleModals('contenido', true)}
              />
            </>
          }
          <div style={{ width: 5 }}></div>
          <CircleButton icon="bxs-exit" />
        </div>
      </div>
      <AddTematicaForm
        visible={showModals.tematica}
        handleClose={() => handleModals('tematica', false)}
      />
      <AddContentForm
        visible={showModals.contenido}
        handleClose={() => handleModals('contenido', false)}
      />
    </>
  );
}
