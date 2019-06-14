import { Icon, Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Header, Sider, Content } = Layout;

const CustomLayout = styled(Layout)`
  min-height: 100vh;
  & .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  & .trigger:hover {
    color: #1890ff;
  }

  & .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
`;

class DashboardLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <CustomLayout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/dashboard/">
                <Icon type="user" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/dashboard/users">
                <Icon type="video-camera" />
                <span>Users</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </CustomLayout>
    );
  }
}

export default DashboardLayout;
