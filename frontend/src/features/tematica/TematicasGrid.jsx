import { Link } from 'react-router-dom'
import { FileCard } from "../../components/file/FileCard";
import { useAppStore } from '../../store/app.store';
import { useEffect } from 'react';
import { AlertBox } from '../../components/aler/AlertBox';

export function TematicasGrid() {
  const message = useAppStore((state) => state.authMessage);
  const tematicas = useAppStore((state) => state.tematicas);
  const getTematicas = useAppStore((state) => state.getTematicas);

  useEffect(() => {
    getTematicas()
  })

  return (
    <>
      {message && <div className='max-view-md'><AlertBox title="Alerta" body={message} type="warning" /></div>}
      <div className="grid_spacer_slot max-view-lg">
        {tematicas.map((item) =>
          <Link key={item.unombre} to={`/tematica/${item.unombre}`}>
            <FileCard title={item.nombre} />
          </Link>
        )}
      </div>

    </>
  )
}
