import { Button, Form } from 'antd';

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: React.ReactNode;
};

export const CustomButton = ({ children, htmlType = 'button', type, danger, loading, shape, icon, onClick }: Props) => {
    return (
        <Form.Item>
            <Button onClick={onClick} icon={icon} shape={shape} loading={loading} htmlType={htmlType} type={type} danger={danger}>{children}</Button>
        </Form.Item>
    )
}