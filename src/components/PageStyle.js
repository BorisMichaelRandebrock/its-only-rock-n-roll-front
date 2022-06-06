import styled from "styled-components";

const LoginFormStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Nunito:wght@400;800&family=Quicksand&display=swap");
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-family: "Caveat Brush", cursive;
    margin-bottom: 20px;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    //  margin: 10px 0;
    visibility: hidden;
  }
  .logo {
    margin-top: 50px;
  }
  input {
    height: 55px;
    font-family: inherit;
    font-size: 0.9em;
    border-radius: 10px;
    align-items: center;
    margin: 0;
  }

  .form-button {
    height: 55px;
    display: flex;
    background-color: #0ea4e9;
    color: #faf4ed;
    width: 100%;
    font-size: 1.25em;
    font-weight: bold;
    font-family: inherit;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    font-family: "Nunito", sans-serif;
    cursor: pointer;
  }

  :active {
    transform: translateY(2px);
  }
  span {
    color: darkgray;
    text-decoration: none;
    font-family: "Caveat Brush", cursive;
    font-size: 1.2em;
  }
`;

export default LoginFormStyle;
