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

  if (id === "special-portal") {
    const portal = document.getElementById(id);
    if (!portal) {
      throw new Error(`No element with id ${id} found`);
    }
    return createPortal(children, portal);
  }
  else if (!portalRef.current) {
    return null;
  }
  return createPortal(children, portalRef.current);
};
