"use client";

import React, { type FC } from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  content: React.ReactElement;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ content, showModal, setShowModal }) => {
  return (
    <React.Fragment>
      {showModal && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-70">
          <div className="relative mx-auto max-w-[900px] rounded-lg bg-white p-6 shadow">
            <div className="absolute right-0 top-0 float-right m-2 cursor-pointer rounded-lg border bg-white p-1 shadow">
              <FaTimes onClick={() => setShowModal(false)} size={16} />
            </div>
            <section className="mt-4">{content}</section>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Modal;
