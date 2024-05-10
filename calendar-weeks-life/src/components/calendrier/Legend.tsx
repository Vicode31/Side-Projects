import styles from "@/styles/Legend.module.css";

const Legend = () => {
  const legendItems = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const columnWidth = 0.75; // 10px for the square + 1px for each border (left and right)
  const margin = 0.5; // The right margin of the square
  const firstColumnMargin = -0.375; // The left margin of the first square in each row

  return (
    <>
      <div className={styles.legend}>
        {legendItems.map((item, index) => (
          <div
            key={item}
            className={styles.legendItem}
            style={{
              width: "1.25rem",
              left: `${
                (item - 1) * (columnWidth + margin) + firstColumnMargin
              }rem`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Legend;
