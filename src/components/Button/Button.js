import ButtonStyle from "./ButtonStyle";

const Button = ({ styleType, text }) => {
  return <ButtonStyle styleType={styleType}>{text}</ButtonStyle>;
};
export default Button;
