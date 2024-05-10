import Legend from "./Legend";
import RowLegend from "./RowLegend";
import Square from "./Square";
import MobLegend from "./mobile/MobLegend";
import MobRowLegend from "./mobile/MobRowLegend";

interface GridProps {
  weeksDifference: number;
}

const Calendrier: React.FC<GridProps> = ({ weeksDifference }) => {
  const onSquareDarken = (row: number, column: number) => {
    // You can add any logic here to be executed when a square is darkened
  };

  const rows = Array.from(Array(91).keys());
  const columns = Array.from(Array(52).keys());

  const isSquareDark = (row: number, column: number) => {
    return row * columns.length + column <= weeksDifference;
  };

  return (
    <div className="grid  justify-center">
      <div className="hidden lg:block">
        <Legend />
        <RowLegend />
      </div>
      <div className="lg:hidden">
        <MobLegend />
        <MobRowLegend />
      </div>

      {rows.map((row) => (
        <div key={row} className="row">
          {columns.map((column) => (
            <Square
              key={`${row}-${column}`}
              isDark={isSquareDark(row, column)}
              onSquareDarken={() => onSquareDarken(row, column)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendrier;
