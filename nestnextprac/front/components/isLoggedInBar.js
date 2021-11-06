import React from "react";
import Link from "next";
import { Button, Menu } from "antd";

const notLoggedInBar = (
  <>
    <Menu.Item key="joinpage">
      <Link href="/joinpage">
        <a>
          <Button>회원가입</Button>
        </a>
      </Link>
    </Menu.Item>
  </>
);
const loggedInBar = (
  <>
    <Menu.Item key="logoutPage">
      <Button>로그아웃</Button>
    </Menu.Item>
  </>
);
const isLoggedInBar = (loginstate) => {
  return loginstate ? loggedInBar : notLoggedInBar;
};

export default isLoggedInBar;
