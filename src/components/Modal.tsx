import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => {
        setAnimationClass("animate-modal-in");
      }, 10);
      document.body.style.overflow = "hidden";
    } else {
      setAnimationClass("animate-modal-out");
      setTimeout(() => {
        setIsVisible(false);
        setAnimationClass("");
      }, 300);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? "bg-black bg-opacity-40" : "bg-black bg-opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative bg-white rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto mx-4 shadow-xl ${animationClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 focus:outline-none hover:bg-gray-100 p-1.5 rounded-full transition-colors duration-200 z-10" 
          aria-label={t("common.close", "关闭")}
        >
          <X className="size-5 text-[#002E33]" />
        </button>
        
        <div className="pr-8">
          <h3 className="text-lg font-semibold text-[#002E33] mb-4">{title}</h3>
          <div className="text-sm text-[#002E33]/80">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 