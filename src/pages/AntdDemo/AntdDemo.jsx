import React from 'react';
import { Card, Col, Row ,Table} from 'antd';

const { Meta } = Card;

export default function AntdDemo() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];




    return (
        <>
            <div className='container'>
                <Row>
                    {/* span: tối đa 24; chỉ số cho Col => 24/số lượng cột cần tạo 
            Col: tự thư viện chia kích của mỗi cột */}
                    <Col className='cardCol' span={6} >
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={6} >
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={6} >
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={6} >
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>

                <Table dataSource={dataSource} columns={columns} />;
            </div>
        </>

    )
}
