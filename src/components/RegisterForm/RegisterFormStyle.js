import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
const RegisterFormStyle = styled.div`
  * {
    box-sizing: border-box;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;

  body {
    font-family: "Nunito", sans-serif;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  /* 


  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
  }

  input {
    height: 40px;
    margin-top: 10px;
    font-family: inherit;
    font-size: 0.9em;
  }

  .form-button {
    padding: 10px 45px;
    margin: 10px 0;
    border: none;
    font-size: 0.8em;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #1da1f2;
    color: #f5f8fa;
    cursor: pointer;
  } */
`;

export default RegisterFormStyle;
