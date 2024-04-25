import { SeachInput } from "../../components/search/SearchInput";
import { Statistic } from "../../components/statistic/Statistic";
import { LoginArrow } from "../auth/LoginArrow";
import { TematicaArrowOptions } from "../tematica/TematicaArrowOptions";
import { UserCard } from "../user/UserCard";

export function SearchHeader() {
  return (
    <>
      <div className="search_header">
        <div className="search_header_cover">
          <img src="/assets/mexico.png" alt="imagen-fondo" />
        </div>
        <div className="max-view-md search_header_data">
          <div className="d-flex haxis-space-between vaxis-center">
            <UserCard />
            <SeachInput searchButton={true} placeholder="Buscar temática" />
          </div>
          <LoginArrow />
          <TematicaArrowOptions />
          <div className="d-flex search_header_statistics">
            <Statistic icon="bxs-video" title="Videos" value="+100" />
            <Statistic icon="bxs-image-alt" title="Imágenes" value="57" />
            <Statistic icon="bx-text" title="Textos" value="28" />
          </div>
        </div>
      </div>
    </>
  )
}
