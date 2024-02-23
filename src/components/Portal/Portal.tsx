import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  id?: string;
}

export const Portal = ({ children, id = "special-portal" }: PortalProps) => {
  const portalRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const portalElement = document.getElementById(id);
    if (!portalElement) {
      throw new Error(`No element with id ${id} found`);
    }
    portalRef.current = portalElement;
  }, [id]);
  if (!portalRef.current) {
    return null;
  }
  return createPortal(children, portalRef.current);
};
