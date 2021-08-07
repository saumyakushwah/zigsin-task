import { SearchOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Dropdown from "./Dropdown";
import RoundButton from "./RoundButton";
const { Header: AntHeader } = Layout;

export default function Header() {
  return (
    <AntHeader>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Dropdown />
            <span className="ant-dropdown-link">Collections</span>
            <span className="ant-dropdown-link">Gifts</span>
            <span className="ant-dropdown-link">Our magazine</span>
          </div>
          <div>
            <SearchOutlined size="large" style={{fontSize: '20px', cursor: 'pointer', color: '#495057'}} />
            <span className="right-buttons" style={{fontWeight: '600', color: '#495057'}}>Log In</span>
            <RoundButton className="right-buttons">SIGN UP</RoundButton>
          </div>
        </div>
        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu> */}
        {/* {new Array(1).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })} */}
      </Menu>
    </AntHeader>
  );
}
