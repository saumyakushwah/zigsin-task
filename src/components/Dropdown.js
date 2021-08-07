import { Menu, Dropdown as AntDropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Stationary Gifts
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Arts & Crafts
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Electronic Devices
      </a>
    </Menu.Item>
  </Menu>
);

export default function Dropdown() {
  return (
    <AntDropdown overlay={menu}>
      <span className="ant-dropdown-link" style={{ color: "black" }}>
        Products <DownOutlined />
      </span>
    </AntDropdown>
  );
}
