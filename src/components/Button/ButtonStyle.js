import styled from "styled-components";
import theme from "../../theme/theme";

export const ButtonStyle = styled.button`
  display: flex;
  background-color: #60bec4;
  color: #faf4ed;
  width: 100%;
  font-size: 1.25em;
  font-weight: bold;
  font-family: inherit;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  border-radius: 10px;
  border: none;
  font-family: "Nunito", sans-serif;
  cursor: pointer;

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
      background: rgba(${theme.bluelightRgb},.25);
      color: ${theme.blueDark};
      border: 3px solid ${theme.blueDark};
    `
      : ""}
`;

export default ButtonStyle;
