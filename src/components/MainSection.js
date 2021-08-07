import { Typography } from "antd";
import RoundButton from "./RoundButton";
const { Title, Text } = Typography;

export default function MainSection() {
  return (
    <div className="main-section">
      <div className="main-section-content">
        <Title style={{ fontFamily: "Merriweather, serif", color: "white" }}>
          The gift of happiness
        </Title>
        <Text
          style={{
            color: "white",
            fontFamily: "Mulish, sans-serif",
            fontSize: "18px",
          }}
        >
          Show your gratitude with one of our gift sets, large and small,
          specially designed to spread joy to someone you love.
        </Text>
        <br />
        <RoundButton>SHOP NOW</RoundButton>
      </div>
    </div>
  );
}
