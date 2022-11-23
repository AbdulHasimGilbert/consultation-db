import { Col, Form, Input, Row, TimePicker, Button} from "antd";
import React from "react";
import Layout from "../components/Layout";

function Lecturer(){

    const onFinish = values =>{
        console.log("Success:", values)
    }

    return(
        <Layout>
            <h1 className="page-title">Apply for Lecturer</h1>
            <hr/>

            <Form layout="vertical" onFinish={onFinish}>
                <h1 className="card-title mt-3">Personal Information</h1>
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="First Name" name="firstName" rules={[{required : true}]}>
                            <Input placeholder="First Name"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Last Name" name="lastName" rules={[{required : true}]}>
                            <Input placeholder="Last Name"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Subject" name="subject" rules={[{required : true}]}>
                            <Input placeholder="Subject"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Faculty" name="faculty" rules={[{required : true}]}>
                            <Input placeholder="Faculty"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Campus" name="campus" rules={[{required : true}]}>
                            <Input placeholder="Campus"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Availability" name="availability" rules={[{required : true}]}>
                            <TimePicker.RangePicker/>
                        </Form.Item>
                    </Col>
                </Row>
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button className="primary-button" htmlType="submit">SUBMIT</Button>
                </div>
            </Form>
        </Layout>
        
    )
}

export default Lecturer;