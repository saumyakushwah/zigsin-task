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
      <TileSection />
    </Layout>
  );
}

export default App;
