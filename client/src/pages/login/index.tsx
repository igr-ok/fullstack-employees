import React from "react";
import { Layout } from "../../components/layout";
import { Row, Card, Form, Space, Typography } from "antd";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input/input";
import { CustomButton } from "../../components/custom-button";
import { Link } from 'react-router-dom';
import { Paths } from "../../paths";

export const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Come in" style={{ width: "30rem" }}>
                    <Form onFinish={() => null}>
                        <CustomInput type="email" name="email" placeholder="Email"/>
                        <PasswordInput name="password" placeholder="Password" />
                        <CustomButton type="primary" htmlType="submit">Log in</CustomButton>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Don`t have account? <Link to={Paths.register}>Please register..</Link>
                        </Typography.Text>
                    </Space>
                </Card>

            </Row>
        </Layout>
    )
}