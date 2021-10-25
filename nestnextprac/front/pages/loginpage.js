import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../components/Applayout";
import { Form, Input, Button, Checkbox } from "antd";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    if (!term) {
      return setTermError(true);
    }

    console.log({
      username,
      password,
      term,
    });
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeTerm = (e) => {
    setTermError(false);
    setTerm(e.target.checked);
  };
  return (
    <>
      <Head>
        <title>LoginPage</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Form
          onFinish={onSubmit}
          method="get"
          target="login"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              value={username}
              required
              onChange={onChangeUserName}
              name="username"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              name="password"
              value={password}
              required
              onChange={onChangePassword}
            />
            <Form.Item
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                Remember me
                {termError && (
                  <div style={{ color: "red" }}>일단 체크 하세요.</div>
                )}
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
};

export default LoginPage;
