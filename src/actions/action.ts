import { IAction } from "../interface/action";
import { IContact } from "../interface/contact";
import { enumContacts } from "../interface/enum";
import { IState } from "../interface/state";
import { IUpdate } from "../interface/update";

export const contactsAction = (state: IState, action: IAction): IState => {
    switch (action.type) {
      case enumContacts.ADD_CONTACT:
        return {
          ...state,
          contacts: [...state.contacts, action.payload as IContact]
        };
      case   enumContacts.UPDATE_CONTACT:
        const { id, updates } = action.payload as IUpdate;
        return {
          ...state,
          contacts: state.contacts.map((contact) => {
            if (contact.id === id) {
              return {
                ...contact,
                ...updates
              };
            }
            return contact;
          })
        };
      case  enumContacts.DELETE_CONTACT: {
        const { id } = action.payload;
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== id)
        };
      }
      default:
        return state;
    }
  };