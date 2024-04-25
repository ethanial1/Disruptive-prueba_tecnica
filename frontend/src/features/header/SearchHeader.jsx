import { useState } from "react";
import { CircleButton } from "../../components/button/CircleButton";
import { SeachInput } from "../../components/search/SearchInput";
import { SelectOptions } from "../../components/select/SelectOptions";
import { Statistic } from "../../components/statistic/Statistic";
import { AddTematicaForm } from "../tematica/AddTematicaForm";

export function SearchHeader() {
  const [showNewTematica, setShowNewTematica] = useState(false);

  return (
    <>
      <div className="search_header">
        <div className="search_header_cover">
          <img src="assets/mexico.png" alt="imagen-fondo" />
        </div>
        <div className="max-view-md search_header_data">
          <div className="d-flex haxis-space-between vaxis-center">
            <div>
              <h5 className="f-title">Hola, Miguel</h5>
              <span className="f-subtitle">miguel@gmail.com</span>
            </div>
            <SeachInput searchButton={true} placeholder="Buscar temática" />
          </div>
          <div
            className="d-flex haxis-space-between vaxis-center"
            style={{height: 100}}
          >
            <h5 className="f-title">Deportes</h5>
            <div className="d-flex vaxis-center">
              <SelectOptions />
              <div style={{width: 5}}></div>
              <CircleButton icon="bx-plus" handleClick={() => setShowNewTematica(true)} />
              <div style={{width: 5}}></div>
              <CircleButton icon="bxs-cloud-upload" />
              <div style={{width: 5}}></div>
              <CircleButton icon="bxs-exit" />
            </div>
          </div>
          <div className="d-flex search_header_statistics">
            <Statistic icon="bxs-video" title="Videos" value="+100" />
            <Statistic icon="bxs-image-alt" title="Imágenes" value="57" />
            <Statistic icon="bx-text" title="Textos" value="28" />
          </div>
        </div>
      </div>
      <AddTematicaForm
        visible={showNewTematica}
        handleClose={() => setShowNewTematica(false)}
      />
    </>
  )
}
