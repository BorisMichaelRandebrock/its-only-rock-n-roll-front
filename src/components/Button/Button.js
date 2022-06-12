import ButtonStyle from "./ButtonStyle";

const Button = ({ styleType, text, action }) => {
  return (
    <ButtonStyle styleType={styleType} onClick={action}>
      {text}
    </ButtonStyle>
  );
};
export default Button;
