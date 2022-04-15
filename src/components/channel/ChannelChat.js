import React from "react";
import styled from "styled-components";

import { Image } from "../../elements";

const ChannelChat = () => {
  return (
    <>
      <ChatListWrap>
        <ChatListBox>
          <ChatListBoxInfo>
            <ChatListUserImageWrap>
              <Image profileImg />
            </ChatListUserImageWrap>
            <ChatListUserInfo>
              <text>홍길동</text> <span>시간</span>
              <br />
              <div>내용</div>
            </ChatListUserInfo>
          </ChatListBoxInfo>
        </ChatListBox>
      </ChatListWrap>
    </>
  );
};

const ChatListWrap = styled.div`
  height: 75vh;
  //   padding: 8px 10px;
  //   flex-direction: rows;
  overflow-y: scroll;
`;
const ChatListBox = styled.div`
  //   margin-bottom: 16px;
`;
const ChatListBoxInfo = styled.div`
  display: flex;
  padding: 8px 20px;
  flex-direction: rows;
`;
const ChatListUserImageWrap = styled.div``;

const ChatListUserInfo = styled.div`
  margin-left: 10px;
  & > text {
    font-size: 15px;
  }
  & > span {
    font-size: 12px;
    color: rgba(var(--sk_foreground_max_solid, 97, 96, 97), 1);
  }
  & > div {
    padding-top: 8px;
  }
`;

export default ChannelChat;
