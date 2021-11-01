import React from "react";
import Link from "next/link";
import { Menu, Input, Button, Tooltip, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import LoginForm from "./LoginForm";
import ProfileCard from "./ProfileCard";

const dummy = {
  username: "임우찬",
  isLoggedIn: true,
};

function check() {
  console.log(dummy.username);
}

const AppLayout = ({ children }) => {
  return (
    <div onLoad={check}>
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
      <Row>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? (
            <ProfileCard
              username={dummy.username}
              userfirstanme={dummy.username[0]}
            />
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <div style={{ marginLeft: 20 }}>
            <h1>asdf</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
