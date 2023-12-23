import { Button, Tooltip } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../index.css";
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <Tooltip title={isOpen ? "Close" : "Show"}>
        <Button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="primary"
          shape="circle"
        >
          {isOpen ? <PlusCircleOutlined /> : <MinusCircleOutlined />}
        </Button>
      </Tooltip>

      {isOpen && children}
    </div>
  );
}

export default Box;
