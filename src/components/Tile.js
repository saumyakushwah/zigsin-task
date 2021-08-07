import { Card, Typography } from "antd";
import RoundButton from "./RoundButton";
const { Title } = Typography;

export default function Tile({ image, features }) {
  return (
    <div style={{ padding: "10px" }}>
      <Card
        bordered={false}
        style={{ width: 400, height: 500, textAlign: "center" }}
      >
        <div style={{ padding: "24px" }}>
          <Title level={3}  style={{ fontFamily: "Merriweather, serif", fontSize: '22px', lineHeight: '36px', fontWeight: '900'}}>
            Ready for autumn
            <br />
            collection
          </Title>
          <Title
            level={5}
            style={{
              fontSize: "13px",
              fontWeight: "bolder",
              marginBottom: "20px",
              fontFamily: "Mulish, sans-serif",
              color: '#444'
            }}
          >
            Treat yourself to some of our brand new autumn collection - all with
            the wonderful colours surrounding you.
          </Title>
          <RoundButton outlined>PURCHASE NOW</RoundButton>
        </div>
        <img
          width={400}
          src={image} //it should be dynamic
          style={{ padding: "none", margin: "8px -24px 0 -24px" }}
          alt="collection"
        />
      </Card>
    </div>
  );
}
