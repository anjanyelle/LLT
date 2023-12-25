import React, { useState } from 'react';
    import { PlusOutlined } from '@ant-design/icons';
    import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
    const { Option } = Select;
      import './Step.css'
import Select1 from './Select1';
export default function Side1({toggel}) {
    

    const [open, setOpen] = useState(toggel);

    const OPTIONS=["Australia",
"Canada",
"Germany",
"Switzerland",
"US",
"UK",
"New Zealand",
"The Netherlands",]
const [selectedItems, setSelectedItems] = useState([]);
const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
      const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
  return (
    <div>
  <>

          <Drawer
            title="which country you want to go"
            width={330}
            onClose={onClose}
            open={open}
            bodyStyle={{
              paddingBottom: 80,

            }}
            extra={
              <Space>
                {/* <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose} type="primary">
                  Submit
                </Button> */}
              </Space>
            }
          >
            {/* <h6>Search Filters</h6> */}
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={23}>
                  <Form.Item
                    name="name"
                    label="Which State you want to go"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter State',
                      },
                    ]}
                  >
                    <Input placeholder="Where do you want to go?"  size='large'/>
                  </Form.Item>
                </Col>
             
              </Row>
              <Row gutter={16}>
                <Col span={23}>
                  <Form.Item
                    name="owner"
                    label="Select Course"
                    rules={[
                      {
                        required: true,
                        message: 'Please select',
                      },
                    ]}
                  >
                    <Select placeholder="Please select State" size='large'>
                      <Option value="xiao">Xiaoxiao Fu</Option>
                      <Option value="mao">Maomao Zhou</Option>
                    </Select>
                    
             
                  </Form.Item>
                </Col>
              </Row>

              <Row>
              <Col span={23}>
                  <Form.Item
                    name="type"
                    label="Intake"
                    rules={[
                      {
                        required: true,
                        message: 'Please choose Intake',
                      },
                    ]}
                  >
                    <Select placeholder="Please choose Intake" size='large'>
                      <Option value="private">Private</Option>
                      <Option value="public">Public</Option>
                    </Select>
                  </Form.Item>
                </Col>

                </Row>
                <Row gutter={16}>
                <Col span={23}>
                  <Form.Item
                    name="owner"
                    label="Which aptitude test did you take"
                    rules={[
                      {
                        required: true,
                        message: 'Which aptitude test did you take',
                      },
                    ]}
                  >
                    <Select placeholder="Which aptitude test did you take " size='large'>
                      <Option value="xiao">GRE</Option>
                      <Option value="mao">GMAT</Option>

                    </Select>
                  </Form.Item>
                </Col>
             
              </Row>
              <Row gutter={16}>
                <Col span={23}>
                  <Form.Item
                    name="owner"
                    label="Which English test did you take"
                    rules={[
                      {
                        required: true,
                        message: 'Which English test did you take',
                      },
                    ]}
                  >
                    <Select placeholder="Which English test did you take " size='large'>
                      <Option value="xiao">TOEFL</Option>
                      <Option value="mao">IELTS</Option>
                      <Option value="mao">PTE</Option>
                    </Select>
                  </Form.Item>
                </Col>
             
              </Row>
              

              <button className="btn btn-primary col-md-11 mx-11" type='submit' >
          Search  Filter
          </button>
            </Form>
          </Drawer>
        </>
      
    </div>
  )
}
