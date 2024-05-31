import { FC } from "react";
import { IContact } from "../interface/contact";
import { IExtraProps } from "../interface/action";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { enumContacts } from "../interface/enum";

const ContactItem: FC<IContact & IExtraProps> = ({
    id,
    firstName,
    lastName,
    phone,
    handleEdit,
    dispatch
  }) => {
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phone}</td>
        <td>
          <AiFillEdit size={20} onClick={() => handleEdit(id)} className='icon' />
        </td>
        <td>
          <AiFillDelete
            size={20}
            onClick={() => {
              const confirmDelete = window.confirm(
                `Are you sure you want to delete contact for user ${firstName} ${lastName}?`
              );
              if (confirmDelete) {
                dispatch({
                  type: enumContacts.DELETE_CONTACT,
                  payload: { id }
                });
              }
            }}
            className='icon'
          />
        </td>
      </tr>
    );
  };
  
  export default ContactItem;
  