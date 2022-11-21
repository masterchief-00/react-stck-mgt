import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Colors } from "../Colors";
import { UserActions } from "../redux/UserSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/api/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.user);
          dispatch(UserActions.setToken(response.data.token));
          dispatch(
            UserActions.setUserData({
              names: response.data.user.name,
              email: response.data.user.email,
              phone: response.data.user.phone,
              ID_NO: response.data.user.ID_NO,
              user_type: response.data.user.user_type,
            })
          );
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Wrapper>
        <div style={{ width: "100px", padding: "10px" }}>
          <label style={{ fontWeight: "bold", fontSize: "45px" }}>
            Welcome back!
          </label>
        </div>
        <div>
          <Form method="POST" onSubmit={(e) => handleSubmit(e)}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{ fontSize: "15px" }}>Email</label>

              <input
                type="text"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{ fontSize: "15px" }}>Password</label>

              <input
                type="password"
                placeholder="********"
                name="password"
                value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <FormButton type="submit">Login</FormButton>
              <FormButton isSignup>Signup</FormButton>
            </div>
          </Form>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(${Colors.primary}, ${Colors.primary_variant_x});
`;
const Wrapper = styled.div`
  width: max-content;
  height: max-content;
  padding: 10px;
  border: solid 1px transparent;
  border-radius: 13px;
  background-color: ${Colors.bg};
  box-shadow: 0.5px 0.5px 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;
  margin: 20px;

  input {
    border: none;
    border: solid 0.7px ${Colors.text_variant};
    border-radius: 5px;
    padding: 5px;
    outline-color: ${Colors.text_variant};
    font-size: 18px;
    color: ${Colors.text_variant};

    ::placeholder {
      color: ${Colors.text_variant};
      font-size: 15px;
    }
  }
  textarea {
    min-height: 75px;
    width: 300px;
    padding: 10px;
    outline: none;
    border: solid 1px ${Colors.text_variant};
    border-radius: 5px;
    resize: none;
  }
`;
const FormButton = styled.button`
  background-color: ${(props) =>
    props.isSignup ? Colors.bg : Colors.primary_variant_x};
  border: solid 1px
    ${(props) => (props.isSignup ? Colors.text_variant : "transparent")};
  border-radius: 5px;
  padding: 15px;
  width: 100px;
  color: ${(props) => (props.isSignup ? Colors.text : Colors.bg)};
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => (props.isSignup ? Colors.text : Colors.bg)};
    color: ${(props) => (props.isSignup ? Colors.bg : Colors.primary_variant)};
    border-color: ${(props) =>
      props.isSignup ? "transparent" : Colors.primary_variant_x};
  }
`;
