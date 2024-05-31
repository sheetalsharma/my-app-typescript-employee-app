import { IContact } from "./contact";
import { enumContacts } from "./enum";
import { IUpdate } from "./update";

export interface IAction {
    type: enumContacts.ADD_CONTACT | enumContacts.UPDATE_CONTACT | enumContacts.DELETE_CONTACT
    payload: IContact | IUpdate;
  }
  
  export interface IExtraProps {
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<IAction>;
  }