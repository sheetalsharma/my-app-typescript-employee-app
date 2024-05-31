import { FC } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "./Contact";
import { IEditModalProps } from "../interface/update";

const EditModal: FC<IEditModalProps> = ({
    toggleModal,
    dataToEdit,
    showModal,
    dispatch
  }) => {
    return (
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm
            dispatch={dispatch}
            dataToEdit={dataToEdit}
            toggleModal={toggleModal}
          />
        </Modal.Body>
      </Modal>
    );
  };
  
  export default EditModal;
  