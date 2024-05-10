import styles from "@/styles/RowLegend.module.css";

const MobRowLegend = () => {
  const rowLegendItems = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
  ];
  const rowHeight = 0.125; // 10px for the square + 1px for each border (top and bottom)
  const rowMargin = 0.25; // The bottom margin of the square

  return (
    <div className={styles.rowLegend}>
      {rowLegendItems.map((item, index) => (
        <div
          key={item}
          className={styles.rowLegendItem}
          style={{ top: `${(item - 1) * (rowHeight + rowMargin)}rem` }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default MobRowLegend;
