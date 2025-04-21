import { ArrowUpRight } from "lucide-react";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`${className} group`}>
      {children}
      <ArrowUpRight className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
};

export default Button;
