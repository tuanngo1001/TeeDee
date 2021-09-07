import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
0%{
    opacity:0;
}
95%{
    opacity: 1;
}
`;

const BackgroundBox = styled.div`
  background-color: #beeefb;
  height: 50vh;
  width: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15rem auto;
  position: relative;
  border-radius: 23px;

  .text1 {
    z-index: ${(props) => (props.clicked ? "-700" : "700")};
    transform: ${(props) =>
      props.clicked ? "translateX(0)" : "translateX(100%)"};
    transition: transform 1s ease-in-out;
    animation: ${(props) => (props.clicked ? move : "none")} 1.5s;
  }
  .text2 {
    z-index: ${(props) => (props.clicked ? "700" : "-700")};
    transform: ${(props) =>
      props.clicked ? "translateX(-100%)" : "translateX(0)"};
    transition: transform 1s ease-in-out;
    animation: ${(props) => (props.clicked ? "none" : move)} 1.5s;
  }

  .signin-signup {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: 500;
    transform: ${(props) =>
      props.clicked ? "translateX(75%)" : "translateX(-75%)"};
    transition: all 1s;
  }
`;

const Box1 = styled.div`
  background-color: #f1fdcd;
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  transform: ${(props) =>
    props.clicked ? "translateX(90%)" : "translateX(10%)"};

  transition: transform 1s;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f1fdcd;

    z-index: -200;
  }

  &::before {
    top: 3rem;
    border-radius: 23px;
    border: 4px solid #053271;
  }
  &::after {
    bottom: 3rem;
    border-radius: 23px 23px 0 0;
    border-top: 4px solid #053271;
    border-right: 4px solid #053271;
    border-left: 4px solid #053271;
  }
`;
const Box2 = styled.div`
  background-color: #053271;
  width: 45%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  z-index: 600;

  transform: ${(props) =>
    props.clicked ? "translateX(-122.2%)" : "translateX(-0.1%)"};

  transition: transform 1s;
  border-radius: ${(props) =>
    props.clicked ? "23px 0 0 23px" : "0 23px 23px 0"};
`;

const Form = styled.form`
  color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 4rem;
`;

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 2px solid #053271;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;

  &:focus {
    outline: none;
    border: none;
    border: 2px solid #053271;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 1rem 3.5rem;
  margin-top: 1rem;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;

  box-shadow: 0 7px #999;
  &:hover {
    background-color: #1b1b1b;
  }
  &:active {
    background-color: black;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const Text = styled.div`
  position: absolute;

  z-index: 1000;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.2rem;
  color: #fff;

  .text-title {
    font-size: 5rem;
  }

  .attention {
    font-size: 2.5rem;
    position: relative;
    margin-top: 2rem;
    text-decoration: underline;
    cursor: pointer;
  }
`;

function FormComponent(props) {
  const [click, setClick] = useState(false); // false for sign in and true for sign up
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => setClick(!click);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <BackgroundBox clicked={click}>
        <Form className="signin-signup" onSubmit={handleSubmit}>
          <Title>{click ? "Sign Up" : "Sign In"}</Title>
          {click ? (
            <Input
              type="text"
              name="username"
              id="usernameId"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            <></>
          )}
          <Input
            type="email"
            name="email"
            id="emailId"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            id="passwordId"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {click ? <></> : <Link href="#">Forgot your Password?</Link>}
          <Button type="submit">{click ? "Sign Up" : "Sign In"}</Button>
        </Form>

        <Text className="text1" clicked={click}>
          <h1 className="text-title">Welcome!</h1>
          Don't have an account?
          <br />
          <span className="attention" onClick={handleClick}>
            Sign Up Here!
          </span>
        </Text>
        <Text className="text2" clicked={click}>
          <h1 className="text-title">Hi There!</h1>
          Already have an account?
          <br />
          <span className="attention" onClick={handleClick}>
            Sign In Right Now!
          </span>
        </Text>

        <Box1 clicked={click} />
        <Box2 clicked={click} />
      </BackgroundBox>
    </>
  );
}

export default FormComponent;
