import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  id?: string;
}

export const Portal = ({ children, id = "special-portal" }: PortalProps) => {
  const portal = document.getElementById(id);
  if (!portal) {
    throw new Error(`No element with id ${id} found`);
  }
  return createPortal(children, portal);
};
