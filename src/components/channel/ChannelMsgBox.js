import React from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { Button } from "../../elements";
const ChannelMsgBox = ({ chat, onChangeChat, placeholder, onSubmitForm }) => {
  return (
    <>
      <InputBox>
        <InputText
          onChange={onChangeChat}
          value={chat}
          placeholder={placeholder || `# 에게 메시지 보내기`}
        ></InputText>

        <IconBox>
          <IoSend style={{ color: "#b7b7b7" }} />
        </IconBox>
      </InputBox>
    </>
  );
};

const InputBox = styled.div`
  border: 1px solid rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border-radius: 4px;
  // height: 79px;
  // display: grid;
  margin: 0 10px 0 10px;
  padding: 15px;
  // grid-template-rows: 35px 44px;
`;
const InputText = styled.input`
  margin: 0 auto;
  width: 95%;
  border: none;
`;

const IconBox = styled.div`
  margin: 40px 10px 0px 0px;
  float: right;
`;
const IconBoxItem = styled.div`
  margin: 6px 6px;
`;
const Image1 = styled.img`
  height: 25px;
`;
const SendButton = styled.button`
  height: 30px;
  float: right;
  background-color: tansparent;
  pointer: cursor;
  border: none;
`;
const SendImage = styled.img`
  height: 30px;
`;

export default ChannelMsgBox;
