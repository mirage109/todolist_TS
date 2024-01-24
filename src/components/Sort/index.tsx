import Style from "./style.module.css";

interface SortProps {
  sortByName(): void;
  sortByDate(): void;
}
export const Sort = ({ sortByName, sortByDate }: SortProps) => {
  return (
    <div className={Style["sort-div"]}>
      <button className={Style["sort-button"]} onClick={() => sortByName()}>
        Sort by Name
      </button>
      <button className={Style["sort-button"]} onClick={() => sortByDate()}>
        Sort by date
      </button>
    </div>
  );
};
