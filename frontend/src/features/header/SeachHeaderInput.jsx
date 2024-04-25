import { CircleButton } from "../../components/button/CircleButton";
import { SeachInput } from "../../components/search/SearchInput";
import { useAppStore } from "../../store/app.store";

export function SearchHeaderInput() {
  const tematica = useAppStore((state) => state.tematica);
  const filterTematicaByName = useAppStore((state) => state.filterTematicaByName);
  const filterBibliotecaByName = useAppStore((state) => state.filterBibliotecaByName);

  const filterTematicaActive = useAppStore((state) => state.filterTematicaActive);
  const filterBibliotecaActive = useAppStore((state) => state.filterBibliotecaActive);

  const cleanTematicaFilter = useAppStore((state) => state.cleanTematicaFilter);
  const cleanBibliotecaFilter = useAppStore((state) => state.cleanBibliotecaFilter);

  function handleSubmit(text) {
    if (tematica) {
      filterBibliotecaByName(text)
      return;
    }

    filterTematicaByName(text)
  }

  return (
    <div className="d-flex">
      <SeachInput
        searchButton={true}
        onSubmit={handleSubmit}
        placeholder={tematica ? "Buscar por nombre" : "Buscar temática"}
      />
      {(!tematica && filterTematicaActive) &&
        <CircleButton
          icon="bx-revision"
          handleClick={cleanTematicaFilter}
        />
      }
      {(tematica && filterBibliotecaActive) &&
        <CircleButton
          icon="bx-revision"
          handleClick={cleanBibliotecaFilter}
        />
      }
    </div>
  )
}
