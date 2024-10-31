import React from "react";
import { IconAlertTriangle } from '@tabler/icons-react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center dark:text-white text-black bg-white dark:bg-black bg-opacity-100 z-50">
      <div className="p-8 rounded-lg shadow-md text-center max-w-xs mx-4 border">
        <h2 className="text-lg font-bold mb-4">
            <IconAlertTriangle className="h-full w-full justify-center items-center text-red-500 dark:text-red-500"/>
          For Best Experience
        </h2>
        <p className="mb-4">
          Please use this website on a laptop for a better experience.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
