import { FileCard } from "../../components/file/FileCard";
import { useAppStore } from "../../store/app.store";

export function TematicaGrid() {
  const biblioteca = useAppStore((state) => state.biblioteca);

  return (
    <div className="grid_spacer_slot max-view-lg">
      {biblioteca.map((item) => <FileCard key={item._id} category="text" />)}
    </div>
  )
}
