import formStyle from "./styles.module.css"
import {Lists} from "../../State"

interface SelectBoxProps{
  folder: Lists[],
  setListname: React.Dispatch<React.SetStateAction<string>>
}

export const SelectBox = ({folder, setListname}:SelectBoxProps) => {
  const onlistNameSelect = (event: any) => {
    setListname(event.target.value);
  };

  return (
    <div>
    <label>Select List:</label>
    <select
      className={formStyle["select-style"]}
      onChange={onlistNameSelect}
    >
      {folder.map((listName: Lists) => (
        <option value={listName.listname}>{listName.listname}</option>
      ))}
    </select>
  </div>
  );
};
