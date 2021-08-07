import { Button } from "antd";

export default function RoundButton({ children, outlined }) {
  return (
    <Button
      shape="round"
      size="large"
      className={`round-button ${outlined ? "outlined" : ""}`}
    >
      {children}
    </Button>
  );
}
