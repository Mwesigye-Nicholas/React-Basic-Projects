import { useState } from "react";
import Modal from "./modal";
import "./modal.css";
const ModalTest = () => {
  const [showModalPopup, setShowModalPopupPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopupPopup(!showModalPopup);
  };
  const onClose = () => {
    setShowModalPopupPopup(false);
  };
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
                  header={<h1>Customized Header</h1>}
                  footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized Body</div>}
        />
      )}
    </div>
  );
};
export default ModalTest;
