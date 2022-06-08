import { useState } from 'react';
import { Bounce, toast, UpdateOptions } from 'react-toastify';
import { IToast } from './Toast_types';
import './toast.scss';

export function ToastHook() {
  const [toastId, setToastId] = useState<string | number>();
  const DELAY = 0;
  const AUTO_CLOSE = 1000;

  // Remove all toasts !
  const toastDismiss = async () => {
    return toast.dismiss();
  };

  const toastMake = async ({ content, type, options }: IToast) => {
    toastDismiss();
    const option = {
      containerId: options.containerId,
      autoClose: options.autoClose ? AUTO_CLOSE : options.autoClose,
      closeButton: true,
      type: type,
      position: options.position,
      closeOnClick: true,
      hideProgressBar: true,
      delay: DELAY,
      draggable: false,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      style: options.style,
      onClick: options.onClick,
      onOpen: options.onOpen,
      onClose: options.onClose,
      transition: Bounce,
      limit: 1,
    };
    const id = toast.dark(content, option);
    return setToastId(id);
  };

  // Check if a toast is displayed or not
  const toastActiveCheck = (toastId: number | string) => {
    return toast.isActive(toastId);
  };

  // update a toast
  const toastUpdate = (toastId: number | string, options: UpdateOptions) => {
    toast.update(toastId, options);
  };

  return {
    toastId,
    toastDismiss,
    toastMake,
    toastActiveCheck,
    toastUpdate,
  };
}
