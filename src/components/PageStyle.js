import styled from "styled-components";

const PageStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    //  margin: 10px 0;
    visibility: hidden;
  }
  .logo {
    margin-top: 25px;
  }
  input {
    width: 100%;
    height: 55px;
    font-family: inherit;
    font-size: 0.9em;
    border-radius: 10px;
    border: 2px solid black;
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
    cursor: pointer;
  }

  span {
    text-decoration: none;
    font-family: "Caveat Brush", cursive;
    font-size: 1.5em;
  }

  .submit-button {
    margin-top: 30px;
    margin-bottom: 10px;
    width: 100%;
  }

  .header-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default PageStyle;
