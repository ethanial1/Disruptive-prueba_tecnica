import { useEffect } from "react";
import { Statistic } from "../../components/statistic/Statistic";
import { useAppStore } from "../../store/app.store";

export function StatisticRow() {
  const tematica = useAppStore((state) => state.tematica);
  const statistics = useAppStore((state) => state.statistics);
  const getStatistics = useAppStore((state) => state.getStatistics);

  useEffect(() => {
    getStatistics(tematica?.unombre);
  }, [tematica]);

  return (
    <div className="d-flex search_header_statistics">
      {statistics.map((item) => <Statistic key={item._id} icon="bxs-video" title={item._id} value={item.count} />)}
    </div>
  )
}
