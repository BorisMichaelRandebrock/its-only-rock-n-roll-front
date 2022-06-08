import styled from "styled-components";
import theme from "../../theme/theme";

export const ButtonStyle = styled.button`
  display: flex;
  background-color: ${theme.blueDark};
  color: ${theme.white};
  width: 100%;
  font-size: 1em;
  font-weight: bold;
  font-family: inherit;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;

  :active {
    transform: translateY(2px);
  }

  ${(props) =>
    props.styleType === "primary"
      ? `
      background: ${theme.blueDark};
      color: ${theme.white};
      border: 3px solid ${theme.blueDark};
    `
      : ""}

  ${(props) =>
    props.styleType === "secondary"
      ? `
      background: rgba(${theme.redrgb},.25);
      color: ${theme.red};
      border: 3px solid ${theme.red};
    `
      : ""}
`;

export default ButtonStyle;
