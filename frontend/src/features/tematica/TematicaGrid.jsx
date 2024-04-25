import { AlertBox } from "../../components/aler/AlertBox";
import { FileCard } from "../../components/file/FileCard";
import { useAppStore } from "../../store/app.store";

export function TematicaGrid() {
  const message = useAppStore((state) => state.message);
  const biblioteca = useAppStore((state) => state.biblioteca);

  return (
    <>
      {message && <div className='max-view-md'><AlertBox title="Alerta" body={message} type="warning" /></div>}
      <div className="grid_spacer_slot max-view-lg">
        {biblioteca.map((item) =>
          <FileCard
            key={item._id}
            title={item.titulo}
            content={item.contenido}
            category={item.categoria}
            credito={item.credito}
          />
        )}
      </div>
    </>
  )
}
