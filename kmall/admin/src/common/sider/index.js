import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;


import "./index.css"

class AdminSider extends Component {
    render() {
        return (
          <div className="AdminSider">
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  style={{ minHeight: 780, borderRight: 0 }}
                >
                    <Menu.Item key="1">
                      <NavLink exact to="/"><Icon type="home" />首页</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <NavLink exact to="/user"><Icon type="user" />用户管理</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <NavLink exact to="/category"><Icon type="unordered-list" />分类管理</NavLink>
                    </Menu.Item>      
                    <Menu.Item key="4">
                      <NavLink exact to="/product"><Icon type="appstore" />商品管理</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <NavLink exact to="/ad"><Icon type="fund" />广告管理</NavLink>
                    </Menu.Item>                                                                     
                </Menu>
              </Sider>
          </div>
        );
    }
}


export default AdminSider