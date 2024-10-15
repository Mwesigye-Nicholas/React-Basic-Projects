import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
      setQrCode(input);
      setInput("");
  };
  return (
    <div className="qrCode-container">
      <h1>QR Code Generator.</h1>
      <div >
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
                  name="qr-code"
                  value={input}
          placeholder="Enter a value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate QR-code
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};
export default QRCodeGenerator;
