import React from 'react';

const Modal = ({ isOpen, onClose, title, link }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl z-50 max-w-4xl w-full">
        <div className="flex justify-between items-center bg-gray-100 p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title={title}
            src={link}
            frameBorder="0"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
