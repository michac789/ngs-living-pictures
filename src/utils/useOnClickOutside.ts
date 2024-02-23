import { useEffect, RefObject } from 'react';

type EventListener = (event: Event) => void;

export function useOnClickOutside<T extends HTMLElement>(
  handler: EventListener,
  ...refs: RefObject<T>[]
) {
  useEffect(() => {
    const listener: EventListener = event => {
      for (const ref of refs) {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, refs]);
}
