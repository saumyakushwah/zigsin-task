import "antd/dist/antd.css";
import { Layout } from "antd";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import TileSection from "./components/TileSection";

function App() {
  return (
    <Layout>
      <Header />
      <MainSection />
      {/* <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
      <TileSection />
    </Layout>
  );
}

export default App;
