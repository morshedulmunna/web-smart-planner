import React, { useState, type FC } from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  content: React.ReactElement;
}

const Modal: FC<ModalProps> = ({ content }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
      {showModal && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
          <div className="relative mx-auto max-w-[900px] rounded-lg bg-white p-6 shadow">
            <div className="absolute right-0 top-0 float-right m-2 cursor-pointer rounded-lg border bg-white p-1 shadow">
              <FaTimes onClick={() => setShowModal(false)} size={16} />
            </div>
            <div className="mt-4">{content}</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Modal;
