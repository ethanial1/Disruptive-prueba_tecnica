import { Link } from 'react-router-dom'
import { FileCard } from "../../components/file/FileCard";
import { useAppStore } from '../../store/app.store';
import { useEffect } from 'react';

export function TematicasGrid() {
  const tematicas = useAppStore((state) => state.tematicas);
  const getTematicas = useAppStore((state) => state.getTematicas);

  useEffect(() => {
    getTematicas()
  })

  return (
    <div className="grid_spacer_slot max-view-lg">
      {tematicas.map((item) =>
        <Link key={item.unombre} to={`/tematica/${item.uname}`}>
          <FileCard
            category="text"
            title={item.nombre}
          />
        </Link>
      )}
    </div>
  )
}
