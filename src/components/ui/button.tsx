import { ArrowUpRight } from "lucide-react";
import { FC, ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button className={`${className} group`} type={type}>
      {children}
      <ArrowUpRight className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
};

export default Button;
