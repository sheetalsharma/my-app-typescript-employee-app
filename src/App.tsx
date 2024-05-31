import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import { IState } from './interface/state';
import { IContact } from './interface/contact';
import { contactsAction } from './actions/action';
import Header from './components/Header';
import ContactForm from './components/Contact';
import ContactList from './components/ContactList';
import EditModal from './components/EditModal';

const initialState: IState = {
  contacts: []
};

function App() {
  const [state, dispatch] = useReducer(contactsAction, initialState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<IContact | undefined>(undefined);

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const handleEdit = (id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();
  };

  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <ContactForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
        <hr />
        {state.contacts.length > 0 && (
          <ContactList
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
      </div>
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
