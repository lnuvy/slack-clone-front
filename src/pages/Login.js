<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoginHeader from "../components/login/LoginHeader";
import LoginFooter from "../components/login/LoginFooter";
import { Button, Input, Text } from "../elements";
import { userActions } from "../redux/modules/user";
>>>>>>> 179bd23 (로그인 컴포넌트들 폴더로 넣기)

const Login = () => {
  return (
    <>
      <h1>Login!</h1>
    </>
  );
};
export default Login;
