import { IAction } from "./action";

export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
  }

  export interface IContactFormProps {
    dispatch: React.Dispatch<IAction>;
    dataToEdit: IContact | undefined;
    toggleModal: () => void;
  }

  export interface IContactListProps {
    contacts: IContact[];
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<IAction>;
  }