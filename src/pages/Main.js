import React from "react";
import { Button } from "../elements";

// 처음 로그인 했을때, 주된 컨텐츠가 되는 부분 (슬랙에서 Slack Connect 부분)
const Main = () => {
  return (
    <>
      <h1>Slack Connect</h1>
      <p>채널과 DM 버튼을 보여줍니다</p>
      <Button>테스트</Button>
    </>
  );
};
export default Main;
