import { FC, MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
