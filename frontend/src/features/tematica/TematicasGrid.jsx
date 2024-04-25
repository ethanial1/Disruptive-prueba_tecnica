import { Link } from 'react-router-dom'
import { FileCard } from "../../components/file/FileCard";

export function TematicasGrid() {
  return (
    <div className="grid_spacer_slot max-view-lg">
      <Link to="/tematica">
        <FileCard category="text" title="Texto de ejemplo" content="Hola mundo, este es un ejemplo" />
      </Link>
      <FileCard category="imagen" />
      <FileCard category="Text" />
    </div>
  )
}
