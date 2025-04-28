import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, className }) => {
  const { t } = useTranslation();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  
  // 检测内容是否溢出
  useEffect(() => {
    const checkOverflow = () => {
      const element = contentRef.current;
      if (element) {
        setIsOverflowing(element.scrollHeight > element.clientHeight);
      }
    };
    
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [answer]);

  return (
    <>
      <div className={`flex flex-col bg-[#A7F0FF] px-6 py-6 w-full rounded-2xl ${className || ""}`} style={{ height: '240px' }}>
        <h4 className="text-sm sm:text-base xl:text-lg font-semibold text-[#002E33] mb-3">
          {question}
        </h4>
        <div className="flex-grow overflow-hidden relative" style={{ maxHeight: '130px' }}>
          <div className="h-full overflow-hidden">
            <p 
              ref={contentRef}
              className="text-xs sm:text-sm font-medium text-[#002E33]/60"
              style={{ 
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: '1.5'
              }}
            >
              {answer}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8" 
            style={{ 
              background: 'linear-gradient(to bottom, rgba(167, 240, 255, 0) 0%, rgba(167, 240, 255, 1) 100%)' 
            }}>
          </div>
        </div>
        <div className="flex justify-center mt-auto pt-2">
          {isOverflowing && (
            <button 
              onClick={() => setModalOpen(true)}
              className="text-xs text-[#002E33] font-medium hover:underline inline-flex items-center px-4 py-1 bg-[#8DE4FF] rounded-full"
            >
              {t("common.view_more", "查看更多")}
            </button>
          )}
        </div>
      </div>
      
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={question}
        content={answer}
      />
    </>
  );
};

export default FaqItem; 