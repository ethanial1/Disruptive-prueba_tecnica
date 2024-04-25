import { AlertBox } from "../../components/aler/AlertBox";
import { FileCard } from "../../components/file/FileCard";
import { useAppStore } from "../../store/app.store";

export function TematicaGrid() {
  const message = useAppStore((state) => state.authMessage);
  const biblioteca = useAppStore((state) => state.biblioteca);

  return (
    <>
      {message && <AlertBox title="Alerta" body={message} type="warning" />}
      <div className="grid_spacer_slot max-view-lg">
        {biblioteca.map((item) => <FileCard key={item._id} category="text" />)}
      </div>
    </>
  )
}
