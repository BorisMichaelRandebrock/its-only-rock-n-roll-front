import ButtonStyle from "./ButtonStyle";

const Button = ({ action, styleType, text }) => {
  return (
    <ButtonStyle styleType={styleType} onClick={action}>
      {text}
    </ButtonStyle>
  );
};
export default Button;
