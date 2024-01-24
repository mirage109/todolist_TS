import { Lists } from "../../State"
import formStyle from "./style.module.css"
import { SelectBox } from "../SelectBox";

interface AddListFormProps {
folder: Lists[],
setListname: React.Dispatch<React.SetStateAction<string>>
listName:string,
handleListSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const AddListForm = ({folder, setListname, listName, handleListSubmit}:AddListFormProps)=>{
     
    return(
        <form
          className={formStyle["form-style-list"]}
          onSubmit={handleListSubmit}
        >
          <div>
            <label htmlFor="text">ToDo List:</label>
            <input
              className={formStyle["input-style"]}
              type="text"
              onChange={(event) => setListname(event.target.value)}
              value={listName}
              placeholder="New list"
            />
          </div>
          <div>
            <button className={formStyle["button-style"]}>Add List Name</button>
          </div>
          <SelectBox folder={folder} setListname={setListname} />
        </form>
    )
}