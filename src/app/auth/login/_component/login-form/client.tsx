"use client";

import { useServices } from "@root/src/context/service/context";
import useAuth from "@root/src/hooks/useAuth";
import { Button, Card, Flex, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";
import React, { memo, useEffect } from "react";

type FieldType = {
  username?: string;
  password?: string;
};

const FormUsername = "username";
const FormPassword = "password";

const LoginFormClient = (): JSX.Element => {
  const router = useRouter();
  const [form] = useForm();
  const { isAuthenticated, sessionStatus } = useAuth();
  const { authUseCase } = useServices();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/menu");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const username = form.getFieldValue(FormUsername);
      const password = form.getFieldValue(FormPassword);
      const res = await authUseCase.login(username, password);

      if (res?.ok) {
        const callbackUrl =
          new URLSearchParams(window.location.search).get("callbackUrl") ||
          "/menu";
        router.push(callbackUrl);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <Form
        form={form}
        autoComplete="off"
        requiredMark="optional"
        onSubmitCapture={handleSubmit}
      >
        <Form.Item<FieldType>
          label="Username"
          name={FormUsername}
          rules={[{ required: true, message: "Username is required." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name={FormPassword}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Flex justify="end">
            <Button
              type="primary"
              htmlType="submit"
              disabled={sessionStatus === "loading"}
            >
              Submit
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default memo(LoginFormClient);
