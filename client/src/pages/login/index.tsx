import React from "react";
import { Layout } from "../../components/layout";
import { Row, Card, Form } from "antd";

export const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Come in" style={{ width: "30rem"}}>
                    <Form onFinish={() => null}>
                        <Input />
                    </Form>
                </Card>

            </Row>
        </Layout>
    )
}