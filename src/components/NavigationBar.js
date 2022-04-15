import React from "react";
import { IoTimeOutline } from "react-icons/io5";

import styled from "styled-components";

const NavigationBar = () => {
  return (
    <>
      <NavigationBarWarp>
        <IoTimeOutline style={{ fontSize: "20px" }} />
        <input placeholder="Slack 검색" />
        <button>프로필 이미지 버튼</button>
      </NavigationBarWarp>
    </>
  );
};

const NavigationBarWarp = styled.header`
  height: 38px;
  background: #350d36;
  color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 203;
`;

const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 5px;
  right: 16px;
`;

const ProfileModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 76px;
  padding: 20px 0px;
  border: 1px solid gray;
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
  max-width: 360px;
  min-width: 200px;
  z-index: 1012;
  max-height: calc(100vh - 20px);
  border-radius: 6px;
  color: rgb(29, 28, 29);
  position: absolute;
  top: 38px;
  right: 16px;
  & img {
    display: inline-flex;
    width: 36px;
    height: 36px;
  }
  & > div {
    display: flex;
    margin: "0";
    padding: 0px 20px 0px 24px;
  }
  & > div > div {
    display: inline-flex;
    flex-direction: column;
    width: 80%;
    margin-left: 12px;
  }
  & #profile-name {
    font-weight: bold;
    // display: inline-flex;
  }
  & #profile-active {
    font-size: 13px;
    padding: 4px 0;
    // display: inline-flex;
  }
`;

const LogOutButton = styled.button`
  border: none;
  width: 100%;
  background: transparent;
  display: block;
  height: 28px;
  padding: 5px 24px 5px 24px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #1363a3;
    color: #fff;
  }
  //
`;
export default NavigationBar;
