import styled from "styled-components";

const Error404PageComponent = styled.div`
  display: flex;
  align-items: center;

  p {
    background-color: #1da1f2;
    color: #f5f8fa;
  }
`;

const Error404Page = () => {
  return (
    <Error404PageComponent>
      <p>ERROR 404, PAGE NOT FOUND</p>
    </Error404PageComponent>
  );
};

export default Error404Page;
