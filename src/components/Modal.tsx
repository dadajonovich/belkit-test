import { useSelector } from 'react-redux';
import { modal } from '../features/modal/modal-selectors';
import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../store';
import { hideModal } from '../features/modal/modal-slice';

export const Modal = () => {
  const { message, isVisible } = useSelector(modal);
  const modalRef = useRef<HTMLDialogElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!modalRef.current) return;

    if (isVisible) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isVisible, modalRef]);

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Alert!</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <form method="dialog">
            <button onClick={() => dispatch(hideModal())} className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
