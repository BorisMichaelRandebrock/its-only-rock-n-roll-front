import styled from "styled-components";
import theme from "../../theme/theme";

const SongFormStyles = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid black;
  padding: 30px;
  margin: 30px 0;
  margin-left: 20px;
  margin-right: 20px;

  .song-form__container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  label {
    padding: 0 20px;
    margin-bottom: 25px;
    width: 100%;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  .song-form__button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    gap: 10px;
    width: 100%;
    background-color: ${theme.greenDark};
    height: 40px;
  }
  .song-form__button-cancel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    gap: 10px;
    width: 100%;
    background-color: ${theme.redrgb};
    height: 40px;
  }

  p {
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 0;
    margin-bottom: 0;
  }
  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    // border: none;
    gap: 10px;
    align-items: center;
    text-align: center;
    padding-bottom: 3px;
    margin-top: 20px;
    font-size: 1.45em;
    font-weight: bold;
    font-family: inherit;
  }
`;

export default SongFormStyles;
