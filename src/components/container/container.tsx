import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return <div className={`flex max-w-[1313px] mx-auto px-2  ${className}`}>{children}</div>;
}

export default Container;
