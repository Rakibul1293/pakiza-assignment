import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;

function AppContact() {
    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Ask Your Question</h2>
                </div>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your Full Name!' }]}
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input
                            type="email"
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="telephone"
                        rules={[{ required: true, message: 'Please input your Telephone!' }]}
                    >
                        <Input placeholder="Telephone" />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                        rules={[{ required: true, message: 'Please input your Subject!' }]}
                    >
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        rules={[{ required: true, message: 'Please input your Subject!' }]}
                    >
                        <TextArea placeholder="message" />
                    </Form.Item>
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                        ]}
                    >
                        <Checkbox>
                            I agree with terms and conditions
                            </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AppContact;
