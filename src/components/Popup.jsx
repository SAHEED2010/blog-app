import React, { useEffect } from "react";

const Popup = ({ message, onClose, autoClose = true }) => {
  // Automatically close popup after 2 seconds (optional)
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => onClose(), 2000);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-lg transform transition-all duration-300 scale-100 animate-popup">
        <p className="text-lg font-medium mb-3">{message}</p>
        {!autoClose && (
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            OK
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
