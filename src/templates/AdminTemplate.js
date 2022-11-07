import { Route } from "react-router-dom";
import React, { useState } from 'react';

// Cài đặt antd
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;



export const AdminTemplate = (props) => {
    const [stateCollapsed, setCollapsed] = useState({
        collapsed:false
    });

    //toggle nếu collapsed true => toggle setCollapsed là false
    //toggle nếu collapsed false => toggle setCollapsed là true
    const toggle = () => {
        setCollapsed({
            collapsed: !stateCollapsed.collapsed
        })
    }

    return <Route exact path={props.path} render={(propsRoute) => {
        return <>

            <Layout>
                <Sider trigger={null} collapsible collapsed={stateCollapsed.collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })} */}
                        
                        {stateCollapsed.collapsed ?  <MenuUnfoldOutlined style={{fontSize: '20px'}} onClick={toggle} /> : <MenuFoldOutlined style={{fontSize: '20px'}} onClick={toggle}/> }

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >

                        <props.component {...propsRoute} />

                    </Content>
                </Layout>
            </Layout>





            
        </>
    }} />
}