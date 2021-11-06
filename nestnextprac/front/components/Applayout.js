import React from "react";
import Link from "next/link";
import { Menu, Input, Button, Tooltip, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import LoginForm from "./LoginForm";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import isLoggedInBar from "./isLoggedInBar";

const AppLayout = ({ children }) => {
  const { isLoggedIn, username } = useSelector((state) => state.user);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>홈으로</a>
          </Link>
        </Menu.Item>
        <isLoggedInBar loginstate={{ isLoggedIn }} />
        <Menu.Item key="search">
          <Input.Search
            placeholder="검색어를 입력하세요"
            style={{ verticalAlign: "middle" }}
          />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <ProfileCard username={username} userfirstanme={username[0]} />
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
