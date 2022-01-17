import react, { useState, useEffect, useCallback, useRef } from "react"

function useEventListener(eventName, eventHandler, target = window) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = eventHandler;
  }, [eventHandler]);

  useEffect(() => {
    const isSupported = target && target.addEventListener;
    if (!isSupported) {
      throw new Error('No method AddEventListener on target');
    }

    const eventListener = (event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    }

    target.addEventListener(eventName, eventListener);

    return () => {
      target.removeEventListener(eventName, eventListener);
    }

  }, [target, eventName]);

}

export function usePageSize() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const {innerWidth} = window;
    setSize(innerWidth);
  }, []);
  useEventListener('resize', useCallback((event) => {
    const {innerWidth} = event.target;
    setSize(innerWidth);
  }, []))
  return [size];
}