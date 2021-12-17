import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

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
  width: 40%;
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

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Error = styled.span`
  color: red;
`;

const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-wrap: no-wrap;
  /* width: auto; */
  justify-content: space-between;
  align-items: stretch;
  align-content: space-between;
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  /* width: 50%; */
  border: none;
  padding: 16px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const ButtonBack = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  /* width: 40%; */
  border: none;
  padding: 16px 20px;
  background-color: gray;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleRegister = (e) => {
    e.preventDefault();
    register(dispatch, {
      firstName,
      lastName,
      email,
      username,
      password,
      confirmPassword,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="Your first name..."
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="Your last name..."
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="Your Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm password..."
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* {error && <Error>Something went wrong...</Error>} */}

          <Agreement>
            By creating an account on QATA, you consent to the process of your
            personal data in accordance with our <b>PRIVACY POLICY</b>.
          </Agreement>
          <ButtonWrapper>
            <Button onClick={handleRegister} disabled={isFetching}>
              CREATE
            </Button>

            <Link to="/" style={{ textDecoration: "none" }}>
              <ButtonBack>BACK</ButtonBack>
            </Link>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
