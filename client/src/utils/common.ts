import { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.MutableRefObject<any>,
  handlerCallback: (event?: CustomEvent<MouseEvent>) => void,
) => {
  useEffect(() => {
    const listener = (event: CustomEvent<MouseEvent>) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handlerCallback(event);
    };
    document.addEventListener('mousedown', listener as EventListener);
    document.addEventListener('touchstart', listener as EventListener);
    return () => {
      document.removeEventListener('mousedown', listener as EventListener);
      document.removeEventListener('touchstart', listener as EventListener);
    };
  }, [ref, handlerCallback]);
};
