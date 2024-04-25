
import { LoginArrow } from "../auth/LoginArrow";
import { TematicaArrowOptions } from "../tematica/TematicaArrowOptions";
import { UserCard } from "../user/UserCard";
import { SearchHeaderInput } from "./SeachHeaderInput";
import { StatisticRow } from "./StaticticsRow";

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
            <SearchHeaderInput />
          </div>
          <LoginArrow />
          <TematicaArrowOptions />
          <StatisticRow />
        </div>
      </div>
    </>
  )
}
