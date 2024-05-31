import { IAction } from "./action";
import { IContact } from "./contact";

export interface IUpdate {
    id: number;
    updates?: IContact;
  }
  
  export interface IEditModalProps {
    showModal: boolean;
    dataToEdit: IContact | undefined;
    toggleModal: () => void;
    dispatch: React.Dispatch<IAction>;
  }