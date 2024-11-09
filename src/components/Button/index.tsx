import { ButtonContainer, ButtonDisabled } from "./styles";import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer hidden={disabled} disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export const Disabled = ({ title, disabled }: IButtonProps) => {
  return <ButtonDisabled hidden={!disabled} disabled={true} >{title}</ButtonDisabled>;
};
export default Button;
