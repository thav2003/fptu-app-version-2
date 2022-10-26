import React, { useState } from "react";
import {  Menu,Layout } from "antd";
import {
    AppstoreOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from "@ant-design/icons";
import LocalStorageUtils,{LOCAL_STORAGE_KEY} from "@utils/browser/LocalStorage";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
const {  Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem(
      <Link to="/admin">Dashboard</Link>,
      "/admin/dashboard",
      <AppstoreOutlined className="menu-dashboard-icon" />
    ),
  
    getItem(
      "Manager",
      "sub1",
      <VideoCameraOutlined className="menu-dashboard-icon" />,
      [
        getItem("Cài đặt", "3"),
        getItem(<Link to="/admin/dang-bai">Đăng bài</Link>, "4"),
        getItem(<Link to="/admin/xet-duyet">Duyệt bài</Link>, "/admin/xet-duyet"),
        getItem(<Link to="/admin/xoa-bai">Bài viết đã duyệt</Link>, "6"),
        getItem(<Link to="/admin/lich-dang-bai">Lịch đăng bài</Link>, "7"),
        getItem(<Link to="/admin/lich-su">Lịch sử</Link>, "/admin/lich-su"),
      ]
    ),
    getItem(
      "Manger member",
      "sub2",
      <UploadOutlined className="menu-dashboard-icon" />,
      [
        getItem("Xóa thành viên", "9"),
        getItem("Cấm thành viên", "10"),
        getItem("Thành viên tích cực", "11"),
      ]
    ),
    getItem(
      "Thông báo",
      "12",
      <UploadOutlined className="menu-dashboard-icon" />
    ),
    getItem(
      "Tool FaceBook",
      "13",
      <UploadOutlined className="menu-dashboard-icon" />
    ),
    getItem(
      "Logout",
      "logout",
      <UploadOutlined className="menu-dashboard-icon" />
    ),
  ];

const SideBar=(props)=>{
  const {tab,history}=props;
  const [collapsed, setCollapsed] = useState(false);
  //console.log(props);
    return(
        <Sider
          collapsible 
          collapsed={collapsed} 
          onCollapse={value => setCollapsed(value)}
          style={{
            overflow: "auto",
            height  : "100vh",
            position: "sticky",
            top     : 0,
            left    : 0
            }}
        >
            <div className="logo">
            <Link to="/">
                <img
                  src="/assets/images/fpt-logo.png"
                  alt="FUHCM.com"
                  style={{ width: "100%" }}
                />
            </Link>
            </div>
            <Menu
              theme="dark"
              mode="inline"
            //defaultSelectedKeys={["1"]}
              selectedKeys={[tab]}
              items={items}
              onClick={({key})=>{
                if(key==="logout"){
                    LocalStorageUtils.clear();
                    history.push("/");
                }
            }}
            />
        </Sider>
    );
};

export default SideBar;
