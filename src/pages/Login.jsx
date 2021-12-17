import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://s1.uphinh.org/2021/11/30/Daco_419365.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border: 2px solid teal;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  display: flex;
  align-item: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: space-between;
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  /* max-width: 33.33%; */
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &::disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const ButtonBack = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  /* max-width: 33.33%; */
  border: none;
  padding: 15px 20px;
  background-color: gray;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &::disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Linkk = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Your password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonWrapper>
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ButtonBack>BACK</ButtonBack>
            </Link>
          </ButtonWrapper>

          {error && <Error>Something went wrong...</Error>}
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Linkk>DO NOT YOU REMEMBER THE PASSWORD?</Linkk>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Linkk>CREATE A NEW ACCOUNT</Linkk>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
