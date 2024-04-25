import { Link } from 'react-router-dom'
import { FileCard } from "../../components/file/FileCard";
import { useAppStore } from '../../store/app.store';
import { useEffect } from 'react';
import { AlertBox } from '../../components/aler/AlertBox';

export function TematicasGrid() {
  const message = useAppStore((state) => state.message);
  const tematicas = useAppStore((state) => state.tematicas);
  const getTematicas = useAppStore((state) => state.getTematicas);
  const getBiblioteca = useAppStore((state) => state.getBiblioteca);
  const setTematicaActiva = useAppStore((state) => state.setTematicaActiva);

  useEffect(() => {
    getTematicas()
  })

  function handleTematica(data) {
    setTematicaActiva(data);
    getBiblioteca(data.unombre);
  }

  return (
    <>
      {message && <div className='max-view-md'><AlertBox title="Alerta" body={message} type="warning" /></div>}
      <div className="grid_spacer_slot max-view-lg">
        {tematicas.map((item) =>
          <Link key={item.unombre} to={`/tematica/${item.unombre}`} onClick={() => handleTematica(item)}>
            <FileCard title={item.nombre} />
          </Link>
        )}
      </div>

    </>
  )
}
