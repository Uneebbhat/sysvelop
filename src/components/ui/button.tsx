import { ArrowUpRight } from "lucide-react";
import { FC, ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: ButtonType;
  disabled?: any;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`${className} group`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      <ArrowUpRight className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
};

export default Button;
