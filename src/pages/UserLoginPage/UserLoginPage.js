import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterFormStyle from "../../components/RegisterForm/RegisterFormStyle";

const UserLoginPage = () => {
  return (
    <RegisterFormStyle>
      <h1>Login</h1>
      <LoginForm />
    </RegisterFormStyle>
  );
};
export default UserLoginPage;
