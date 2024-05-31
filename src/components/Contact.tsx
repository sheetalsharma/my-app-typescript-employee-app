import { FC, useState } from "react";
import { IContactFormProps } from "../interface/contact";
import { enumContacts } from "../interface/enum";
import { Button, Form } from 'react-bootstrap';

const ContactForm: FC<IContactFormProps> = ({
    dispatch,
    dataToEdit,
    toggleModal
  }) => {
    const [contact, setContact] = useState({
      firstName: dataToEdit?.firstName ? dataToEdit.firstName : '',
      lastName: dataToEdit?.lastName ? dataToEdit.lastName : '',
      phone: dataToEdit?.phone ? dataToEdit.phone : ''
    });
  
    const [errorMsg, setErrorMsg] = useState('');
  
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
  
      setContact((prevState) => {
        return {
          ...prevState,
          [name]: value
        };
      });
    };
  
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { firstName, lastName, phone } = contact;
  
      if (
        firstName.trim() === '' ||
        lastName.trim() === '' ||
        phone.trim() === ''
      ) {
        setErrorMsg('All the fields are required.');
        return;
      } else if (!phone.trim().match(/^\d{10}$/g)) {
        setErrorMsg('Please enter a valid 10 digit phone number.');
        return;
      }
  
      if (!dataToEdit) {
        dispatch({
          type: enumContacts.ADD_CONTACT,
          payload: {
            id: Date.now(), // returns current timestamp
            ...contact
          }
        });
        setContact({
          firstName: '',
          lastName: '',
          phone: ''
        });
        setErrorMsg('');
      } else {
        dispatch({
          type:  enumContacts.UPDATE_CONTACT,
          payload: {
            id: dataToEdit.id,
            updates: {
              id: Date.now(),
              ...contact
            }
          }
        });
        toggleModal();
      }
    };
  
    return (
      <Form onSubmit={handleOnSubmit} className='contact-form'>
        {errorMsg && <p className='errorMsg'>{errorMsg}</p>}

        <div className="row">
        <Form.Group controlId='firstName'>
          <div className="col-25">
          <Form.Label>First Name</Form.Label>
          </div>
          <div className="col-75">
          <Form.Control
            className='firstName'
            name='firstName'
            value={contact.firstName}
            type='text'
            onChange={handleOnChange}
          />
          </div> 
        </Form.Group> 
        </div>
 
        <div className="row">
        <Form.Group controlId='lastName'> 
          <div className="col-25">
          <Form.Label>Last Name</Form.Label>
          </div>
          <div className="col-75">
          <Form.Control
            className='lastName'
            name='lastName'
            value={contact.lastName}
            type='text'
            onChange={handleOnChange}
          />
           </div>
           
        </Form.Group>
        </div>


        <div className="row">
        <Form.Group controlId='phone'>
        <div className="col-25">
          <Form.Label>Phone</Form.Label>
          </div>
          <div className="col-75">
          <Form.Control
            className='phone'
            name='phone'
            value={contact.phone}
            type='number'
            onChange={handleOnChange}
          />
          </div>
        </Form.Group> 
        </div>

        <div className="row">
        <Form.Group controlId='submit'>
          <Button variant='primary' type='submit' className='submit-btn'>
            {dataToEdit ? 'Update Contact' : 'Add Contact'}
          </Button>
        </Form.Group>
        </div>


      </Form>
    );
  };
  
  export default ContactForm;