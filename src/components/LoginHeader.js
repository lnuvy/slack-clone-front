import React from "react";
import slackLogo from "../shared/images/slackLogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginHeader = (props) => {
  return (
    <Header>
      <div></div>
      <div>
        <Link to="/login">
          <img alt="Slack" src={slackLogo} height="34px" />
        </Link>
      </div>
      <SignupDiv className="flex-column">
        <p>Slack을 처음 이용하시나요?</p>
        <Link to="/signup">계정 생성</Link>
      </SignupDiv>
    </Header>
  );
};

const Header = styled.div`
  padding: 48px 0 40px;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const SignupDiv = styled.div`
  align-items: flex-end;
  padding-right: 40px;
`;

export default LoginHeader;
