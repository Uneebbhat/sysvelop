import { ArrowUpRight } from "lucide-react";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: any;
}

const Button: FC<ButtonProps> = ({ children, className, type }) => {
  return (
    <button className={`${className} group`} type={type}>
      {children}
      <ArrowUpRight className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
};

export default Button;
