import { IModal } from "src/types/Types";

const Modal = ({ isOpen, children, className }: IModal) => {
  return (
    <div>
      {isOpen && (
        <div
          className={`${className} flex absolute top-8 right-0 modal-box bg-[#242424] rounded-md w-56`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
