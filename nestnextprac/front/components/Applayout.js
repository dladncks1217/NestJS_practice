import React from "react";
import Link from "next/link";
import { Menu, Input, Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>홈으로</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="joinpage">
          <Link href="/joinpage">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="loginpage">
          <Link href="/loginpage">
            <a>
              <Button>로그인</Button>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search
            placeholder="검색어를 입력하세요"
            style={{ verticalAlign: "middle" }}
          />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
